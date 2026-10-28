# C03_DOM - Informacje techniczne

- DOM to obiektowa reprezentacja dokumentu
- `querySelector()` zwraca element albo `null`
- `createElement()` tworzy element ("node") 
- `append()` dołącza element do już istniejącego elementu
- `replaceChildren()` zastępuje elementy potomne ("dzieciaki", node'y znajdujące się wewnątrz)
- `textContent()` ustawia tekst bez interpretowania go jako HTML
- nazwa `name` kontrolki służy FormData; `id` pomaga selektorom i etykietom.

```html
<form id="book"><label>Tytuł książki <input name="title"></label><button>Sprawdź</button></form>
<p id="answer" role="status"></p>
<script src="demo.js" defer></script>
```
```js
const form = document.querySelector('#book');
const answer = document.querySelector('#answer');
form.addEventListener('submit', event => {
  event.preventDefault();
  answer.textContent = String(new FormData(form).get('title')).trim();
});
```

- Zdarzenie submit obejmuje kliknięcie i Enter
- `preventDefault()` powstrzymuje domyślną nawigację
- handler jest funkcją przekazaną do `addEventListener()`, nie wynikiem jej natychmiastowego wywołania
- tylko tablica `tickets` jest źródłem danych
- filtr wylicza lokalne `visible`; nie usuwa elementów `tickets`
- zmiana statusu identyfikuje rekord przez `id`, nigdy po tytule ani indeksie widocznej listy
- reguły zwracają nową tablicę albo rzucają `Error`
- handler łapie błąd i pozostawia formularz do poprawy
- po pełnym renderze usunięty element traci fokus: ustawiacie go świadomie na filtrze po zmianie statusu, a na polu tytułu po dodaniu.

### Wspólna umowa Helpdesku

- rekord zawiera `id`, `title`, `status`, `priority`
- ID: napis niepusty po trim, oryginalna długość do 100, unikatowy w zbiorze
- tytuł zapisujemy po `trim()`, długość 3–80. 
- statusy: new/doing/done, dowolne przejście, także done -> new. 
- priorytety: low/normal/high
- do 1000 rekordów

### Przepływ zdarzeń Helpdesku: 

1. zdarzenie 
1. odczyt 
1. reguła 
1. nowy stan 
1. render

