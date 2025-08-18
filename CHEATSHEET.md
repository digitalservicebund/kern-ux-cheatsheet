# KERN UX Cheatsheet

Für Menschen, die schon HMTL _können_ und nur schnell wissen wollen, welche Klasse wohin gehört.

Zur Verwendung mit dem Stylesheet aus dem [KERN - Plain-CSS-HTML-Kit](https://gitlab.opencode.de/kern-ux/kern-ux-plain).

## Breakpoints

- `xs`: bis 576px
- `sm`: ab 576px
- `md`: ab 768px
- `lg`: ab 992px
- `xl`: ab 1200px
- `xxl`: ab 1600px

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

### Headings

Mit `h1`-`h6` kombinieren.

- `kern-heading-display`
- `kern-heading-x-large`
- `kern-heading-large`
- `kern-heading-medium`
- `kern-heading-small` 

### Titles

Mit `h1`-`h6` oder anderem Element, z.B. `p` kombinieren.

- `kern-title kern-title--large`
- `kern-title`
- `kern-title kern-title--small`

### Prelines

- `kern-preline kern-preline--large`
- `kern-preline`
- `kern-preline kern-preline--small`

### Sublines

- `kern-subline kern-subline--large`
- `kern-subline`
- `kern-subline kern-subline--small`

### Labels

i.d.R. mit `label` oder `legend` kombinieren.

- `kern-label kern-label--large`
- `kern-label`
- `kern-label kern-label--small`

### Body text

note: font-size und font-weight können kombiniert werden, z.B. `kern-body kern-body--large kern-body--bold`.

#### font-size

- `kern-body kern-body--large`
- `kern-body`
- `kern-body kern-body--small`

#### font-weight

- `kern-body kern-body--bold`
- `kern-body kern-body--muted`

---

## Icons

- span element 
- Basisklasse `kern-icon`
- `aria-hidden="true"` hinzufügen
- Beispiel: `<span class="kern-icon kern-icon--arrow-forward kern-icon--small" aria-hidden="true"></span>`

### Größe

- `kern-icon kern-icon--x-large`
- `kern-icon kern-icon--large`
- `kern-icon`
- `kern-icon kern-icon--small`

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

## Checkbox & Radio

- wrapper div: `kern-form-check`
- checkbox: `kern-form-check__checkbox`
- radio: `kern-form-check__radio`

---

## Form Inputs

wrapper div: `kern-form-input`

### Fehler

`kern-form-input kern-form-input--error`

### Text, Tel, Number, Password, File, E-Mail, Url, Textarea

input: `kern-form-input__input`

#### Fehler

`kern-form-input__input kern-form-input__input--error`

### Select

- weiterer wrapper um das select-Element `kern-form-input__select-wrapper`
- select: `kern-form-input__select`

#### Fehler

`kern-form-input__select kern-form-input__select--error`

### Date

- mehrere kurze Textfelder in einem Fieldset
- 2 Zeichen: `kern-form-input__input kern-form-input__input--width-2`
- 4 Zeichen: `kern-form-input__input kern-form-input__input--width-4`

---



## Button

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

## Link

- Basisklasse: `kern-link`
- Icons vor oder nach dem Text einfügen

### small

- `kern-link kern-link--small`

---

## Fieldset

- `kern-fieldset` auf das `fieldset`-Element
- für das `legend`-Element siehe Labels
- der Inhalt unterhalb der `legend` wird in ein div mit der Klasse `kern-fieldset__body` gesetzt

### Body

- `kern-fieldset__body`: Inhalte untereinander
- `kern-fieldset__body kern-fieldset__body--horizontal`: Inhalte nebeneinander

### Fehler

- `kern-fieldset kern-fieldset--error`

---

## Table

- normale HTML-Tabellenstruktur, Elemente bekommen Klassen:
- `table`: `kern-table`
- `thead`: `kern-table__head`
- `tbody`: `kern-table__body`
- `tfoot`: `kern-table__footer`
- `tr`: `kern-table__row`
- `th`: `kern-table__header`
- `td`: `kern-table__cell`

### gestreift

`kern-table kern-table--striped`

### numerische Felder

- th: `kern_table__header kern_table__header--numeric`
- td: `kern_table__cell kern_table__cell--numeric`

### Überschrift

`<caption class="kern-title">Überschrift</caption>`

---

## Divider

### nur visuell

`<hr class="kern-divider" aria-hidden="true" />`

### mit inhaltlicher Bedeutung (vom Screenreader vorgelesen)

`<hr class="kern-divider" />`

---

## Description List (dl)

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

## Accordion

- `details`: `kern-accordion`
- `summary`: `kern-accordion__header`
- innerhalb des `details` unterhalb des `summary`-Elements ein Element mit der Klasse `kern-accordion__body`
- in die `summary` kommt ein `<span class="kern-title">...</span>`

### mehrere Einträge

- die `details`-Elemente mit einem `<div class="kern-accordion-group">...</div>` umschließen


---

## Progress

```html
<div class="kern-progress">
<label class="kern-label" for="progress1">Schritt 2 von 5</label> 
<progress id="progress1" value="2" max="5"></progress>
</div>
```

- `label` kann auch unter dem `progress` stehen oder ganz weggelassen werden


---

## Dialog

dialog-HTML-Element


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

---

## Summary

---

## Task List

---

## Tabs
