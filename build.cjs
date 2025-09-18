const fs = require("node:fs");
const marked = require("marked");
const { markedHighlight } = require("marked-highlight");
const hljs = require("highlight.js");

const markdown = fs.readFileSync("./CHEATSHEET.md", "utf8");

// useful: https://github.com/markedjs/marked/blob/60626572f1e16d256317b40f9472faa6b5a02352/src/Renderer.ts
const renderer = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const id = text
      .replaceAll(/\s/g, "-")
      .replaceAll("&", "")
      .replaceAll("<", "")
      .replaceAll(">", "")
      .replaceAll('"', "")
      .replaceAll("'", "");
    const className = {
      1: "kern-heading-x-large",
      2: "kern-heading-large",
      3: "kern-heading-medium",
      4: "kern-heading-small",
      5: "kern-heading-small",
      6: "kern-heading-small",
    }[depth];
    return `<h${depth} id="${id}" class="${className}">${text}</h${depth}>`;
  },
  paragraph({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<p class="kern-body">${text}</p>`;
  },
  listitem({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<li class="kern-body">${text}</li>`;
  },
  link({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<a href="${href}" class="kern-link">${text}</a>`;
  },
  codespan({ text }) {
    text = text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
    return `<code style="font-family: monospace">${text}</code>`;
  },
};

marked.use({ renderer });
marked.use(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

const start = `
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>KERN UX Cheatsheet</title>
  <meta content="width=device-width, initial-scale=1" name="viewport">

  <link href="https://cdn.jsdelivr.net/npm/highlightjs@9.16.2/styles/monokai-sublime.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.32.2/tocbot.css">

  <style>
    @media screen and (min-width: 1000px) {
      .main { display: flex; }
    }
    @media (prefers-color-scheme: dark) {
      .js-toc {
        color: white;
      }
    }
  </style>
</head>
<body>
<div class="main">
<nav class="js-toc sidebar"></nav>
<div class="content">
`;

const html = marked.parse(markdown);

const end = `
</div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.32.2/tocbot.min.js"></script>

<script>
tocbot.init({
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: 'body',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});

</script>
  </body></html>`;

fs.writeFileSync("./docs/index.html", start + html + end);
