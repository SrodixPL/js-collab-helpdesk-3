# C03_DOM - Prowadzenie krok po kroku

## Praca zespołu
W parze:

- A zaczyna reguły
- B interfejs

W trójce:

- A zaczyna reguły
- B interfejs
- C pisze próby i adapter danych


### Wytyczne

- **Najpierw uzgodnijcie wejście i wynik funkcji, aby pracować równolegle**. 

- \[sugestia\] Po pierwszym działającym przyroście (commicie) zamieńcie role; każdy pisze kod i przegląda zmianę partnera. 

- \[zalecenie\] Małe branche w istniejącym repo GitHub, małe commity, przegląd i integracja po każdym etapie. 

- Nie czekajcie z merge'owaniem branchy do końca collaba. 


## 1. HTML i kontrolki
- Zbudujcie:
    -  `form`
    - `input name=title`
    -  `select` priorytetu
    -  filtr
    -  listę zgłoszeń
    -  komunikat role=status
- Podłączcie `app.js` przez atrybut `defer`

**Sprawdźcie:** W konsoli selektory DOM zwracają elementy. `Null` oznacza zły selektor lub złą kolejność.

## 2. Dane przed widokiem
- Ręcznie utwórzcie dwa rekordy o tym samym tytule i różnych id.
- Uzgodnijcie `addTicket()` i `changeStatus()`.

**Sprawdźcie:** 
- Reguły działają w konsoli bez czytania dokumentu.

## 3. Pierwszy render
- Wyczyśćcie tylko listę.
- Dla każdego rekordu utwórzcie `<li>` i ustawcie tekst przez `textContent()`.

**Sprawdźcie:** 
- Ponowne renderowanie nie podwaja liczby wierszy.
- Tekst `<b>ABC</b>` pozostaje tekstem.

## 4. Dodawanie
- W `submit` najpierw `preventDefault()`, potem odczyt, walidacja i nowy stan.
- Czyśćcie pole tylko po sukcesie.

**Sprawdźcie:** 
- Spacje i tytuł dwuznakowy nie dodają rekordu;
- klawisz `[Enter]` działa (dodaje nowy rekord).

## 5. Status po ID
- Dla każdego wiersza dodajcie kontrolkę zmiany statusu.
- Handler pamięta ID danego rekordu.

**Sprawdźcie:** 
- Zmiana drugiego z takich samych tytułów nie zmienia pierwszego.

## 6. Filtr i licznik
- Wyliczcie zgłoszenia w statusie `visible` w renderze.
- Dodajcie informację o pustym wyniku i liczniku.

**Sprawdźcie:** 
- Filtr po `done`,
- dodanie new,
- powrót (all): nowe zgłoszenie nadal istnieje.

## 7. Klawiatura i integracja
- Przejdźcie korzystając z klawisza `[Tab]` przez cały formularz.
- Po zmianie statusu sprawdźcie fokus i komunikat.

**Sprawdźcie:** 
- Nie ma pułapki klawiaturowej (można obsłużyć cały formularz wyłącznie z klawiatury).
- UI i stan zgadzają się.

## Naprawa i porządkowanie
- Przypisanie `tickets = tickets.filter(...)` w obsłudze filtra bezpowrotnie usuwa dane.
- Filtr ma tworzyć tylko widok. 
- Wydzielcie `createTicketRow(ticket)` z renderu.

## Końcowa próba zespołu
- tytuły długości 2,3,80,81 po trim
- dwa takie same tytuły
-  wszystkie statusy
-  pusty filtr
-  tekst HTML
- Enter
- odświeżenie
- 1000/1001 zgłoszeń w próbie domeny
