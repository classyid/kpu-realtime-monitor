function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Pemantau Data KPU')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getProvinsi() {
  const url = 'https://sirekappilkada-obj-data.kpu.go.id/wilayah/pilkada/pkwkp/0.json';
  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

function getDataPaslon() {
  const url = 'https://sirekappilkada-obj-data.kpu.go.id/pilkada/paslon/pkwkp.json';
  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

function getHasilPemilihan(kodeProvinsi) {
  const url = `https://sirekappilkada-obj-data.kpu.go.id/pilkada/hhcw/pkwkp/${kodeProvinsi}.json`;
  try {
    const response = UrlFetchApp.fetch(url);
    const data = JSON.parse(response.getContentText());
    data.timestamp = new Date().toISOString();
    return data;
  } catch (error) {
    console.error('Error fetching hasil pemilihan:', error);
    return {
      error: true,
      message: 'Gagal mengambil data hasil pemilihan',
      details: error.toString()
    };
  }
}
