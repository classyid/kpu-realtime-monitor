# 🗳️ KPU Real-Time Vote Monitor

Aplikasi pemantauan real-time hasil pemilihan umum dengan data langsung dari KPU menggunakan Google Apps Script.

## 📊 Fitur Utama

- **Pemantauan Real-time**: Mendapatkan data terkini langsung dari API KPU
- **Visualisasi Interaktif**: Tampilan grafis yang informatif untuk hasil pemilihan
- **Pencarian Cerdas**: Fitur pencarian paslon dengan auto-complete
- **Responsif**: Tampilan yang optimal di semua perangkat
- **Progress Tracking**: Monitoring kemajuan penghitungan suara

## 🚀 Teknologi yang Digunakan

- Google Apps Script
- HTML/JavaScript
- TailwindCSS
- jQuery
- KPU API Integration

## 🛠️ Cara Penggunaan

1. Clone repository ini
2. Deploy sebagai Google Apps Script Web App
3. Sesuaikan pengaturan keamanan di Google Apps Script
4. Publikasikan aplikasi

## ⚙️ Konfigurasi

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Pemantau Data KPU')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

## 📝 API Endpoints yang Digunakan

- Data Provinsi: `https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/0.json`
- Data Paslon: `https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkp.json`
- Hasil Pemilihan: `https://sirekappilkada-obj-data.kpu.go.id/pilkada/hhcw/pkwkp/{kodeProvinsi}.json`

## 🤝 Kontribusi

Kontribusi selalu disambut! Silakan buat pull request atau laporkan issues.

## 📜 Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan Anda.
