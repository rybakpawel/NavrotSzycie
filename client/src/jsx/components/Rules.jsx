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
            <div>
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
            
        </section>
    )
}

export default Rules;