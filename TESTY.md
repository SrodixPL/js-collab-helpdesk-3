# Testy manualne aplikacji Helpdesk

Data: __________  Osoba testująca: __________  Przeglądarka: __________

W polu „Wynik” wpisz **PASS** lub **FAIL** po wykonaniu testu. Oczekiwane rezultaty są opisem wymagań testowych, a nie potwierdzeniem wykonania testów. Przed każdym testem, jeśli nie podano inaczej, odśwież stronę i pozostaw wszystkie statusy zaznaczone.

## Tytuły i dodawanie zgłoszeń

| ID | Kroki | Oczekiwany rezultat | Wynik (PASS/FAIL) |
|---|---|---|---|
| T01 | Wpisz `  ab  ` i dodaj zgłoszenie. | Po usunięciu spacji tytuł ma 2 znaki. Zgłoszenie nie zostaje dodane; pojawia się komunikat o wymaganej długości 3–80 znaków. | PASS |
| T02 | Wpisz `  abc  ` i dodaj zgłoszenie. | Po usunięciu spacji tytuł ma 3 znaki. Zgłoszenie zostaje dodane z tytułem `abc`, bez spacji na początku i końcu. | PASS |
| T03 | Wpisz 80 znaków `a` ze spacjami na początku i końcu, a następnie dodaj zgłoszenie. | Zgłoszenie zostaje dodane; zapisany tytuł ma 80 znaków i nie zawiera otaczających spacji. | PASS |
| T04 | Wpisz 81 znaków `a` ze spacjami na początku i końcu, a następnie dodaj zgłoszenie. | Zgłoszenie nie zostaje dodane; pojawia się komunikat o wymaganej długości 3–80 znaków. | PASS |
| T05 | Dodaj dwa zgłoszenia o identycznym tytule, np. `Awaria drukarki`. | Oba zgłoszenia są widoczne na liście i mają różne identyfikatory. | PASS |
| T06 | Wpisz jako tytuł `<img src=x onerror=alert(1)>` i dodaj zgłoszenie. | Tytuł jest widoczny jako zwykły tekst; element HTML nie jest tworzony i nie pojawia się okno alertu. | |
| T07 | Wpisz poprawny tytuł w polu formularza i naciśnij **Enter**. | Zostaje dodane dokładnie jedno zgłoszenie; formularz pokazuje komunikat o dodaniu i czyści pole tytułu. | PASS |

Do przygotowania tytułów o dokładnej długości można skorzystać z konsoli przeglądarki: `'a'.repeat(80)` lub `'a'.repeat(81)` i skopiować otrzymany tekst.

## Statusy i filtr

Przygotowanie: dodaj cztery zgłoszenia o różnych tytułach. Każdemu przypisz inny status: **Nowe**, **W Realizacji**, **W Testach** i **Ukończone**.

| ID | Kroki | Oczekiwany rezultat | Wynik (PASS/FAIL) |
|---|---|---|---|
| T08 | Sprawdź listę przy zaznaczonych wszystkich czterech statusach. | Widoczne są wszystkie cztery zgłoszenia; każde ma przypisany wybrany status. Licznik pokazuje `Widoczne: 4 / Wszystkie: 4`. | PASS |
| T09 | Zaznacz tylko **Nowe**, następnie tylko **W Realizacji**, potem tylko **W Testach**, a na końcu tylko **Ukończone**. | Dla każdego wyboru widoczne jest tylko zgłoszenie o wybranym statusie; licznik pokazuje `Widoczne: 1 / Wszystkie: 4`. | PASS |
| T10 | Zaznacz jednocześnie **Nowe** i **W Testach**, a pozostałe statusy odznacz. | Widoczne są dwa zgłoszenia o zaznaczonych statusach; licznik pokazuje `Widoczne: 2 / Wszystkie: 4`. | PASS |
| T11 | Odznacz wszystkie statusy w filtrze. | Lista jest pusta, widoczny jest komunikat o braku zgłoszeń dla filtra, a licznik pokazuje `Widoczne: 0 / Wszystkie: 4`. | PASS |
| T12 | Po T11 zaznacz ponownie wszystkie statusy. | Wszystkie cztery zgłoszenia wracają na listę; żadne nie zostało usunięte. | PASS |
| T13 | Przy zaznaczonym tylko statusie **Nowe** zmień status widocznego zgłoszenia na **Ukończone**, a następnie zaznacz **Ukończone**. | Zgłoszenie znika z listy po zmianie statusu i pojawia się po zaznaczeniu **Ukończone**; liczba wszystkich zgłoszeń pozostaje bez zmian. | PASS |

## Odświeżenie

| ID | Kroki | Oczekiwany rezultat | Wynik (PASS/FAIL) |
|---|---|---|---|
| T14 | Dodaj zgłoszenie, zmień zaznaczenie filtrów i odśwież stronę. | Lista jest pusta, licznik wskazuje `Widoczne: 0 / Wszystkie: 0`, a wszystkie statusy są ponownie zaznaczone. Dane zgłoszeń nie są obecnie zapisywane po odświeżeniu. | PASS |

## Limit zgłoszeń — próba domeny

Wykonaj poniższy kod w konsoli przeglądarki na otwartej stronie aplikacji. Test sprawdza funkcję `addTicket` na osobnej tablicy; nie dodaje zgłoszeń do listy w interfejsie.

```js
{
    const dane = Array.from({ length: 999 }, (_, i) => ({
        id: String(i + 1), title: `Zgłoszenie ${i + 1}`,
        priority: 'normal', status: 'new'
    }));
    const tysiace = addTicket(dane, {
        id: '1000', title: 'Zgłoszenie 1000', priority: 'normal', status: 'new'
    });
    console.log('Liczba po dodaniu 1000. zgłoszenia:', tysiace.length);
    console.log('Liczba w oryginalnej tablicy:', dane.length);
    try {
        addTicket(tysiace, {
            id: '1001', title: 'Zgłoszenie 1001', priority: 'normal', status: 'new'
        });
        console.log('1001. zgłoszenie zostało dodane');
    } catch (blad) {
        console.log('Błąd przy 1001. zgłoszeniu:', blad.message);
    }
    console.log('Liczba po próbie 1001. zgłoszenia:', tysiace.length);
}
```

| ID | Kroki | Oczekiwany rezultat | Wynik (PASS/FAIL) |
|---|---|---|---|
| T15 | Uruchom kod i sprawdź wyniki dla 1000. zgłoszenia. | Nowa tablica ma 1000 elementów, a pierwotna nadal ma 999. | PASS |
| T16 | Sprawdź wynik próby dodania 1001. zgłoszenia. | Pojawia się błąd `Można dodać maksymalnie 1000 zgłoszeń.`; tablica nadal ma 1000 elementów. | PASS |

Uwagi: ______________________________________________________________________
