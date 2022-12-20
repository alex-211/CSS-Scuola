# CSS-Scuola

Questo è un sito (che si può trovare anche su [alex-211.github.io/CSS-Scuola](questo link)) che serve per far vedere al mio professore come so usare il CSS e fare il Web Development in generale.

--------------------------------------------------------------------------------------------------------------------------------------------

### Home *index.html*

Questa pagina è la home del mio sito e da qui l'utente può decidere su quale parte del sito navigare tramite una navbar

--------------------------------------------------------------------------------------------------------------------------------------------

### Pagina contenuto *pg1.html / pg2.html / pg3.html*

Queste sono 3 pagine uguali ma con dei metodi CSS diversi:

1. pg1: usa il CSS esterno, quindi ha un tag `<link>`  per collegare la stylesheet (style.css) alla pagina. Il motivo per cui ci sono più stylesheet è spiegato più in là
2. pg2: Usa il CSS interno quindi ha dei tag `<style>`  all'interno dei quali c'è lo stesso testo che si trova nelle stylsheet
3. pg3: Usa il CSS in-line quindi ogni tag ha un attributo `style=""`  e per ogni elemento ho ricopiato 



In queste pagine sono mostrate le seguenti feature: la proprietà "float" (che allinea certi elementi in base a dei criteri specificati), alcune proprietà che modificano il comportamento e l'apparenza dei link e come colorari alcuni elementi in CSS; ho anche fatto una pagina che mostra tutti i 140 nomi di colori supportati da browser *colors.html* . Inoltre in ogni pagina c'è un menù dropdown per navigare alle altre pagine, alla home e alle fonti.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Stylesheets *style.css / pg3-dropdown.css / googleMaterialIcons.css / googleFonts.css*

Nel mio sito ci sono più file stylesheet perché applicare tutte le proprietà style per i fonti di Google ad ogni elemento sarebbe stato troppo elaborato, quindi separando gli stylsheet ho potuto usare il CSS in-line in pg3 e poter linkare comunque il file per le proprietà necessarie per Google Fonts e CSS.

- style.css contiene le proprietà e le classi usate on pg1 (che sono state tracopiate nel tag  `<style>`  di pg2 )
- pg3-dropdown.css contiene le proprietà per il menù dropdown di pagina 3, questo per evitare di dover linkare lo stylesheet principale e rendere inutile il CSS in-line
- googleMateriaIicons.css contiene le proprietà per le icone di Google
- googleFonts.css contiene proprietà per i font di Google

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Pagina Filler *inDev.html*

Questa è una pagina filler, non accessibile dall'utente del sito, che mi serve a tenere del codice per le pagine che non sono ancora pronte ad essere mostrate. C'è una icona del martello e chiave inglese e un bottone per tornare alla home.

