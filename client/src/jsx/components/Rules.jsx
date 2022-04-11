import React from 'react';
import SectionTitle from './SectionTitle';

const Rules = () => {
    return (
        <section className='rules'>
            <div>
                <SectionTitle title='Regulamin'/>
                <p className='rules__content'>Sklep Internetowy dostępny pod adresem internetowym www.navrot-szycie.pl prowadzony jest przez Patrycję Nawrotkiewicz prowadzącą działalność gospodarczą pod nazwą Navrot Szycie Patrycja Nawrotkiewicz wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej Rzeczypospolitej Polskiej prowadzonej przez ministra właściwego do spraw gospodarki, posiadającą: adres miejsca wykonywania działalności: ul. Lubińska 46/8, 53-625 Wrocław, NIP 8971843751 , REGON 368057207, adres poczty elektronicznej: navrot.szycie@gmail.com</p>
            </div>
            <div>
                <SectionTitle title='Postanowienia ogólne'/>
                <ol className='rules__content'>
                    <li><p>Za pośrednictwem Sklepu Internetowego Sprzedawca prowadzi sprzedaż detaliczną swoich Produktów.</p></li>
                    <li><p>Właścicielem sklepu i Sprzedawcą jest: Navrot Szycie Patrycja Nawrotkiewicz, ul. Lubińska 46/8, 53-625 Wrocław, NIP 8971843751 , REGON 368057207</p></li>
                    <li><p>Złożenie zamówienia jest równoznaczne z akceptacją niniejszego Regulaminu, który jest integralną częścią Umowy Sprzedaży.</p></li>
                    <li><p>Niniejszy Regulamin określa zasady korzystania przez Kupującego ze Sklepu Internetowego.</p></li>
                    <li><p>Ceny Produktów widocznych w Sklepie są cenami brutto (zawierają VAT).</p></li>
                    <li><p>Ceny Produktów nie zawierają kosztów dostawy. Kupujący o koszcie dostawy jest każdorazowo informowany w trakcie składania Zamówienia.</p></li>
                    <li><p>Umowa Sprzedaży pomiędzy Sprzedawcą a Kupującym jest zawierana w języku polskim.</p></li>
                </ol>
            </div>
            <div>
                <SectionTitle title='Zamówienia i dostawa'/>
                <ol className='rules__content'>
                    <li><p>Zamówienia można składać poprzez formularz dostępny na stronie internetowej Sklepu oraz wysyłając e-mail na adres dostępny na stronie internetowej Sklepu.</p></li>
                    <li><p>Warunkiem realizacji zamówienia jest podanie przez klienta danych pozwalających na weryfikację klienta i odbiorcy towaru. Sklep potwierdza przyjęcie zamówienia e-mailem.</p></li>
                    <li><p>Informacje znajdujące się na stronie internetowej Sklepu nie stanowią oferty w rozumieniu Kodeksu Cywilnego. klient składając zamówienie składa ofertę zakupu określonego towaru. Do zawarcia umowy sprzedaży dochodzi z chwilą potwierdzenia przez Sprzedawcę przyjęcia Zamówienia do realizacji.</p></li>
                    <li><p>Sposób dostawy jest wybierany przez Kupującego w trakcie składania Zamówienia.</p></li>
                    <li><p>Koszt dostawy wynosi 14zł i jest doliczany do kosztów Zamówienia.</p></li>
                    <li><p>Sposoby płatności za zamówienie:
                        <p> <b>a)</b> przelew tradycyjny - dane do przelewu zostają wysłane po dokonaniu zamówienia;</p>
                        <p> <b>b)</b> przelew elektroniczny - podmiotem świadczącym obsługę płatności online jest PayPal i obsługuje on następujące karty płatnicze: Visa, MasterCard, American Express.</p></p>
                    </li>
                    <li><p>Przy płatnościach kartą czas realizacji zamówienia liczony jest od momentu zaksięgowania przelewu na koncie Sprzedawcy.</p></li>
                    <li><p>Brak zapłaty kosztów zamówienia przez Kupującego w ciągu 7 dni skutkuje jego anulowaniem.</p></li>
                    <li><p>Zamówiony towar Sklep wysyła za pośrednictwem Poczty Polskiej.</p></li>
                    <li><p>Termin realizacji zamówienia od momentu zaksięgowania wpłaty na koncie to 3 dni robocze. Do terminu realizacji należy doliczyć czas dostawy.</p></li>  
                </ol>
            </div>
            <div id='returns'>
                <SectionTitle title='Warunki reklamacji'/>
                <ol className='rules__content'>
                    <li><p>W przypadku niezgodności towaru z umową Klient powinien odesłać do Sklepu, na koszt Sklepu, reklamowany towar wraz z opisem niezgodności.</p></li>
                    <li><p>Sklep ustosunkowuje się do reklamacji klienta w terminie 14 dni od momentu otrzymania reklamacji i prześle informację zwrotną drogą mailową.</p></li>
                    <li><p>Gdy realizacja uzasadnionej reklamacji wiąże się z wysłaniem Klientowi nowego towaru bądź usunięcia niezgodności, koszty dostaw ponosi Sklep.</p></li>
                    <li><p>Sprzedawca zastrzega, że różnice dotyczące zdjęć Towarów, a wynikające z indywidualnych ustawień komputera danego klienta (kolor, proporcje itd.) nie mogą być podstawą do reklamacji towaru.</p></li>
                </ol>
            </div>
            <div>
                <SectionTitle title='Warunki zwrotów'/>
                <ol className='rules__content'>
                    <li><p>Można zwrócić zakupiony produkt bez podania przyczyny w przeciągu 14 dni od daty jego otrzymania. Oświadczenie o odstąpieniu od umowy może zostać złożone pisemnie na adres: ul. Lubińska 46/8, 53-625 Wrocław, lub w formie elektronicznej za pośrednictwem poczty elektronicznej na adres: navrot.szycie@gmail.com.</p></li>
                    <li><p>Produkt musi być w stanie nienaruszonym i nie może nosić śladów używania.</p></li>
                    <li><p>Produkty personalizowane, czyli wykonane na indywidualne zamówienie nie podlegają zwrotowi.</p></li>
                    <li><p>Po dostarczeniu przesyłki zwrotnej do Sklepu, zostaje zwrócona kwota za Produkt i koszty dostawy. Sklep nie przyjmuje przesyłek za pobraniem.</p></li>
                    <li><p>Możliwe koszty związane ze zwrotami, które obowiązany jest ponieść konsument: 
                        <p><b>a)</b> Jeżeli konsument wybrał sposób dostawy Produktu inny niż najtańszy zwykły sposób dostawy dostępny w Sklepie Internetowym, Sprzedawca nie jest zobowiązany do zwrotu konsumentowi poniesionych przez niego dodatkowych kosztów.</p>
                        <p><b>b)</b> W przypadku Produktu będącego usługą, której wykonywanie - na wyraźne żądanie konsumenta - rozpoczęło się przed upływem terminu do odstąpienia od umowy, konsument, który wykonuje prawo odstąpienia od umowy po zgłoszeniu takiego żądania, ma obowiązek zapłaty za świadczenia spełnione do chwili odstąpienia od umowy. Kwotę zapłaty oblicza się proporcjonalnie do zakresu spełnionego świadczenia, z uwzględnieniem uzgodnionej w umowie ceny lub wynagrodzenia. Jeżeli cena lub wynagrodzenie są nadmierne, podstawą obliczenia tej kwoty jest wartość rynkowa spełnionego świadczenia.</p></p>
                    </li>
                    <li><p>W terminie 14 dni od odstąpienia przez klienta od umowy Właściciel Sklepu zwraca klientowi zapłaconą kwotę.</p></li>
                </ol>
            </div>
            <div id='privacy'>
                <SectionTitle title='Polityka prywatności'/>
                <ol className='rules__content'>
                    <li><p><b>Administrator:</b> firma Navrot Szycie Patrycja Nawrotkiewicz, z siedzibą przy ul. Lubińska 46/8, 53-625 Wrocław, NIP 8971843751 , REGON 368057207.</p></li>
                    <li><p><b>Dane osobowe:</b> wszystkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej poprzez jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość osoby fizycznej, w tym nr IP urządzenia, dane o lokalizacji, identyfikator internetowy oraz informacje gromadzone za pośrednictwem plików cookie oraz innej podobnej technologii.</p></li>
                    <li><p><b>Polityka:</b> niniejsza Polityka prywatności.</p></li>
                    <li><p><b>RODO:</b> Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 7 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.</p></li>
                    <li><p><b>Serwis:</b> serwis dostępny pod adresem navrot-szycie.pl</p></li>
                    <li><p><b>Użytkownik:</b> każda osoba fizyczna odwiedzająca Serwis lub korzystająca z jednej lub kilku usług lub funkcjonalności udostępnianych w Serwisie.</p></li>
                </ol>
            </div>
            <div>
                <SectionTitle title='Przetwarzanie danych w związku z korzystaniem z serwisu'/>
                <p className='rules__content'>W związku z korzystaniem przez Użytkownika z Serwisu Administrator zbiera dane w zakresie niezbędnym do świadczenia poszczególnych usług oferowanych w Serwisie, a także informacje o aktywności Użytkownika w Serwisie. Poniżej zostały opisane szczegółowe zasady oraz cele przetwarzania danych osobowych gromadzonych podczas korzystania przez Użytkownika z Serwisu.</p>
            </div>
            <div>
                <SectionTitle title='Cele oraz podstawy prawne przetwarzania danynch w serwisie'/>
                <p className='rules__content rules__content--strong'><strong>Korzystanie z serwisu</strong></p>
                <p className='rules__content'>Dane osobowe wszystkich osób korzystających z Serwisu (w tym adres IP lub inne identyfikatory oraz informacje gromadzone za pośrednictwem plików cookies lub innych podobnych technologii) przetwarzane są przez Administratora: w celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit. f) RODO) polegający na ochronie swoich praw;<br></br><br></br>
                Aktywność Użytkownika w Serwisie, w tym jego dane osobowe, są rejestrowane w logach systemowych (specjalnym programie komputerowym służącym do przechowywania chronologicznego zapisu zawierającego informację o zdarzeniach i działaniach dotyczących systemu informatycznego służącego do świadczenia usług przez Administratora). Zebrane w logach informacje przetwarzane są przede wszystkim w celach związanych ze świadczeniem usług. Administrator przetwarza również te dane w celach technicznych, administracyjnych, na potrzeby zapewnienia bezpieczeństwa systemu informatycznego oraz zarządzania nim, a także w celach analitycznych i statystycznych – w tym zakresie podstawą prawną przetwarzania jest prawnie uzasadniony interes administratora (art. 6 ust. 1 lit. f) RODO).</p>
                <p className='rules__content rules__content--strong'><strong>Składanie zamówień</strong></p>
                <p className='rules__content'>Złożenie zamówienia na zakupu Towaru przez Użytkownika Serwisu wiąże się z przetwarzaniem jego danych osobowych. Podanie danych oznaczonych jako obowiązkowe jest wymagane w celu przyjęcia i obsługi zamówienia, a ich niepodanie skutkuje brakiem jego realizacji. Podanie pozostałych danych jest fakultatywne.<br></br><br></br>
                Dane osobowe są przetwarzane: 
                <br></br><b>1)</b> w celu realizacji złożonego zamówienia – podstawą prawną przetwarzania jest niezbędność przetwarzania do wykonania umowy (art. 6 ust. 1 lit b RODO); 
                <br></br><b>2)</b> w zakresie danych podanych fakultatywnie podstawą prawną przetwarzania jest zgoda (art. 6 ust. 1 lit a RODO);
                <br></br><b>3)</b> w celu realizacji obowiązków ustawowych ciążących na Administratorze, wynikających w szczególności z przepisów podatkowych i przepisów o rachunkowości – podstawą prawną przetwarzania jest obowiązek prawny (art. 6 ust. 1 lit c RODO);
                <br></br><b>4)</b> w celach analitycznych i statystycznych – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit f RODO) polegający na prowadzeniu analiz aktywności Użytkowników w Serwisie, a także ich preferencji zakupowych w celu doskonalenia stosowanych funkcjonalności;
                <br></br><b>5)</b> w celu ewentualnego ustalenia i dochodzenia roszczeń lub obrony przed nimi – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit f RODO) polegający na ochronie jego praw.</p>
                <p className='rules__content rules__content--strong'><strong>Formularze kontaktowe</strong></p>
                <p className='rules__content'>Administrator zapewnia możliwość skontaktowania się z nim przy wykorzystaniu elektronicznych formularzy kontaktowych. Skorzystanie z formularza wymaga podania danych osobowych, niezbędnych do skontaktowania się z Użytkownikiem i udzielenia odpowiedzi na zapytanie. Użytkownik może podać także inne dane, w celu ułatwienia kontaktu lub obsługi zapytania. Podanie danych oznaczonych jako obowiązkowe jest wymagane w celu przyjęcia i obsługi zapytania, a ich niepodanie skutkuje brakiem możliwości jego obsługi. Podanie pozostałych danych jest dobrowolne.<br></br><br></br>
                Dane osobowe są przetwarzane: 
                <br></br><b>1)</b> w celu identyfikacji nadawcy oraz obsługi jego zapytania przesłanego przez udostępniony formularz – podstawą prawną przetwarzania jest niezbędność przetwarzania do wykonania umowy o świadczenie usługi (art. 6 ust. 1 lit. b) RODO); 
                <br></br><b>2)</b> w celach analitycznych i statystycznych – podstawą prawną przetwarzania jest uzasadniony interes Administratora (art. 6 ust. 1 lit. f) RODO), polegający na prowadzeniu statystyk zapytań zgłaszanych przez Użytkowników za pośrednictwem Serwisu w celu doskonalenia jego funkcjonalności.</p>
            </div>
            <div>
                <SectionTitle title='Pliki Cookies oraz podobna technologia'/>
                <p className='rules__content'>Pliki cookies to małe pliki tekstowe, zapisywane na urządzeniu Użytkownika, przeglądającego Serwis. Cookies zazwyczaj zawierają nazwę domeny serwisu internetowego, z którego pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</p>
                <p className='rules__content rules__content--strong'><strong>Cookies "serwisowe"</strong></p>
                <p className='rules__content'>Administrator wykorzystuje tzw. cookie serwisowe przede wszystkim w celu dostarczania Użytkownikowi usług świadczonych drogą elektroniczną oraz poprawy jakości tych usług. W związku z tym Administrator oraz inne podmioty świadczące na jego rzecz usługi analityczne oraz statystyczne korzystają z plików cookies, przechowując informacje lub uzyskując dostęp do informacji już przechowywanych w telekomunikacyjnym urządzeniu końcowym Użytkownika (komputer, telefon, tablet itp.). Pliki cookies wykorzystywane w tym celu obejmują: pliki cookies z danymi Użytkownika (identyfikator sesji) zapisywane na czas trwania sesji (ang. user input cookies); uwierzytelniające pliki cookies wykorzystywane do usług wymagających uwierzytelniania na czas trwania sesji (ang. authentication cookies); pliki cookies służące do monitorowania ruchu na stronie internetowej, tj. analityki danych, w tym cookies: Google Analytics (są to pliki wykorzystywane przez spółkę Google – tj. podmiot, któremu Administrator powierzył przetwarzanie danych osobowych - w celu prowadzenia analizy sposobu korzystania z Serwisu przez Użytkownika, w tym tworzenia statystyk i raportów dotyczących funkcjonowania Serwisu).</p>
            </div>
            <div>
                <SectionTitle title='Okres przetwarzania danych osobowych'/>
                <p className='rules__content'>Okres przetwarzania danych przez Administratora zależy od rodzaju świadczonej usługi i celu przetwarzania. Co do zasady dane przetwarzane są przez czas świadczenia usługi lub zrealizowania zamówienia, do czasu wycofania wyrażonej zgody lub zgłoszenia skutecznego sprzeciwu względem przetwarzania danych w przypadkach, gdy podstawą prawną przetwarzania danych jest uzasadniony interes Administratora. Okres przetwarzania danych może być przedłużony w przypadku, gdy przetwarzanie jest niezbędne do ustalenia, dochodzenia lub obrony przed ewentualnymi roszczeniami, jednak nie dłużej, niż przez 10 lat, a po tym okresie, jedynie w przypadku i w zakresie, w jakim będą wymagać tego przepisy prawa. Po upływie okresu przetwarzania, dane są nieodwracalnie usuwane.</p>
            </div>
            <div>
                <SectionTitle title='Uprawnienia użytkownika'/>
                <p className='rules__content'>Użytkownikowi przysługuje prawo: dostępu do treści danych oraz żądania ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo wniesienia sprzeciwu względem przetwarzania danych, a także prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych. W zakresie, w jakim podstawą przetwarzania danych Użytkownika jest zgoda, dane będą przetwarzane do czasu jej wycofania. Zgodę można wycofać w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem. W celu cofnięcia zgody Użytkownik może też wysłać maila na adres navrot.szycie@gmail.com.</p>
                <p className='rules__content rules__content--strong'><strong>Prawo do sprzeciwu</strong></p>
                <p className='rules__content'>Użytkownik ma prawo w dowolnym momencie wnieść sprzeciw wobec przetwarzania jego danych dla celów marketingu bezpośredniego, w tym profilowania, jeśli przetwarzanie odbywa się w związku z uzasadnionym interesem administratora. Użytkownik ma także prawo w dowolnym momencie wnieść sprzeciw wobec przetwarzania jego danych z przyczyn związanych z jego szczególną sytuacją w przypadkach, gdy postawą prawną przetwarzania danych jest uzasadniony interes Administratora (np. w związku z realizacją celów analitycznych i statystycznych, w tym profilowaniem).</p>
            </div>
            <div>
                <SectionTitle title='Bezpieczeństwo danych osobowych'/>
                <p className='rules__content'>Administrator na bieżąco prowadzi analizę ryzyka w celu zapewnienia, że dane osobowe przetwarzane są przez niego w sposób bezpieczny, zapewniający przede wszystkim, że dostęp do danych mają jedynie osoby upoważnione i jedynie w zakresie, w jakim jest to niezbędne ze względu na wykonywane przez nie zadania. Administrator dba o to, by wszystkie operacje na danych osobowych były rejestrowane i dokonywane jedynie przez uprawnionych pracowników i współpracowników. Administrator podejmuje wszelkie niezbędne działania, by także jego podwykonawcy i inne podmioty współpracujące dawały gwarancję stosowania odpowiednich środków bezpieczeństwa w każdym przypadku, gdy przetwarzają dane osobowe na zlecenie Administratora.</p>
            </div>
        </section>
    )
}

export default Rules;