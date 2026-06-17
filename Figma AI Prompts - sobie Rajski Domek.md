# Figma AI Prompts — sobie…Rajski Domek
### Żłobek Poznań | Landing Page + Podstrony

---

## JAK UŻYWAĆ

1. Otwórz Figma → nowy plik → wciśnij `Cmd/Ctrl + K` → wybierz **"Generate with AI"**
2. Wklej **najpierw DESIGN SYSTEM PROMPT** — ustali paletę i styl dla całego projektu
3. Następnie generuj każdą stronę osobnym promptem — każdy jest samodzielny
4. Przy każdym promptcie dodaj jako attachment: zdjęcie przykładowego designu Kindori (dostarczone przez klienta)

---

---

## 0. DESIGN SYSTEM — wklej to PIERWSZE

```
Create a design system for a private nursery/daycare website called "sobie…Rajski Domek" located in Poznań, Poland. The brand is warm, trustworthy, and playful — targeted at parents of children aged 0–3 years.

VISUAL STYLE:
Inspired by the Kindori kindergarten design: clean layout with colorful accent sections, rounded cards, child photography integrated into hero sections, playful but professional. NOT cartoonish — warm and premium.

COLOR PALETTE:
- Primary: #E8845A (warm terracotta/orange) — main CTA buttons, highlights
- Secondary: #5B9E7B (sage green) — secondary accents, trust badges
- Accent: #F5C842 (warm yellow) — decorative elements, hover states
- Neutral dark: #1E1E2E (near-black) — headings, top utility bar
- Neutral mid: #6B6660 (warm gray) — body text, captions
- Background: #FBF8F4 (warm off-white) — page background
- Surface: #FFFFFF — cards, modals
- Pale peach: #FDF0E8 — soft section backgrounds

TYPOGRAPHY:
- Heading font: "Nunito" (rounded, friendly, professional) — Bold/ExtraBold for h1–h2
- Body font: "Inter" — Regular/Medium for paragraphs and UI
- h1: 52px / line-height 1.15 / font-weight 800
- h2: 36px / line-height 1.2 / font-weight 700
- h3: 22px / line-height 1.3 / font-weight 700
- Body: 15px / line-height 1.65 / font-weight 400
- Small/Caption: 12px / letter-spacing 1.5px / uppercase / font-weight 700

COMPONENT STYLE:
- Border radius: 16px for cards, 50px for buttons (pill shape)
- Buttons: primary = terracotta fill + white text; secondary = outline terracotta; ghost = text only
- Cards: white background, 1px border #E8E4DE, subtle shadow (0 4px 20px rgba(0,0,0,0.06))
- Section padding: 96px top/bottom on desktop
- Max content width: 1180px centered
- Grid: 12-column, 24px gutter

ICONOGRAPHY:
- Line icons, 2px stroke, rounded caps — same warm terracotta color
- Emoji-style decorative elements for section dividers (small stars, hearts, leaves)

IMAGERY DIRECTION:
- Warm, natural child photography — children playing, eating, painting, laughing
- No stock photo feel — candid, real moments
- Slight warm color grade on photos
- Circular photo crops for team/staff cards; wide rectangular for hero

Frame sizes to create: Desktop 1440px wide, Mobile 390px wide
```

---

---

## 1. STRONA GŁÓWNA (Homepage)

```
Design a full landing page for "sobie…Rajski Domek" — a private nursery in Poznań, Poland, caring for children aged 0–3 years. Use the design system defined earlier. Style reference: the attached Kindori kindergarten design — colorful feature cards, clean hero with child photography, clear section hierarchy.

The page should be 1440px wide desktop layout. Create all sections top to bottom:

---

SECTION 1 — TOP UTILITY BAR
Full-width dark bar (#1E1E2E), height 44px. Left side: small phone icon + "725 119 962" | envelope icon + "sobierajskidomek@wp.pl". Right side: Facebook icon (rounded square). Small text, white, 12px.

---

SECTION 2 — NAVIGATION
White background, 80px height, subtle bottom border. Left: logo text "sobie…Rajski Domek" with a small paw/leaf icon in terracotta. Center: nav links — "O nas" | "Oferta" | "Lokalizacje" | "Rekrutacja" | "Galeria" | "Kontakt" — 15px, font-weight 500, dark color, hover underline in terracotta. Right: "Strefa Rodzica" ghost link + "Zapisz dziecko →" pill button in terracotta.

---

SECTION 3 — HERO
Full-width, min-height 680px. Left half: content area with pale peach background (#FDF0E8). Small label above heading: "Żłobek Poznań — Podolany & Grunwald" in terracotta uppercase 12px. Large heading (52px, ExtraBold): "Twoje dziecko w dobrych rękach." Subheading (18px, regular, warm gray): "Prywatny żłobek dla dzieci od 20 tygodnia do 3 lat · 2 lokalizacje w Poznaniu · Otwarty cały rok." Two CTA buttons below: primary pill "Zapisz dziecko" (terracotta) + secondary ghost "Zadzwoń: 725 119 962". Right half: warm child photography filling the space, slight rounded corner on inner edge. Decorative: small illustrated clouds or stars floating near the top-right.

---

SECTION 4 — TRUST BAR
White background, 80px height. Four items in a row separated by thin vertical dividers. Each item: small icon + bold number/text + gray caption. Items: "Od 2013 roku" · "2 lokalizacje" · "Certyfikat Sanepidu" · "Dofinansowanie Miasta". Clean, minimal, confidence-building strip.

---

SECTION 5 — DLACZEGO MY (Why Choose Us)
Pale peach background. Section label: "DLACZEGO MY" in terracotta uppercase. H2: "Twoje dziecko zasługuje na najlepsze." Short lead paragraph in gray. Below: 3-column grid of feature cards (like Kindori's colored cards but more refined). Each card: rounded 24px, colored background (terracotta / sage green / warm yellow alternating), circle image at top center (child photo), card title bold white, short description white. Cards: 1. "Domowa kuchnia" (with Sanepid cert note) · 2. "Certyfikowana kadra" (położne, pedagodzy, psycholodzy) · 3. "Monitoring na żywo" · 4. "Bogaty program edukacyjny" · 5. "Place zabaw i spacery" · 6. "Dofinansowanie Miasta". Use 3-column layout, two rows.

---

SECTION 6 — PROGRAM EDUKACYJNY
White background. Left: large section text — label "AUTORSKI PROGRAM", H2 "Więcej niż opieka — prawdziwy rozwój." Two short paragraphs about the educational philosophy. Right: icon list grid — 12 program elements with small colored circle icons: Muzyka & Pro Symfonika · Teatr Zielone Nutki · Język angielski · Logopedia · Zajęcia plastyczne · Gimnastyka · Bale okolicznościowe · Małe kino · Sesje fotograficzne · Plac zabaw · Treningi czystości · Wierszyki i piosenki. Bottom CTA link: "Zobacz pełny program →"

---

SECTION 7 — LOKALIZACJE
Sage green background (#EAF4EE). H2: "Dwie lokalizacje — jedna jakość." Two side-by-side location cards (white, rounded 20px, shadow). Each card: location name bold, address, hours (Pon–Pt 7:00–17:30), Google Maps static thumbnail, "Sprawdź trasę →" link + "Zapisz tutaj →" terracotta button. Card 1: Drwęskiego 13, Podolany/Ogrody. Card 2: Wiosenna 6, Grunwald.

---

SECTION 8 — DOFINANSOWANIE CALLOUT
Full-width banner, dark background (#1E1E2E). Left: large bold white text "Skorzystaj z dofinansowania" + smaller text "Program Aktywnie w Żłobku — Urząd Miasta Poznania. Obniż miesięczny koszt opieki." Right: terracotta pill button "Dowiedz się więcej →". Clean, high-contrast, prominent.

---

SECTION 9 — GALERIA PREVIEW
White background. H2: "Zajrzyj do naszego domku." Masonry photo grid — 6–8 photo placeholders in warm-toned rectangular frames, mixed sizes (2 large + 4 small). Below grid: centered button "Zobacz całą galerię →" in outline terracotta style.

---

SECTION 10 — FAQ (5 questions inline)
Pale peach background. Left: H2 "Najczęściej zadawane pytania" + short intro text + "Zadzwoń: 725 119 962" link. Right: 5 accordion items (closed state shown, one open). Questions: "Ile kosztuje pobyt?" · "Od kiedy można zapisać dziecko?" · "Czy jedzenie jest wliczone w cenę?" · "Jak wygląda proces zapisu?" · "Czy są wolne miejsca?" Each accordion: border bottom, question bold 15px, arrow icon right, answer text gray 14px (first one open/expanded).

---

SECTION 11 — FINAL CTA BANNER
Terracotta background (#E8845A). Centered content. Large white heading: "Zapisz dziecko już dziś." Subtext white: "Nabór trwa cały rok. Sprawdź dostępność miejsc." Two white buttons below (filled dark): "Wypełnij formularz zapisu" + "Zadzwoń: 725 119 962".

---

SECTION 12 — FOOTER
Dark background (#1E1E2E). 4-column layout: Col 1: logo + tagline "Ciepłe miejsce dla Twojego maluszka od 2009 roku." + Facebook link. Col 2: Navigation links (O nas / Oferta / Lokalizacje / Rekrutacja / Dofinansowanie / Galeria / FAQ). Col 3: Contact — phone, email, both addresses. Col 4: Legal — Regulamin / Polityka prywatności / Cookies / Praca — wyślij CV / Strefa Rodzica. Bottom bar: copyright text centered, gray, 12px.
```

---

---

## 2. O NAS / NASZE ŻŁOBKI

```
Design the "O nas" (About Us) page for "sobie…Rajski Domek" nursery website. 1440px desktop. Same design system: warm terracotta #E8845A, sage green #5B9E7B, off-white background, Nunito headings, Inter body. Include the same navigation and footer from the homepage.

PAGE SECTIONS:

HERO (subpage style): Terracotta background, 380px height. Left: breadcrumb "Strona główna / O nas" white 12px. Large white heading "O nas — Rajski Domek." Short white subtext "Poznaj nasze żłobki, naszą kadrę i naszą historię." Right: partial child illustration or soft photo.

MISJA: White background. 2-column. Left: section label "NASZA MISJA" terracotta uppercase. H2 "Domowe ciepło w sercu Poznania." 3 short paragraphs about philosophy — individual approach, safety, joyful development. Right: warm child photo, rounded 20px.

HISTORIA TIMELINE: Pale peach background. H2 "Nasza historia." Horizontal timeline with 4 milestones: 2009 "Otwarcie pierwszego żłobka" · 2013 "Rejestracja w Rejestrze Żłobków Miasta Poznania" · 2017 "Otwarcie drugiej lokalizacji" · 2026 "Setki szczęśliwych dzieci". Each milestone: year in terracotta bold, title, short description. Small decorative connecting line between nodes.

KADRA: White background. H2 "Nasz zespół." Lead text: "Wykwalifikowane położne, pedagodzy i psycholodzy dziecięcy." 4-column team card grid. Each card: circular photo placeholder (warm), name bold, role (położna / pedagog / psycholog dziecięcy), short 1-line bio. Cards: white, rounded 16px, soft shadow, sage green accent line at top.

CERTYFIKATY: Sage green background. H2 "Bezpieczeństwo i standardy." 4 horizontal badges in a row, white cards: "Rejestr Żłobków — Miasto Poznań od 2013" · "Certyfikat Sanepidu — Własna Kuchnia" · "Zgodność z Ustawą o opiece do lat 3" · "Ubezpieczenie NNW dla każdego dziecka". Each badge: icon + bold title + short description.

OPINIE RODZICÓW: White background. H2 "Co mówią nasi rodzice." 3-column testimonial cards. Each: large quote mark terracotta, testimonial text italic gray, below: circular avatar + name + "Mama/Tata [imię dziecka]" + 5 gold stars. Soft shadow, white card, rounded 16px.

CTA: Full-width terracotta banner. "Chcesz dowiedzieć się więcej? Zapraszamy na wizytę." Pill button white: "Skontaktuj się z nami →"
```

---

---

## 3. OFERTA & PROGRAM EDUKACYJNY

```
Design the "Oferta" (Services & Educational Program) page for "sobie…Rajski Domek" nursery in Poznań. 1440px desktop. Same design system: warm terracotta, sage green, off-white. Same nav and footer.

PAGE SECTIONS:

HERO (subpage): Sage green background #5B9E7B, 380px. White heading "Oferta & Program Edukacyjny." White subtext "Co zapewniamy Twojemu dziecku każdego dnia."

OPIEKA BASICS: White background. 2-column. Left: H2 "Kompleksowa opieka przez cały rok." Bullet list styled as icon rows: "Dzieci od 20 tygodnia do 3 lat" · "Godziny: Pon–Pt 7:00–17:30" · "Otwarty przez cały rok (z wyjątkiem świąt)" · "Podział na grupy wiekowe" · "Do 10 godzin dziennie". Right: detailed "Co wliczone w cenę?" styled card — list with checkmarks in terracotta: całodzienny pobyt · pełne wyżywienie · wszystkie zajęcia · materiały plastyczne · ubezpieczenie NNW · pieluchy i środki higieny · dostęp do monitoringu.

PROGRAM EDUKACYJNY: Pale peach background. H2 "Autorski program — 12 aktywności." Lead: "Każdy dzień pełen jest muzyki, ruchu, języków i twórczości." Below: 4-column icon card grid (3 rows = 12 cards). Each card: white background, rounded 16px, colored icon circle (terracotta/green/yellow alternating), bold title, 1-line description. Cards: 1. Muzyka & Instrumenty (Pro Symfonika) · 2. Teatr (Zielone Nutki) · 3. Zajęcia ruchowe · 4. Zajęcia plastyczne · 5. Język angielski · 6. Logopedia (gimnastyka buzi i języka) · 7. Wierszyki i piosenki · 8. Treningi czystości · 9. Bale okolicznościowe · 10. Małe kino · 11. Sesje fotograficzne · 12. Plac zabaw i spacery.

WYŻYWIENIE: White background. 2-column. Right: H2 "Domowa kuchnia z certyfikatem Sanepidu." Paragraphs about fresh ingredients, own kitchen, allergen-friendly (vegetarian, vegan, allergies). Left: large warm food/kitchen photo placeholder, rounded 20px. Below text: 4 small badges: "Świeże warzywa" · "Ryby i produkty zbożowe" · "Diety wegetariańskie i wegańskie" · "Obsługujemy alergie pokarmowe".

WSPARCIE RODZICÓW: Sage green background. H2 "Wspieramy rodziców." 2-column icon list. Left column: Rozmowy indywidualne · Spotkania ze specjalistami · Warsztaty dla rodziców · Zebrania grupowe. Right column: Gazetki dydaktyczne · Pomoc pedagogiczna · Codzienne relacje na Facebooku · Dostęp do monitoringu online.

BEZPIECZEŃSTWO: White background. 3 large feature cards in a row. Card 1: "Monitoring na żywo" — opis dostępu dla rodziców po 14 dniach. Card 2: "Upoważniony odbiór" — tylko wskazane osoby odbierają dziecko. Card 3: "Kwalifikowana kadra" — położne, pedagodzy, psycholodzy dziecięcy. Cards: dark background (#1E1E2E), white text, terracotta icon circle at top.

CTA: Terracotta banner. "Przekonany/a? Sprawdź jak zapisać dziecko." Button white: "Rekrutacja i cennik →"
```

---

---

## 4. REKRUTACJA & CENNIK

```
Design the "Rekrutacja i Cennik" (Enrollment & Pricing) page for "sobie…Rajski Domek" nursery. 1440px desktop. Same design system. Same nav and footer.

PAGE SECTIONS:

HERO: Terracotta background, 380px. White heading "Rekrutacja & Cennik." Subtext: "Nabór trwa cały rok — dowiedz się jak zapisać dziecko."

JAK SIĘ ZAPISAĆ — PROCESS: White background. H2 "Zapisanie dziecka w 5 krokach." Horizontal step-by-step flow (5 steps connected by dotted line or arrow). Each step: number in colored circle (terracotta), bold title, short description below. Steps: 1. "Wypełnij formularz Nabór" (nabor.pcss.pl) · 2. "Wygeneruj PDF i wyślij e-mailem" (sobierajskidomek@wp.pl) · 3. "Zadzwoń lub czekaj na kontakt" · 4. "Podpisz umowę + wpłać wpisowe" · 5. "Witamy w Rajskim Domku!". Below: small note in gray italic "Nie wymagamy pieczątek pracodawców."

CENNIK: Pale peach background. H2 "Przejrzysty cennik." One large centered pricing card (white, rounded 24px, shadow). At top: "Miesięczna opłata za pobyt" label. Below: large price area (leave placeholder "— zł/mies." with note "Skontaktuj się po aktualny cennik"). Below price: green checkmark list of everything included: Całodzienny pobyt (do 10h) · Pełne wyżywienie (śniadanie, obiad, podwieczorek) · Wszystkie zajęcia i materiały · Ubezpieczenie NNW · Pieluchy i środki higieny · Dostęp do monitoringu online. Bottom of card: terracotta button "Zapytaj o cennik — zadzwoń". Below card: small gray note about late pickup fee (80 zł/h) and enrollment fee (wpisowe jednorazowe).

DOFINANSOWANIE CALLOUT: Sage green background. 2-column. Left: H2 "Obniż koszt opieki o dofinansowanie." Text about city and government funding programs reducing monthly cost. Right: illustrated money-saving graphic (coin/discount icon) + button "Dowiedz się o dofinansowaniu →" terracotta pill.

NABÓR ELEKTRONICZNY: White background. Centered. H2 "Formularz zapisu online." Short instruction: "Wypełnij formularz w systemie elektronicznym Nabór Miasta Poznania, wygeneruj PDF i wyślij do nas." Large CTA button linking to nabor.pcss.pl (terracotta, pill, full-width on mobile). Below: secondary option "Lub zadzwoń bezpośrednio: 725 119 962".

KONTAKT ZAPISU: Pale peach background. 2-column contact cards. Card 1: phone icon, "725 119 962", "Odpowiadamy Pon–Pt 7:00–17:30". Card 2: email icon, "sobierajskidomek@wp.pl", "Odpowiadamy w ciągu 24h".
```

---

---

## 5. DOFINANSOWANIE

```
Design the "Dofinansowanie" (Funding/Subsidies) page for "sobie…Rajski Domek" nursery. 1440px desktop. Same design system. Same nav and footer.

PAGE SECTIONS:

HERO: Yellow-warm background (#F5C842), 380px. Dark heading "Dofinansowanie do żłobka." Dark subtext "Zmniejsz miesięczny koszt opieki dzięki programom miejskim i rządowym."

INTRO: White background. 2-column. Left: H2 "Nasza placówka jest objęta dofinansowaniem." Short lead paragraph about city co-funding confirming quality. Right: City of Poznań logo placeholder + "Współfinansowane przez Miasto Poznań" badge in sage green.

PROGRAM 1 — MIASTO POZNAŃ: Pale peach background. Section label "DOFINANSOWANIE MIEJSKIE" terracotta. H2 "Program Aktywnie w Żłobku — Urząd Miasta Poznania." Paragraph describing the task: "Realizacja zadań Miasta Poznania w obszarze działalności na rzecz rodziny, macierzyństwa, rodzicielstwa, upowszechniania i ochrony praw dziecka." 3-step process cards (white, horizontal): Krok 1 "Sprawdź warunki" · Krok 2 "Złóż wniosek w UM Poznania" · Krok 3 "Dofinansowanie naliczane automatycznie". CTA link: "Strona Urzędu Miasta Poznania →"

PROGRAM 2 — RZĄDOWE: White background. Section label "PROGRAMY RZĄDOWE". H2 "Inne dostępne formy wsparcia." 2 cards side by side (white, rounded, shadow). Placeholders for current government programs. Note: "Aktualizujemy informacje regularnie — zadzwoń po szczegóły."

JAK UZYSKAĆ: Sage green background. H2 "Jak uzyskać dofinansowanie?" Vertical numbered list (large numbers in terracotta circles): 1. Upewnij się, że dziecko jest zapisane do żłobka objętego programem (jesteśmy!) · 2. Złóż wniosek w odpowiednim urzędzie · 3. Dostarcz wymagane dokumenty · 4. Dofinansowanie pomniejsza Twoją miesięczną opłatę. Below: "Masz pytania? Chętnie pomożemy przejść przez cały proces." + phone + email.

CTA BANNER: Terracotta. "Nie wiesz od czego zacząć? Zadzwoń — mamy doświadczenie z setkami rodzin." Button white: "725 119 962"
```

---

---

## 6. GALERIA

```
Design the "Galeria" (Gallery) page for "sobie…Rajski Domek" nursery. 1440px desktop. Same design system.

PAGE SECTIONS:

HERO: Sage green background, 320px. White heading "Galeria." Subtext "Zajrzyj do naszego codziennego życia."

FILTER TABS: White background. Row of pill-shaped filter buttons: "Wszystkie" (active, terracotta filled) | "Codzienne życie" | "Program edukacyjny" | "Posiłki i kuchnia" | "Plac zabaw" | "Bale i uroczystości" | "Sesje fotograficzne". All tabs: outline style, terracotta border, active = filled.

PHOTO GRID: White background. Masonry/Pinterest-style grid. 3 columns. Mix of: 2 large landscape photos (children playing) + 4 medium square photos + 4 smaller portrait photos = ~10 photo placeholders total. Warm-toned image placeholders. On hover: slight overlay with zoom icon. Rounded corners 12px on all photos.

FACEBOOK CTA: Pale peach background. Centered. Facebook icon large. H3 "Codzienne zdjęcia i relacje na Facebooku." Short text: "Wstawiamy codzienne relacje z prowadzonych zajęć — obserwuj nas!" Pill button: "Przejdź na Facebook →" (dark background, white text).
```

---

---

## 7. KONTAKT

```
Design the "Kontakt" (Contact) page for "sobie…Rajski Domek" nursery. 1440px desktop. Same design system.

PAGE SECTIONS:

HERO: Terracotta background, 320px. White heading "Kontakt." Subtext "Jesteśmy tu dla Ciebie — Pon–Pt 7:00–17:30."

TWO LOCATIONS SIDE BY SIDE: White background. H2 "Nasze lokalizacje." Two large white cards side by side (equal width, rounded 20px, shadow). 

Card 1 — Drwęskiego 13: "sobie…Rajski Domek 1" badge green. Address: ul. Drwęskiego 13, Poznań 60-688. Phone clickable: 725 119 962. Email clickable. Hours row: Pon–Pt · 7:00–17:30. Google Maps embed placeholder (rounded, 240px height). Two buttons below: "Zadzwoń" (terracotta pill) + "Sprawdź trasę" (outline pill).

Card 2 — Wiosenna 6: "sobie…Rajski Domek 2" badge green. Address: ul. Wiosenna 6, Poznań 60-592. Same contact/hours structure. Google Maps embed placeholder. Same buttons.

CONTACT FORM: Pale peach background. 2-column. Left: H2 "Napisz do nas." Short lead text. Contact form: First name + Last name (side by side) · Phone · Email · Dropdown "Wybierz lokalizację" (Drwęskiego 13 / Wiosenna 6) · Textarea "Wiadomość" · RODO checkbox · Submit button terracotta pill "Wyślij wiadomość". Right: decorative child photo or illustration + quick contact callout box (dark background): phone number large, email, hours.

SOCIAL: White background. Centered small section. Facebook icon + "Obserwuj nasze codzienne życie na Facebooku" + button "Polub nas →".
```

---

---

## 8. FAQ — CZĘSTO ZADAWANE PYTANIA

```
Design the "FAQ" page for "sobie…Rajski Domek" nursery. 1440px desktop. Same design system.

PAGE SECTIONS:

HERO: Pale yellow background (#FDF7E8), 320px. Dark heading "Często Zadawane Pytania." Subtext "Odpowiadamy na pytania, które zadają nam rodzice najczęściej."

CATEGORY TABS: White background. Horizontal tab navigation: "Zapis i rekrutacja" | "Pobyt dziecka" | "Opieka i bezpieczeństwo" | "Program i wyżywienie". Active tab: underline + terracotta text. Inactive: gray text.

ACCORDION LIST: White background. Below tabs — full-width accordion list. Each item: 
- Bottom border separator
- Question: bold 16px dark text left · arrow icon right (rotates when open)
- Answer (first item open): gray 14px text, 16px padding, sage green left border

Questions visible (first category active — "Zapis i rekrutacja"):
1. "Czy mogę zarezerwować miejsce z wyprzedzeniem?" [open — with answer text]
2. "Jak wygląda nabór elektroniczny?"
3. "Czy mogę umówić się na wizytę przed zapisem?"
4. "W jakich grupach wiekowych są dzieci?"
5. "Co to jest wpisowe i ile wynosi?"
6. "Jak wygląda pierwszy dzień i adaptacja?"
7. "Co należy przynieść w wyprawce?"
8. "Jakie jedzenie serwujecie? Czy obsługujecie alergie?"
9. "Czy muszę dostarczać środki higieniczne?"
10. "Jakie kwalifikacje ma kadra?"
11. "Czy dzieci są ubezpieczone?"
12. "Jak działa monitoring i kiedy uzyskam dostęp?"
13. "Jaki jest plan dydaktyczny?"

Each question on a separate row. Accordion open state shows answer in soft gray text, with slight terracotta left border.

BOTTOM CTA: Pale peach background. Centered. "Nie znalazłeś odpowiedzi?" H3 + short text. Two contact options side by side: phone card + email card. Both white, rounded, icon + text.
```

---

---

## WSKAZÓWKI KOŃCOWE DLA FIGMA AI

**Aby uzyskać najlepszy wynik:**

1. **Dodaj attachment** — przy każdym prompcie wklej zdjęcie designu Kindori jako wizualny reference
2. **Jeden prompt = jedna strona** — nie wklejaj wszystkich naraz
3. **Po wygenerowaniu** — doprecyzuj pisząc np. "Make the hero section taller" lub "Add more padding between sections"
4. **Spójność** — po wygenerowaniu pierwszej strony, do każdej kolejnej dodaj: "Match the visual style of the previously generated homepage exactly — same typography, colors, spacing, and card style"
5. **Mobile** — po zatwierdzeniu desktop, poproś: "Now create a mobile version (390px) of this page following the same design system, with stacked single-column layout"

---

*Opracowane dla: sobie…Rajski Domek, Poznań | Czerwiec 2026*
