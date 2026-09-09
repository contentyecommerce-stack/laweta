# Laweta Poznań 24h – Całodobowa Pomoc Drogowa i Holowanie

Profesjonalna strona internetowa dla firmy pomocy drogowej w Poznaniu. Zoptymalizowana pod kątem maksymalnej konwersji telefonicznej (Google Ads / SEO), błyskawicznego czasu ładowania (<200ms) oraz autentycznego, czytelnego designu dostosowanego do osób w sytuacji awaryjnej na drodze.

## 🚀 Wdrożenie na Vercel

Strona jest w 100% przygotowana pod bezproblemowy deployment na platformie **Vercel**.

1. Zaloguj się na [Vercel.com](https://vercel.com).
2. Kliknij **Add New...** -> **Project**.
3. Zaimportuj repozytorium GitHub: `contentyecommerce-stack/laweta`.
4. Vercel automatycznie wykryje konfigurację z pliku `vercel.json`:
   - **Build Command**: `node build.js`
   - **Output Directory**: `.` (katalog główny ze statycznymi plikami i zoptymalizowanymi zasobami)
5. Kliknij **Deploy**. Strona zostanie opublikowana w kilka sekund pod adresem Vercel, a po podpięciu domeny własnej (np. z certyfikatem SSL Let's Encrypt) będzie gotowa do kampanii reklamowej.

## 📞 Dane kontaktowe i parametry wdrożenia
- **Telefon alarmowy**: `+48 692 167 081` (692 167 081)
- **Baza operacyjna**: `os. Piastowskie 85, 61-161 Poznań`
- **Czas dojazdu**: `15–25 minut na terenie Poznania i obwodnicy S11/A2`
- **Cennik**:
  - Transport w granicach Poznania: od 150 zł
  - Transport poza miastem: 1,50 zł / km (w zależności od masy auta, do uzgodnienia telefonicznego)
  - Holowanie z OC sprawcy: 0 zł

## 🎯 Gotowość pod Google Ads

W kodzie wdrożono elementy kluczowe pod kampanie Google Ads w branży pomocy drogowej:
1. **Śledzenie kliknięć w numer telefonu**:
   - Wszystkie linki `tel:692167081` posiadają zintegrowany skrypt nasłuchujący `onclick`, który przesyła zdarzenie konwersji do `gtag('event', 'conversion', ...)` oraz `dataLayer.push({ event: 'call_click' })`.
2. **Polityka prywatności**:
   - Dostępna pod `/polityka-prywatnosci.html`, wymagana przez regulamin Google Ads do akceptacji kampanii.
3. **Prawdziwy adres fizyczny w stopce i nagłówku**:
   - Umożliwia weryfikację firmy w Google Ads oraz połączenie z profilem Google Moja Firma (rozszerzenie lokalizacji).
4. **Wydajność Core Web Vitals**:
   - Czysty CSS i lekki HTML bez ciężkich bibliotek JS gwarantują Quality Score (Wynik Jakości strony docelowej) na poziomie 9–10/10.

## 🛠️ Uruchomienie lokalne

```bash
# Instalacja zależności
npm install

# Zbudowanie index.html
npm run build

# Uruchomienie serwera lokalnego
npm run dev
# Strona dostępna pod http://localhost:4050
```
