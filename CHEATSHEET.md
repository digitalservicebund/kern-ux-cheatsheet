 <link rel="stylesheet" href="https://unpkg.com/@kern-ux/native/dist/kern.css" />
 <link rel="stylesheet" href="https://unpkg.com/@kern-ux/native/dist/fonts/fira-sans.css" />
<style>
  body { max-width: none; }
</style>

<style>
    .docs td { vertical-align: top; font-family: monospace; }
    .docs tr:has([rowspan]):not(:first-child) { border-top: 1rem solid transparent; }
    .kern-tokens-color { width: 1.5rem; height: 1.5rem; }
    .docs td strong { font-family: inherit; }
</style>

# KERN UX Cheatsheet

Zielgruppe: Menschen, die schon HMTL _können_ und nur schnell wissen wollen, welche Klasse wohin gehört.

Zur Verwendung mit dem Stylesheet aus dem [KERN - Plain-CSS-HTML-Kit](https://gitlab.opencode.de/kern-ux/kern-ux-plain).

Sortiert nach Basics first und am Ende die größeren zusammengesetzten Komponenten.

## Read the source

[Stylesheet kern.css](https://cdn.jsdelivr.net/npm/@kern-ux/native/dist/kern.css)

Design Tokens am Ende der Datei



## Breakpoints

- `xs`: bis 576px
- `sm`: ab 576px
- `md`: ab 768px
- `lg`: ab 992px
- `xl`: ab 1200px
- `xxl`: ab 1600px

---

## Utils

### Screenreader only

- `kern-sr-only`
- `kern-sr-only-mobile` (nur bis 767px)

---

## Grid

[Code](https://gitlab.opencode.de/kern-ux/kern-ux-plain/-/blob/main/src/scss/core/layout/_grid.scss?ref_type=heads)
[Doku](https://www.kern-ux.de/komponenten/grid)

- 12-Spalten-Grid
- `kern-container`, `kern-row`, `kern-col`

### Container

- `kern-container` wird maximal 1600px breit
- `kern-container-fluid` hat keine Begrenzung der Breite

### Breite (kern-col)

- `kern-col-` + Breakpoint + `1` - `12`, z.B. `kern-col-sm-8`

### Offset (kern-col)

- `kern-col-` + Breakpoint + `offset-` + `1` - `12`, z.B. `kern-col-sm-offset-2`

### Vertikale Ausrichtung (kern-row)

- oben: `kern-align-items-start`
- mittig: `kern-align-items-center`
- unten: `kern-align-items-end`

### Horizontale Ausrichtung (kern-row)

- links: `kern-justify-content-start`
- mittig: `kern-justify-content-center`
- rechts: `kern-justify-content-end`

#### gleichmäßge Verteilung

- gleicher Abstand um jede Spalte: `kern-justify-content-around`
- maximaler Abstand zwischen den Spalten: `kern-justify-content-between`
- gleicher Abstand zwischen _und_ um jede Spalte: `kern-justify-content-evenly`

### Ausrichtung überschreiben (kern-col)

#### Vertikale Ausrichtung

- oben: `kern-align-self-start`
- mittig: `kern-align-self-center`
- unten: `kern-align-self-end`

---

## Typografisches

<table class="docs">
    <thead>
        <tr>
            <th>Klasse</th>
            <th>Beispiel</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>kern-<strong>heading</strong>-display</td>
            <td><span class="kern-heading-display">Lorem ipsum</span></td>
        </tr>
            <td>kern-heading-x-large</td>
            <td><span class="kern-heading-x-large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-heading-large</td>
            <td><span class="kern-heading-large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-heading-medium</td>
            <td><span class="kern-heading-medium">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-heading-small</td>
            <td><span class="kern-heading-small">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-<strong>title</strong></td>
            <td><span class="kern-title">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-title kern-title--large</td>
            <td><span class="kern-title kern-title--large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-title kern-title--small</td>
            <td><span class="kern-title kern-title--small">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-<strong>preline</strong></td>
            <td><span class="kern-preline">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-preline kern-preline--large</td>
            <td><span class="kern-preline kern-preline--large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-preline kern-preline--small</td>
            <td><span class="kern-preline kern-preline--small">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-<strong>subline</strong></td>
            <td><span class="kern-subline">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-subline kern-subline--large</td>
            <td><span class="kern-subline kern-subline--large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-subline kern-subline--small</td>
            <td><span class="kern-subline kern-subline--small">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-<strong>label</strong></td>
            <td><span class="kern-label">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-label kern-label--large</td>
            <td><span class="kern-label kern-label--large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-label kern-label--small</td>
            <td><span class="kern-label kern-label--small">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-<strong>body</strong></td>
            <td><span class="kern-body">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-body kern-body--large</td>
            <td><span class="kern-body kern-body--large">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-body kern-body--small</td>
            <td><span class="kern-body kern-body--small">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-body kern-body--bold</td>
            <td><span class="kern-body kern-body--bold">Lorem ipsum</span></td>
        </tr>
        <tr>
            <td>kern-body kern-body--muted</td>
            <td><span class="kern-body kern-body--muted">Lorem ipsum</span></td>
        </tr>
    </tbody>
</table>


---

## Icons

- span element 
- Basisklasse `kern-icon`
- `aria-hidden="true"` hinzufügen
- Beispiel: `<span class="kern-icon kern-icon--arrow-forward kern-icon--small" aria-hidden="true"></span>`

### Größe

<table class="docs">
    <thead>
        <tr>
            <th>Klasse(n)</th>
            <th>Beispiel</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>kern-icon</td>
            <td><span class="kern-icon kern-icon--home" aria-hidden></span></td>
        </tr>
        <tr>
            <td>kern-icon kern-icon--x-large</td>
            <td><span class="kern-icon kern-icon--x-large kern-icon--home" aria-hidden></span></td>
        </tr>
        <tr>
            <td>kern-icon kern-icon--large</td>
            <td><span class="kern-icon kern-icon--large kern-icon--home" aria-hidden></span></td>
        </tr>
        <tr>
            <td>kern-icon kern-icon--small</td>
            <td><span class="kern-icon kern-icon--small kern-icon--home" aria-hidden></span></td>
        </tr
    </tbody>
</table>

### Motiv

#### im KERN Stylesheet enthalten

- `kern-icon--home`
- `kern-icon--arrow-up`
- `kern-icon--arrow-down`
- `kern-icon--arrow-forward`
- `kern-icon--arrow-back`
- `kern-icon--info`
- `kern-icon--success`
- `kern-icon--warning`
- `kern-icon--danger`
- `kern-icon--open-in-new`
- `kern-icon--download`
- `kern-icon--logout`
- `kern-icon--checklist`
- `kern-icon--mail`
- `kern-icon--edit`
- `kern-icon--sign-language`
- `kern-icon--easy-language`
- `kern-icon--autorenew`
- `kern-icon--add`
- `kern-icon--close`
- `kern-icon--delete`
- `kern-icon--search`
- `kern-icon--question-mark`
- `kern-icon--more-vert`
- `kern-icon--content-copy`
- `kern-icon--visibility`
- `kern-icon--visibility-off`
- `kern-icon--check`
- `kern-icon--drive-folder-upload`
- `kern-icon--chevron-left`
- `kern-icon--chevron-right`
- `kern-icon--keyboard-double-arrow-left`
- `kern-icon--keyboard-double-arrow-right`


[weitere Material UI Icons](https://gitlab.opencode.de/joschka/material-ui-icons-for-kern-ux/-/raw/main/list.css?ref_type=heads)

---

## Checkbox & Radio `<input type=checkbox>`, `<input type=radio>`

- wrapper div: `kern-form-check`
- checkbox: `kern-form-check__checkbox`
- radio: `kern-form-check__radio`

<div class="kern-form-check">
    <input id="c1" type="checkbox" class="kern-form-check__checkbox">
    <label for="c1" class="kern-label">Checkbox</label>
</div>

<div class="kern-form-check">
    <input id="r1" type="radio" class="kern-form-check__radio">
    <label for="r1" class="kern-label">Radio</label>
</div>

---

## Form Inputs `<Input>`, `<textarea>`

wrapper div: `kern-form-input`

### Fehler

`kern-form-input kern-form-input--error`

### Text, Tel, Number, Password, File, E-Mail, Url, Textarea

input: `kern-form-input__input`

#### Fehler

`kern-form-input__input kern-form-input__input--error`

### Select `<select>`

- weiterer wrapper um das select-Element `kern-form-input__select-wrapper`
- select: `kern-form-input__select`

#### Fehler

`kern-form-input__select kern-form-input__select--error`

### Date

- mehrere kurze Textfelder in einem Fieldset
- 2 Zeichen: `kern-form-input__input kern-form-input__input--width-2`
- 4 Zeichen: `kern-form-input__input kern-form-input__input--width-4`

---

## Error message

- `kern-error`

---

## Number

- `kern-number`

---



## Button `<button>`, `<a>`

Mit `button` oder `a` oder z.B. react-router's `Link` kombinieren.

- den Text mit einem `<span class="kern-label"></span>` umschließen
- Icons davor oder danach einfügen

### Varianten

- `kern-btn kern-btn--primary`
- `kern-btn kern-btn--secondary`
- `kern-btn kern-btn--tertiary`

### 100% Breite / Block

- `kern-btn--block`

---

## Link `<a>`

- Basisklasse: `kern-link`
- Icons vor oder nach dem Text einfügen

### small

- `kern-link kern-link--small`

---

## Fieldset `<fieldset>` + `<legend>`

- `kern-fieldset` auf das `fieldset`-Element
- für das `legend`-Element siehe Labels
- der Inhalt unterhalb der `legend` wird in ein div mit der Klasse `kern-fieldset__body` gesetzt

### Body

- `kern-fieldset__body`: Inhalte untereinander
- `kern-fieldset__body kern-fieldset__body--horizontal`: Inhalte nebeneinander

### Fehler

- `kern-fieldset kern-fieldset--error`

---

## Table `<table>`

- normale HTML-Tabellenstruktur, Elemente bekommen Klassen:
- `table`: `kern-table`
- `thead`: `kern-table__head`
- `tbody`: `kern-table__body`
- `tfoot`: `kern-table__footer`
- `tr`: `kern-table__row`
- `th`: `kern-table__header`
- `td`: `kern-table__cell`

### Varianten

- gestreift: `kern-table kern-table--striped`
- klein: `kern-table kern-table--small`


### numerische Felder

- th: `kern_table__header kern_table__header--numeric`
- td: `kern_table__cell kern_table__cell--numeric`

### Überschrift

`<caption class="kern-title">Überschrift</caption>`

---

## Divider `<hr>`

### nur visuell

`<hr class="kern-divider" aria-hidden="true" />`

### mit inhaltlicher Bedeutung (vom Screenreader vorgelesen)

`<hr class="kern-divider" />`

---

## Description List `<dl>`

```html
<dl class="kern-description-list">
  <div class="kern-description-list-item">
    <dt class="kern-description-list-item__key">KEY</dt>
    <dd class="kern-description-list-item__value">VALUE</dd>
  </div>
</dl>
```

Column-Variante: `kern-description-list kern-description-list--col`

---

## Accordion `<details>` + `<summary>`

- `details`: `kern-accordion`
- `summary`: `kern-accordion__header`
- innerhalb des `details` unterhalb des `summary`-Elements ein Element mit der Klasse `kern-accordion__body`
- in die `summary` kommt ein `<span class="kern-title">...</span>`

### mehrere Einträge

- die `details`-Elemente mit einem `<div class="kern-accordion-group">...</div>` umschließen


---

## Progress `<progress>`

```html
<div class="kern-progress">
<label class="kern-label" for="progress1">Schritt 2 von 5</label> 
<progress id="progress1" value="2" max="5"></progress>
</div>
```

- `label` kann auch unter dem `progress` stehen oder ganz weggelassen werden


---

## Dialog `<dialog>`

dialog-HTML-Element

```html
<dialog id="modal1" class="kern-dialog" aria-labelledby="modal1_heading" open>
    <header class="kern-dialog__header">
      <h2 class="kern-title kern-title--large" id="modal1_heading">Frage?</h2>
      <button class="kern-btn kern-btn--tertiary">
        <span class="kern-icon kern-icon--close" aria-hidden="true"></span>
        <span class="kern-sr-only">Schließen</span>
      </button>
    </header>

    <section class="kern-dialog__body">
        ... z.B. Fließtext ...
    </section>

    <footer class="kern-dialog__footer">
        ... z.B. Buttons ...
    </footer>
</dialog>
```


---

## Loader

```html
<div class="kern-loader kern-loader--visible" role="status">
    <span class="kern-sr-only">Wird geladen...</span>
</div>
```

---

## Alert

```html
<div class="kern-alert kern-alert--info" role="alert">
    <div class="kern-alert__header">
      <span class="kern-icon kern-icon--info" aria-hidden="true"></span>
      <span class="kern-title">Information</span>  
    </div>

    <div class="kern-alert__body">
      <p class="kern-body">Die Beschreibung liefert mehr Kontext und sollte auch Handlungsoptionen aufzeigen, falls nötig.</p>
      <a href="#" class="kern-link">
        <span class="kern-icon kern-icon--arrow-forward" aria-hidden="true"></span>
        Linktext
      </a>
    </div>
</div>
```

- `kern-alert__body` ist optional

### Varianten

- info
- success
- warning
- danger

---

## Badge

```html
<span class="kern-badge kern-badge--info">
    <span class="kern-icon kern-icon--info" aria-hidden="true"></span>
    <span class="kern-label kern-label--small">Information</span>
</span>
```

- icon ist optional

### Varianten

- info
- success
- warning
- danger

---

## Kopfzeile

```html
<div class="kern-kopfzeile">
<div class="kern-container">
  <div class="kern-kopfzeile__content">
    <span class="kern-kopfzeile__flagge" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16">
        <path fill="#000" d="M0 .5h24v5.333H0z" />
        <path fill="red" d="M0 5.833h24v5.333H0z" />
        <path fill="#FACA2C" d="M0 11.167h24V16.5H0z" />
      </svg>
    </span>
    <span class="kern-kopfzeile__label">
      Offizielle Website – Bundesrepublik Deutschland
    </span>
  </div>
</div>
</div>
```

Fluide? Dann `kern-container` gegen `kern-container-fluid` austauschen

---

## Card

[Code](https://gitlab.opencode.de/kern-ux/kern-ux-plain/-/blob/main/src/scss/core/components/_card.scss?ref_type=heads)
[Doku](https://www.kern-ux.de/komponenten/card)

Layout-Komponente in verschiedenen visuellen Varianten und Größen

Beispiel:

```html
<article class="kern-card">
  <div class="kern-card__media">
    <img src="/img/kern-img-media.png" alt="ALT Text">
  </div>

  <div class="kern-card__container">
    <header class="kern-card__header">
      <p class="kern-preline">Vorzeile</p>
      <h2 class="kern-title">Default</h2>
      <h3 class="kern-subline">Unterzeile</h3>
    </header>

    <section class="kern-card__body">
      <p class="kern-body">Hier werden soviele Informationen zur Verfügung gestellt, wie benötigt und nicht mehr. Ein Maximum von 150 characters empfohlen.</p>
    </section>

    <footer class="kern-card__footer">
      <button class="kern-btn kern-btn--primary">
        <span class="kern-label">Primäraktion</span>
      </button>
      <button class="kern-btn kern-btn--secondary">
        <span class="kern-label">Aktion</span>
      </button>
    </footer>
  </div>
</article>
```

---

## Summary

[Doku](https://www.kern-ux.de/komponenten/summary)

Zusammenfassung von Formulareingaben: Nummerierter Titel + Description List + Bearbeiten-Button

```html
<div class="kern-summary">
  <div class="kern-summary__header">
    <span class="kern-number">1</span>
    <h3 class="kern-title kern-title--small" id="title">
	  Angaben zur Person
    </h3>
  </div>

  <div class="kern-summary__body">
    <dl class="kern-description-list">
      ... Description List ...
    </dl>

    <div class="kern-summary__actions">
      <a href="#" class="kern-link" aria-describedby="title">
        <span class="kern-icon kern-icon--edit" aria-hidden="true"></span>
        Bearbeiten
      </a>
    </div>
  </div>
</div>
```

---

## Task List

[Doku](https://www.kern-ux.de/komponenten/tasklist)

Aufgabenliste mit Status: Nummer + Titel + Badge

```html
<div class="kern-task-list">
<div class="kern-task-list__header">
  <h2 class="kern-heading-medium">Persönliche Daten</h2>
</div>

<ul class="kern-task-list__list">
<li class="kern-task-list__item">
	<span class="kern-number">1</span>
	<div class="kern-task-list__title" id="task1-title">
		<a href="#" class="kern-link kern-link--stretched" aria-describedby="task1-status">
			Angaben zur Person machen
		</a>
		<div class="kern-task-list__status" id="task1-status">
            BADGE
		</div>
	</div>
</li>
</ul>
</div>
```

---

## Tabs

noch nicht veröffentlicht




---


## Tokens

Beispiel:

- als CSS Variable: `border-radius: var(--kern-metric-border-radius-default);`
- mit Tailwind: `<div class="rounded-kern-default">`

<table class="docs">
    <thead>
        <tr>
          <th>CSS</th>
          <th>Tailwind</th>
          <th>Modifier</th>
          <th>Wert</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">--kern-typography-<strong>font-family</strong>-fira-</td>
            <td rowspan="3">font-kern-</td>
            <td>sans</td>
            <td>Fira Sans</td>
        </tr>
        <tr>
            <td>mono</td>
            <td>Fira Mono</td>
        </tr>
        <tr>
            <td>--kern-typography-<strong>font-family</strong>-</td>
            <td>default</td>
            <td>Fira Sans</td>
        </tr>
        <tr>
            <td rowspan="13">--kern-<strong>font-size</strong>-</td>
            <td rowspan="13">text-kern-</td>
            <td>12</td>
            <td>12px</td>
        </tr>
        <tr>
            <td>16</td>
            <td>16px</td>
        </tr>
        <tr>
            <td>18</td>
            <td>18px</td>
        </tr>
        <tr>
            <td>20</td>
            <td>20px</td>
        </tr>
        <tr>
            <td>21</td>
            <td>21px</td>
        </tr>
        <tr>
            <td>24</td>
            <td>24px</td>
        </tr>
        <tr>
            <td>26</td>
            <td>26px</td>
        </tr>
        <tr>
            <td>32</td>
            <td>32px</td>
        </tr>
        <tr>
            <td>40</td>
            <td>40px</td>
        </tr>
        <tr>
            <td>48</td>
            <td>48px</td>
        </tr>
        <tr>
            <td>56</td>
            <td>56px</td>
        </tr>
        <tr>
            <td>72</td>
            <td>72px</td>
        </tr>
        <tr>
            <td>80</td>
            <td>80px</td>
        </tr>
        <tr>
            <td rowspan="3">--kern-typography-font-size-<strong>static</strong>- & --kern-typography-line-height-static-</td>
            <td rowspan="3">text-kern-static-</td>
            <td>small</td>
            <td>16px</td>
        </tr>
        <tr>
            <td>medium</td>
            <td>18px/24px</td>
        </tr>
        <tr>
            <td>large</td>
            <td>21px/32px</td>
        </tr>
        <tr>
            <td rowspan="4">--kern-typography-font-size-<strong>adaptive</strong>- & --kern-typography-line-height-adaptive-</td>
            <td rowspan="4">text-kern-adaptive-</td>
            <td>medium</td>
            <td>21px/24px (24px/32px)</td>
        </tr>
        <tr>
            <td>large</td>
            <td>26px/32px (32px/40px)</td>
        </tr>
        <tr>
            <td>x-large</td>
            <td>32px/40px (48px/56px)</td>
        </tr>
        <tr>
            <td>2x-large</td>
            <td>48px/56px (72px/80px)</td>
        </tr>
        <tr>
            <td rowspan="46">--kern-</td>
            <td rowspan="46">-kern-</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1px</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2px</td>
        </tr>
        <tr>
            <td>3</td>
            <td>3px</td>
        </tr>
        <tr>
            <td>4</td>
            <td>4px</td>
        </tr>
        <tr>
            <td>5</td>
            <td>5px</td>
        </tr>
        <tr>
            <td>6</td>
            <td>6px</td>
        </tr>
        <tr>
            <td>7</td>
            <td>7px</td>
        </tr>
        <tr>
            <td>8</td>
            <td>8px</td>
        </tr>
        <tr>
            <td>9</td>
            <td>9px</td>
        </tr>
        <tr>
            <td>10</td>
            <td>10px</td>
        </tr>
        <tr>
            <td>12</td>
            <td>12px</td>
        </tr>
        <tr>
            <td>14</td>
            <td>14px</td>
        </tr>
        <tr>
            <td>16</td>
            <td>16px</td>
        </tr>
        <tr>
            <td>18</td>
            <td>18px</td>
        </tr>
        <tr>
            <td>20</td>
            <td>20px</td>
        </tr>
        <tr>
            <td>24</td>
            <td>24px</td>
        </tr>
        <tr>
            <td>32</td>
            <td>32px</td>
        </tr>
        <tr>
            <td>40</td>
            <td>40px</td>
        </tr>
        <tr>
            <td>48</td>
            <td>48px</td>
        </tr>
        <tr>
            <td>56</td>
            <td>56px</td>
        </tr>
        <tr>
            <td>64</td>
            <td>64px</td>
        </tr>
        <tr>
            <td>80</td>
            <td>80px</td>
        </tr>
        <tr>
            <td>96</td>
            <td>96px</td>
        </tr>
        <tr>
            <td>128</td>
            <td>128px</td>
        </tr>
        <tr>
            <td>160</td>
            <td>160px</td>
        </tr>
        <tr>
            <td>192</td>
            <td>192px</td>
        </tr>
        <tr>
            <td>224</td>
            <td>224px</td>
        </tr>
        <tr>
            <td>240</td>
            <td>240px</td>
        </tr>
        <tr>
            <td>256</td>
            <td>256px</td>
        </tr>
        <tr>
            <td>352</td>
            <td>352px</td>
        </tr>
        <tr>
            <td>360</td>
            <td>360px</td>
        </tr>
        <tr>
            <td>384</td>
            <td>384px</td>
        </tr>
        <tr>
            <td>480</td>
            <td>480px</td>
        </tr>
        <tr>
            <td>512</td>
            <td>512px</td>
        </tr>
        <tr>
            <td>736</td>
            <td>736px</td>
        </tr>
        <tr>
            <td>768</td>
            <td>768px</td>
        </tr>
        <tr>
            <td>992</td>
            <td>992px</td>
        </tr>
        <tr>
            <td>1024</td>
            <td>1024px</td>
        </tr>
        <tr>
            <td>1140</td>
            <td>1140px</td>
        </tr>
        <tr>
            <td>1248</td>
            <td>1248px</td>
        </tr>
        <tr>
            <td>1280</td>
            <td>1280px</td>
        </tr>
        <tr>
            <td>1504</td>
            <td>1504px</td>
        </tr>
        <tr>
            <td>1536</td>
            <td>1536px</td>
        </tr>
        <tr>
            <td>1600</td>
            <td>1600px</td>
        </tr>
        <tr>
            <td>1920</td>
            <td>1920px</td>
        </tr>
        <tr>
            <td rowspan="7">--kern-metric-<strong>space</strong>-</td>
            <td rowspan="7">-kern-space-</td>
            <td>none</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2x-small</td>
            <td>2px</td>
        </tr>
        <tr>
            <td>x-small</td>
            <td>4px</td>
        </tr>
        <tr>
            <td>small</td>
            <td>8px</td>
        </tr>
        <tr>
            <td>default</td>
            <td>16px</td>
        </tr>
        <tr>
            <td>large</td>
            <td>24px</td>
        </tr>
        <tr>
            <td>x-large</td>
            <td>32px</td>
        </tr>
        <tr>
            <td rowspan="10">--kern-metric-<strong>dimension</strong>-</td>
            <td rowspan="10">-kern-dimension-</td>
            <td>2x-small</td>
            <td>8px</td>
        </tr>
        <tr>
            <td>x-small</td>
            <td>16px</td>
        </tr>
        <tr>
            <td>small</td>
            <td>20px</td>
        </tr>
        <tr>
            <td>default</td>
            <td>24px</td>
        </tr>
        <tr>
            <td>large</td>
            <td>32px</td>
        </tr>
        <tr>
            <td>x-large</td>
            <td>48px</td>
        </tr>
        <tr>
            <td>2x-large</td>
            <td>56px</td>
        </tr>
        <tr>
            <td>3x-large</td>
            <td>64px</td>
        </tr>
        <tr>
            <td>4x-large</td>
            <td>80px</td>
        </tr>
        <tr>
            <td>5x-large</td>
            <td>96px</td>
        </tr>
        <tr>
            <td rowspan="3">--kern-metric-dimension-<strong>media</strong>-</td>
            <td rowspan="3">-kern-dimension-media-</td>
            <td>small</td>
            <td>96px (128px)</td>
        </tr>
        <tr>
            <td>default</td>
            <td>160px (192px)</td>
        </tr>
        <tr>
            <td>large</td>
            <td>240px (360px)</td>
        </tr>
        <tr>
            <td rowspan="1">--kern-metric-<strong>screen-size</strong></td>
            <td rowspan="1">-kern-screen-size</td>
            <td></td>
            <td>360px (1920px)</td>
        </tr>
        <tr>
            <td rowspan="5">--kern-metric-<strong>border-width</strong>-</td>
            <td rowspan="5">-kern-border-</td>
            <td>none</td>
            <td>0</td>
        </tr>
        <tr>
            <td>light</td>
            <td>1px</td>
        </tr>
        <tr>
            <td>default</td>
            <td>2px</td>
        </tr>
        <tr>
            <td>bold</td>
            <td>4px</td>
        </tr>
        <tr>
            <td>heavy</td>
            <td>8px</td>
        </tr>
        <tr>
            <td rowspan="5">--kern-metric-<strong>border-radius</strong>-</td>
            <td rowspan="5">rounded-kern-</td>
            <td>none</td>
            <td>0</td>
        </tr>
        <tr>
            <td>small</td>
            <td>2px</td>
        </tr>
        <tr>
            <td>default</td>
            <td>4px</td>
        </tr>
        <tr>
            <td>large</td>
            <td>8px</td>
        </tr>
        <tr>
            <td>circle</td>
            <td>50%</td>
        </tr>
        <tr>
            <td rowspan="20">--kern-darkblue- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-darkblue-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-025-lightness) var(--kern-darkblue-025-chroma) var(--kern-darkblue-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-050-lightness) var(--kern-darkblue-050-chroma) var(--kern-darkblue-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-100-lightness) var(--kern-darkblue-100-chroma) var(--kern-darkblue-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-150-lightness) var(--kern-darkblue-150-chroma) var(--kern-darkblue-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-200-lightness) var(--kern-darkblue-200-chroma) var(--kern-darkblue-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-250-lightness) var(--kern-darkblue-250-chroma) var(--kern-darkblue-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-300-lightness) var(--kern-darkblue-300-chroma) var(--kern-darkblue-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-350-lightness) var(--kern-darkblue-350-chroma) var(--kern-darkblue-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-400-lightness) var(--kern-darkblue-400-chroma) var(--kern-darkblue-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-450-lightness) var(--kern-darkblue-450-chroma) var(--kern-darkblue-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-500-lightness) var(--kern-darkblue-500-chroma) var(--kern-darkblue-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-550-lightness) var(--kern-darkblue-550-chroma) var(--kern-darkblue-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-600-lightness) var(--kern-darkblue-600-chroma) var(--kern-darkblue-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-650-lightness) var(--kern-darkblue-650-chroma) var(--kern-darkblue-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-700-lightness) var(--kern-darkblue-700-chroma) var(--kern-darkblue-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-750-lightness) var(--kern-darkblue-750-chroma) var(--kern-darkblue-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-800-lightness) var(--kern-darkblue-800-chroma) var(--kern-darkblue-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-850-lightness) var(--kern-darkblue-850-chroma) var(--kern-darkblue-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-900-lightness) var(--kern-darkblue-900-chroma) var(--kern-darkblue-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-darkblue-950-lightness) var(--kern-darkblue-950-chroma) var(--kern-darkblue-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-lightblue- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-lightblue-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-025-lightness) var(--kern-lightblue-025-chroma) var(--kern-lightblue-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-050-lightness) var(--kern-lightblue-050-chroma) var(--kern-lightblue-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-100-lightness) var(--kern-lightblue-100-chroma) var(--kern-lightblue-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-150-lightness) var(--kern-lightblue-150-chroma) var(--kern-lightblue-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-200-lightness) var(--kern-lightblue-200-chroma) var(--kern-lightblue-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-250-lightness) var(--kern-lightblue-250-chroma) var(--kern-lightblue-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-300-lightness) var(--kern-lightblue-300-chroma) var(--kern-lightblue-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-350-lightness) var(--kern-lightblue-350-chroma) var(--kern-lightblue-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-400-lightness) var(--kern-lightblue-400-chroma) var(--kern-lightblue-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-450-lightness) var(--kern-lightblue-450-chroma) var(--kern-lightblue-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-500-lightness) var(--kern-lightblue-500-chroma) var(--kern-lightblue-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-550-lightness) var(--kern-lightblue-550-chroma) var(--kern-lightblue-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-600-lightness) var(--kern-lightblue-600-chroma) var(--kern-lightblue-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-650-lightness) var(--kern-lightblue-650-chroma) var(--kern-lightblue-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-700-lightness) var(--kern-lightblue-700-chroma) var(--kern-lightblue-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-750-lightness) var(--kern-lightblue-750-chroma) var(--kern-lightblue-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-800-lightness) var(--kern-lightblue-800-chroma) var(--kern-lightblue-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-850-lightness) var(--kern-lightblue-850-chroma) var(--kern-lightblue-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-900-lightness) var(--kern-lightblue-900-chroma) var(--kern-lightblue-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-lightblue-950-lightness) var(--kern-lightblue-950-chroma) var(--kern-lightblue-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-turquoise- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-turquoise-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-025-lightness) var(--kern-turquoise-025-chroma) var(--kern-turquoise-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-050-lightness) var(--kern-turquoise-050-chroma) var(--kern-turquoise-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-100-lightness) var(--kern-turquoise-100-chroma) var(--kern-turquoise-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-150-lightness) var(--kern-turquoise-150-chroma) var(--kern-turquoise-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-200-lightness) var(--kern-turquoise-200-chroma) var(--kern-turquoise-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-250-lightness) var(--kern-turquoise-250-chroma) var(--kern-turquoise-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-300-lightness) var(--kern-turquoise-300-chroma) var(--kern-turquoise-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-350-lightness) var(--kern-turquoise-350-chroma) var(--kern-turquoise-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-400-lightness) var(--kern-turquoise-400-chroma) var(--kern-turquoise-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-450-lightness) var(--kern-turquoise-450-chroma) var(--kern-turquoise-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-500-lightness) var(--kern-turquoise-500-chroma) var(--kern-turquoise-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-550-lightness) var(--kern-turquoise-550-chroma) var(--kern-turquoise-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-600-lightness) var(--kern-turquoise-600-chroma) var(--kern-turquoise-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-650-lightness) var(--kern-turquoise-650-chroma) var(--kern-turquoise-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-700-lightness) var(--kern-turquoise-700-chroma) var(--kern-turquoise-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-750-lightness) var(--kern-turquoise-750-chroma) var(--kern-turquoise-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-800-lightness) var(--kern-turquoise-800-chroma) var(--kern-turquoise-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-850-lightness) var(--kern-turquoise-850-chroma) var(--kern-turquoise-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-900-lightness) var(--kern-turquoise-900-chroma) var(--kern-turquoise-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-turquoise-950-lightness) var(--kern-turquoise-950-chroma) var(--kern-turquoise-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-green- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-green-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-025-lightness) var(--kern-green-025-chroma) var(--kern-green-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-050-lightness) var(--kern-green-050-chroma) var(--kern-green-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-100-lightness) var(--kern-green-100-chroma) var(--kern-green-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-150-lightness) var(--kern-green-150-chroma) var(--kern-green-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-200-lightness) var(--kern-green-200-chroma) var(--kern-green-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-250-lightness) var(--kern-green-250-chroma) var(--kern-green-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-300-lightness) var(--kern-green-300-chroma) var(--kern-green-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-350-lightness) var(--kern-green-350-chroma) var(--kern-green-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-400-lightness) var(--kern-green-400-chroma) var(--kern-green-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-450-lightness) var(--kern-green-450-chroma) var(--kern-green-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-500-lightness) var(--kern-green-500-chroma) var(--kern-green-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-550-lightness) var(--kern-green-550-chroma) var(--kern-green-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-600-lightness) var(--kern-green-600-chroma) var(--kern-green-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-650-lightness) var(--kern-green-650-chroma) var(--kern-green-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-700-lightness) var(--kern-green-700-chroma) var(--kern-green-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-750-lightness) var(--kern-green-750-chroma) var(--kern-green-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-800-lightness) var(--kern-green-800-chroma) var(--kern-green-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-850-lightness) var(--kern-green-850-chroma) var(--kern-green-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-900-lightness) var(--kern-green-900-chroma) var(--kern-green-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-green-950-lightness) var(--kern-green-950-chroma) var(--kern-green-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-limette- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-limette-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-025-lightness) var(--kern-limette-025-chroma) var(--kern-limette-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-050-lightness) var(--kern-limette-050-chroma) var(--kern-limette-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-100-lightness) var(--kern-limette-100-chroma) var(--kern-limette-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-150-lightness) var(--kern-limette-150-chroma) var(--kern-limette-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-200-lightness) var(--kern-limette-200-chroma) var(--kern-limette-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-250-lightness) var(--kern-limette-250-chroma) var(--kern-limette-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-300-lightness) var(--kern-limette-300-chroma) var(--kern-limette-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-350-lightness) var(--kern-limette-350-chroma) var(--kern-limette-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-400-lightness) var(--kern-limette-400-chroma) var(--kern-limette-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-450-lightness) var(--kern-limette-450-chroma) var(--kern-limette-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-500-lightness) var(--kern-limette-500-chroma) var(--kern-limette-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-550-lightness) var(--kern-limette-550-chroma) var(--kern-limette-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-600-lightness) var(--kern-limette-600-chroma) var(--kern-limette-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-650-lightness) var(--kern-limette-650-chroma) var(--kern-limette-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-700-lightness) var(--kern-limette-700-chroma) var(--kern-limette-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-750-lightness) var(--kern-limette-750-chroma) var(--kern-limette-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-800-lightness) var(--kern-limette-800-chroma) var(--kern-limette-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-850-lightness) var(--kern-limette-850-chroma) var(--kern-limette-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-900-lightness) var(--kern-limette-900-chroma) var(--kern-limette-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-limette-950-lightness) var(--kern-limette-950-chroma) var(--kern-limette-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-yellow- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-yellow-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-025-lightness) var(--kern-yellow-025-chroma) var(--kern-yellow-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-050-lightness) var(--kern-yellow-050-chroma) var(--kern-yellow-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-100-lightness) var(--kern-yellow-100-chroma) var(--kern-yellow-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-150-lightness) var(--kern-yellow-150-chroma) var(--kern-yellow-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-200-lightness) var(--kern-yellow-200-chroma) var(--kern-yellow-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-250-lightness) var(--kern-yellow-250-chroma) var(--kern-yellow-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-300-lightness) var(--kern-yellow-300-chroma) var(--kern-yellow-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-350-lightness) var(--kern-yellow-350-chroma) var(--kern-yellow-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-400-lightness) var(--kern-yellow-400-chroma) var(--kern-yellow-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-450-lightness) var(--kern-yellow-450-chroma) var(--kern-yellow-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-500-lightness) var(--kern-yellow-500-chroma) var(--kern-yellow-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-550-lightness) var(--kern-yellow-550-chroma) var(--kern-yellow-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-600-lightness) var(--kern-yellow-600-chroma) var(--kern-yellow-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-650-lightness) var(--kern-yellow-650-chroma) var(--kern-yellow-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-700-lightness) var(--kern-yellow-700-chroma) var(--kern-yellow-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-750-lightness) var(--kern-yellow-750-chroma) var(--kern-yellow-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-800-lightness) var(--kern-yellow-800-chroma) var(--kern-yellow-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-850-lightness) var(--kern-yellow-850-chroma) var(--kern-yellow-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-900-lightness) var(--kern-yellow-900-chroma) var(--kern-yellow-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-yellow-950-lightness) var(--kern-yellow-950-chroma) var(--kern-yellow-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-orange- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-orange-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-025-lightness) var(--kern-orange-025-chroma) var(--kern-orange-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-050-lightness) var(--kern-orange-050-chroma) var(--kern-orange-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-100-lightness) var(--kern-orange-100-chroma) var(--kern-orange-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-150-lightness) var(--kern-orange-150-chroma) var(--kern-orange-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-200-lightness) var(--kern-orange-200-chroma) var(--kern-orange-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-250-lightness) var(--kern-orange-250-chroma) var(--kern-orange-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-300-lightness) var(--kern-orange-300-chroma) var(--kern-orange-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-350-lightness) var(--kern-orange-350-chroma) var(--kern-orange-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-400-lightness) var(--kern-orange-400-chroma) var(--kern-orange-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-450-lightness) var(--kern-orange-450-chroma) var(--kern-orange-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-500-lightness) var(--kern-orange-500-chroma) var(--kern-orange-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-550-lightness) var(--kern-orange-550-chroma) var(--kern-orange-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-600-lightness) var(--kern-orange-600-chroma) var(--kern-orange-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-650-lightness) var(--kern-orange-650-chroma) var(--kern-orange-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-700-lightness) var(--kern-orange-700-chroma) var(--kern-orange-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-750-lightness) var(--kern-orange-750-chroma) var(--kern-orange-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-800-lightness) var(--kern-orange-800-chroma) var(--kern-orange-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-850-lightness) var(--kern-orange-850-chroma) var(--kern-orange-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-900-lightness) var(--kern-orange-900-chroma) var(--kern-orange-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-orange-950-lightness) var(--kern-orange-950-chroma) var(--kern-orange-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-red- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-red-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-025-lightness) var(--kern-red-025-chroma) var(--kern-red-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-050-lightness) var(--kern-red-050-chroma) var(--kern-red-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-100-lightness) var(--kern-red-100-chroma) var(--kern-red-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-150-lightness) var(--kern-red-150-chroma) var(--kern-red-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-200-lightness) var(--kern-red-200-chroma) var(--kern-red-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-250-lightness) var(--kern-red-250-chroma) var(--kern-red-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-300-lightness) var(--kern-red-300-chroma) var(--kern-red-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-350-lightness) var(--kern-red-350-chroma) var(--kern-red-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-400-lightness) var(--kern-red-400-chroma) var(--kern-red-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-450-lightness) var(--kern-red-450-chroma) var(--kern-red-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-500-lightness) var(--kern-red-500-chroma) var(--kern-red-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-550-lightness) var(--kern-red-550-chroma) var(--kern-red-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-600-lightness) var(--kern-red-600-chroma) var(--kern-red-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-650-lightness) var(--kern-red-650-chroma) var(--kern-red-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-700-lightness) var(--kern-red-700-chroma) var(--kern-red-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-750-lightness) var(--kern-red-750-chroma) var(--kern-red-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-800-lightness) var(--kern-red-800-chroma) var(--kern-red-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-850-lightness) var(--kern-red-850-chroma) var(--kern-red-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-900-lightness) var(--kern-red-900-chroma) var(--kern-red-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-red-950-lightness) var(--kern-red-950-chroma) var(--kern-red-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-violet- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-violet-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-025-lightness) var(--kern-violet-025-chroma) var(--kern-violet-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-050-lightness) var(--kern-violet-050-chroma) var(--kern-violet-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-100-lightness) var(--kern-violet-100-chroma) var(--kern-violet-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-150-lightness) var(--kern-violet-150-chroma) var(--kern-violet-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-200-lightness) var(--kern-violet-200-chroma) var(--kern-violet-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-250-lightness) var(--kern-violet-250-chroma) var(--kern-violet-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-300-lightness) var(--kern-violet-300-chroma) var(--kern-violet-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-350-lightness) var(--kern-violet-350-chroma) var(--kern-violet-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-400-lightness) var(--kern-violet-400-chroma) var(--kern-violet-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-450-lightness) var(--kern-violet-450-chroma) var(--kern-violet-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-500-lightness) var(--kern-violet-500-chroma) var(--kern-violet-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-550-lightness) var(--kern-violet-550-chroma) var(--kern-violet-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-600-lightness) var(--kern-violet-600-chroma) var(--kern-violet-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-650-lightness) var(--kern-violet-650-chroma) var(--kern-violet-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-700-lightness) var(--kern-violet-700-chroma) var(--kern-violet-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-750-lightness) var(--kern-violet-750-chroma) var(--kern-violet-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-800-lightness) var(--kern-violet-800-chroma) var(--kern-violet-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-850-lightness) var(--kern-violet-850-chroma) var(--kern-violet-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-900-lightness) var(--kern-violet-900-chroma) var(--kern-violet-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-violet-950-lightness) var(--kern-violet-950-chroma) var(--kern-violet-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="22">--kern-neutral- (!) (lightness, chroma, hue)</td>
            <td rowspan="22">-kern-neutral-</td>
            <td>000</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-000-lightness) var(--kern-neutral-000-chroma) var(--kern-neutral-000-hue))"></div></td>
        </tr>
        <tr>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-025-lightness) var(--kern-neutral-025-chroma) var(--kern-neutral-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-050-lightness) var(--kern-neutral-050-chroma) var(--kern-neutral-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-100-lightness) var(--kern-neutral-100-chroma) var(--kern-neutral-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-150-lightness) var(--kern-neutral-150-chroma) var(--kern-neutral-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-200-lightness) var(--kern-neutral-200-chroma) var(--kern-neutral-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-250-lightness) var(--kern-neutral-250-chroma) var(--kern-neutral-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-300-lightness) var(--kern-neutral-300-chroma) var(--kern-neutral-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-350-lightness) var(--kern-neutral-350-chroma) var(--kern-neutral-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-400-lightness) var(--kern-neutral-400-chroma) var(--kern-neutral-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-450-lightness) var(--kern-neutral-450-chroma) var(--kern-neutral-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-500-lightness) var(--kern-neutral-500-chroma) var(--kern-neutral-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-550-lightness) var(--kern-neutral-550-chroma) var(--kern-neutral-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-600-lightness) var(--kern-neutral-600-chroma) var(--kern-neutral-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-650-lightness) var(--kern-neutral-650-chroma) var(--kern-neutral-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-700-lightness) var(--kern-neutral-700-chroma) var(--kern-neutral-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-750-lightness) var(--kern-neutral-750-chroma) var(--kern-neutral-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-800-lightness) var(--kern-neutral-800-chroma) var(--kern-neutral-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-850-lightness) var(--kern-neutral-850-chroma) var(--kern-neutral-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-900-lightness) var(--kern-neutral-900-chroma) var(--kern-neutral-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-950-lightness) var(--kern-neutral-950-chroma) var(--kern-neutral-950-hue))"></div></td>
        </tr>
        <tr>
            <td>1000</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-neutral-1000-lightness) var(--kern-neutral-1000-chroma) var(--kern-neutral-1000-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="20">--kern-dataport-red- (!) (lightness, chroma, hue)</td>
            <td rowspan="20">-kern-dataport-red-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-025-lightness) var(--kern-dataport-red-025-chroma) var(--kern-dataport-red-025-hue))"></div></td>
        </tr>
        <tr>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-050-lightness) var(--kern-dataport-red-050-chroma) var(--kern-dataport-red-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-100-lightness) var(--kern-dataport-red-100-chroma) var(--kern-dataport-red-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-150-lightness) var(--kern-dataport-red-150-chroma) var(--kern-dataport-red-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-200-lightness) var(--kern-dataport-red-200-chroma) var(--kern-dataport-red-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-250-lightness) var(--kern-dataport-red-250-chroma) var(--kern-dataport-red-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-300-lightness) var(--kern-dataport-red-300-chroma) var(--kern-dataport-red-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-350-lightness) var(--kern-dataport-red-350-chroma) var(--kern-dataport-red-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-400-lightness) var(--kern-dataport-red-400-chroma) var(--kern-dataport-red-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-450-lightness) var(--kern-dataport-red-450-chroma) var(--kern-dataport-red-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-500-lightness) var(--kern-dataport-red-500-chroma) var(--kern-dataport-red-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-550-lightness) var(--kern-dataport-red-550-chroma) var(--kern-dataport-red-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-600-lightness) var(--kern-dataport-red-600-chroma) var(--kern-dataport-red-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-650-lightness) var(--kern-dataport-red-650-chroma) var(--kern-dataport-red-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-700-lightness) var(--kern-dataport-red-700-chroma) var(--kern-dataport-red-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-750-lightness) var(--kern-dataport-red-750-chroma) var(--kern-dataport-red-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-800-lightness) var(--kern-dataport-red-800-chroma) var(--kern-dataport-red-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-850-lightness) var(--kern-dataport-red-850-chroma) var(--kern-dataport-red-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-900-lightness) var(--kern-dataport-red-900-chroma) var(--kern-dataport-red-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-dataport-red-950-lightness) var(--kern-dataport-red-950-chroma) var(--kern-dataport-red-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="1">--kern-gray- (!) (lightness, chroma, hue)</td>
            <td rowspan="1">-kern-gray-</td>
            <td>025</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-gray-025-lightness) var(--kern-gray-025-chroma) var(--kern-gray-025-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="19">--kern-grey- (!) (lightness, chroma, hue)</td>
            <td rowspan="19">-kern-grey-</td>
            <td>050</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-050-lightness) var(--kern-grey-050-chroma) var(--kern-grey-050-hue))"></div></td>
        </tr>
        <tr>
            <td>100</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-100-lightness) var(--kern-grey-100-chroma) var(--kern-grey-100-hue))"></div></td>
        </tr>
        <tr>
            <td>150</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-150-lightness) var(--kern-grey-150-chroma) var(--kern-grey-150-hue))"></div></td>
        </tr>
        <tr>
            <td>200</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-200-lightness) var(--kern-grey-200-chroma) var(--kern-grey-200-hue))"></div></td>
        </tr>
        <tr>
            <td>250</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-250-lightness) var(--kern-grey-250-chroma) var(--kern-grey-250-hue))"></div></td>
        </tr>
        <tr>
            <td>300</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-300-lightness) var(--kern-grey-300-chroma) var(--kern-grey-300-hue))"></div></td>
        </tr>
        <tr>
            <td>350</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-350-lightness) var(--kern-grey-350-chroma) var(--kern-grey-350-hue))"></div></td>
        </tr>
        <tr>
            <td>400</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-400-lightness) var(--kern-grey-400-chroma) var(--kern-grey-400-hue))"></div></td>
        </tr>
        <tr>
            <td>450</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-450-lightness) var(--kern-grey-450-chroma) var(--kern-grey-450-hue))"></div></td>
        </tr>
        <tr>
            <td>500</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-500-lightness) var(--kern-grey-500-chroma) var(--kern-grey-500-hue))"></div></td>
        </tr>
        <tr>
            <td>550</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-550-lightness) var(--kern-grey-550-chroma) var(--kern-grey-550-hue))"></div></td>
        </tr>
        <tr>
            <td>600</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-600-lightness) var(--kern-grey-600-chroma) var(--kern-grey-600-hue))"></div></td>
        </tr>
        <tr>
            <td>650</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-650-lightness) var(--kern-grey-650-chroma) var(--kern-grey-650-hue))"></div></td>
        </tr>
        <tr>
            <td>700</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-700-lightness) var(--kern-grey-700-chroma) var(--kern-grey-700-hue))"></div></td>
        </tr>
        <tr>
            <td>750</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-750-lightness) var(--kern-grey-750-chroma) var(--kern-grey-750-hue))"></div></td>
        </tr>
        <tr>
            <td>800</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-800-lightness) var(--kern-grey-800-chroma) var(--kern-grey-800-hue))"></div></td>
        </tr>
        <tr>
            <td>850</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-850-lightness) var(--kern-grey-850-chroma) var(--kern-grey-850-hue))"></div></td>
        </tr>
        <tr>
            <td>900</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-900-lightness) var(--kern-grey-900-chroma) var(--kern-grey-900-hue))"></div></td>
        </tr>
        <tr>
            <td>950</td>
            <td><div class="kern-tokens-color" style="background-color: oklch(var(--kern-grey-950-lightness) var(--kern-grey-950-chroma) var(--kern-grey-950-hue))"></div></td>
        </tr>
        <tr>
            <td rowspan="6">--kern-color-<strong>action</strong>-</td>
            <td rowspan="6">-kern-action-</td>
            <td>default</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-default)"></div></td>
        </tr>
        <tr>
            <td>on-default</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-on-default)"></div></td>
        </tr>
        <tr>
            <td>visited</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-visited)"></div></td>
        </tr>
        <tr>
            <td>focus-background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-focus-background)"></div></td>
        </tr>
        <tr>
            <td>focus-border-inside</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-focus-border-inside)"></div></td>
        </tr>
        <tr>
            <td>focus-border-outside</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-focus-border-outside)"></div></td>
        </tr>
        <tr>
            <td rowspan="7">--kern-color-action-<strong>state-indicator</strong>-</td>
            <td rowspan="7">-kern-action-state-indicator-</td>
            <td>default</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-default)"></div></td>
        </tr>
        <tr>
            <td>shade</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-shade)"></div></td>
        </tr>
        <tr>
            <td>shade-hover</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-shade-hover)"></div></td>
        </tr>
        <tr>
            <td>shade-active</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-shade-active)"></div></td>
        </tr>
        <tr>
            <td>tint</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-tint)"></div></td>
        </tr>
        <tr>
            <td>tint-hover</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-tint-hover)"></div></td>
        </tr>
        <tr>
            <td>tint-active</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-action-state-indicator-tint-active)"></div></td>
        </tr>
        <tr>
            <td rowspan="10">--kern-color-<strong>feedback</strong>-</td>
            <td rowspan="10">-kern-feedback-</td>
            <td>danger</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-danger)"></div></td>
        </tr>
        <tr>
            <td>danger-background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-danger-background)"></div></td>
        </tr>
        <tr>
            <td>info</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-info)"></div></td>
        </tr>
        <tr>
            <td>info-background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-info-background)"></div></td>
        </tr>
        <tr>
            <td>success</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-success)"></div></td>
        </tr>
        <tr>
            <td>success-background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-success-background)"></div></td>
        </tr>
        <tr>
            <td>warning</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-warning)"></div></td>
        </tr>
        <tr>
            <td>warning-background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-warning-background)"></div></td>
        </tr>
        <tr>
            <td>loader</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-loader)"></div></td>
        </tr>
        <tr>
            <td>loader-background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-feedback-loader-background)"></div></td>
        </tr>
        <tr>
            <td rowspan="3">--kern-color-<strong>form-input</strong>-</td>
            <td rowspan="3">-kern-form-input-</td>
            <td>background</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-form-input-background)"></div></td>
        </tr>
        <tr>
            <td>background-inverted</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-form-input-background-inverted)"></div></td>
        </tr>
        <tr>
            <td>border</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-form-input-border)"></div></td>
        </tr>
        <tr>
            <td rowspan="8">--kern-color-<strong>layout</strong>-</td>
            <td rowspan="8">-kern-layout-</td>
            <td>border</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-border)"></div></td>
        </tr>
        <tr>
            <td>text-default</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-text-default)"></div></td>
        </tr>
        <tr>
            <td>text-inverse</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-text-inverse)"></div></td>
        </tr>
        <tr>
            <td>text-muted</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-text-muted)"></div></td>
        </tr>
        <tr>
            <td>background-default</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-background-default)"></div></td>
        </tr>
        <tr>
            <td>background-hued</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-background-hued)"></div></td>
        </tr>
        <tr>
            <td>background-overlay</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-background-overlay)"></div></td>
        </tr>
        <tr>
            <td>background-inverted</td>
            <td><div class="kern-tokens-color" style="background-color: var(--kern-color-layout-background-inverted)"></div></td>
        </tr>
    </tbody>
</table>
