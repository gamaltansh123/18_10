const SHEET_NAME = 'Messages';

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Message', 'Page']);
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  setup();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);

  const p = e && e.parameter ? e.parameter : {};
  const name = String(p.name || '').trim().slice(0, 80);
  const message = String(p.message || '').trim().slice(0, 1000);
  const page = String(p.page || '').trim().slice(0, 500);

  if (!name || !message) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false, error:'Missing name or message'}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([new Date(), name, message, page]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
