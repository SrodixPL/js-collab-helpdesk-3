# C03_DOM - Helpdesk: od danych do DOM

Zbudujecie Helpdesk w pamięci przeglądarki. 

**TECH** wyjaśnia konstrukcje, **PROWADZENIE** dzieli tę samą pracę na kroki.

### Funkcjonalności: 

- dodawanie tytułu i priorytetu dla zgłoszenia
- lista zgłoszeń
- zmiana statusu po ID
- filtr all/new/doing/done
- licznik widoczne/wszystkie
- komunikat pustego wyniku.

### Wymagania:

- formularz (dodawanie nowego zgłoszenia) działa przez pociśnięcie klawisza [Enter]
- elementy mają etykiety
- odświeżenie resetuje dane

Praca w zespołach dwu lub trzyosobowych. 

Wspólne repozytorium na GitHub ("osiołek" zakłada, dodaje współpracowników).

### Kontrakt danych: 

- **id:** niepusty napis, do 100 znaków i unikatowy
- **title:** trim i 3–80 znaków
- **status:** new/doing/done
- **priority:** low/normal/high
- nowy wpis ma status new
- maksymalnie 1000 rekordów
- zmiana statusu także done -> new

### Sprawdzanie/testy: 

- tytuły długości 2,3,80,81 znaków po trim
- dwa takie same tytuły
- wszystkie statusy
- pusty filtr
- tekst HTML
- dodawanie przez pociśnięcie [Enter]
- odświeżenie 
- 1000/1001 zgłoszeń w próbie domeny

### Uwaga: 

Przypisanie `tickets = tickets.filter(...)` w obsłudze filtra bezpowrotnie usuwa dane. 

Filtr ma tworzyć tylko widok!

### Refaktoryzacja: 

Wydzielacie `createTicketRow(ticket)` z renderu i powtarzcie te same próby.

### Opcjonalnie: 

Sortowanie widoku bez zmiany tożsamości i źródłowej kolejności.
