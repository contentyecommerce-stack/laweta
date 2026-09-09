require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const buildSite = require('./build');

const app = express();
const PORT = process.env.PORT || 4050;

// Always ensure index.html is generated
if (!fs.existsSync(path.join(__dirname, 'index.html'))) {
  buildSite();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Disable caching so local preview always serves the latest edits
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Serve static assets and root
app.use(express.static(path.join(__dirname), {
  etag: false,
  maxAge: 0,
  setHeaders: (res) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  }
}));

// Endpoint for contact / quote requests
app.post('/api/quote-request', (req, res) => {
  const { name, phone, car, route, description } = req.body;
  console.log(`[NOWE ZGŁOSZENIE LAWETA24] ${new Date().toISOString()}:`, { name, phone, car, route, description });
  res.json({ success: true, message: 'Zgłoszenie przyjęte. Dyspozytor skontaktuje się telefonicznie w ciągu 5 minut.' });
});

// Fallback to index.html for root
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`  LAWETA24 POZNAŃ - Serwer uruchomiony!`);
  console.log(`  Adres: http://localhost:${PORT}`);
  console.log(`  Baza: os. Piastowskie 85, 61-161 Poznań`);
  console.log(`  Telefon alarmowy: +48 692 167 081`);
  console.log(`====================================================`);
});
