/**
 * Add these helpers to the existing Onboarding School Google Apps Script.
 * They store trainee users including PIN values.
 * Keep this spreadsheet shared only with trusted administrators.
 *
 * Expected web app actions:
 * - GET  action=users-list
 * - POST action=users-save, users=[{ id, name, departmentId, roleId, status, pin }]
 */
const USERS_SHEET_NAME = 'Users';
const USER_HEADERS = ['id', 'name', 'departmentId', 'roleId', 'status', 'pin', 'updatedAt'];

function getUsersSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(USERS_SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(USERS_SHEET_NAME);
  const currentHeaders = sheet.getRange(1, 1, 1, USER_HEADERS.length).getValues()[0];
  const needsHeader = USER_HEADERS.some((header, index) => currentHeaders[index] !== header);
  if (needsHeader) sheet.getRange(1, 1, 1, USER_HEADERS.length).setValues([USER_HEADERS]);
  return sheet;
}

function listUsers_() {
  const sheet = getUsersSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow - 1, USER_HEADERS.length).getValues()
    .filter(row => row[0] || row[1])
    .map(row => ({
      id: String(row[0] || ''),
      name: String(row[1] || ''),
      departmentId: String(row[2] || ''),
      roleId: String(row[3] || ''),
      status: String(row[4] || ''),
      pin: String(row[5] || ''),
      updatedAt: row[6] ? new Date(row[6]).toISOString() : '',
    }));
}

function saveUsers_(users) {
  const sheet = getUsersSheet_();
  const now = new Date();
  const rows = (users || [])
    .filter(user => user && user.name)
    .map(user => [
      String(user.id || ''),
      String(user.name || ''),
      String(user.departmentId || user.department || ''),
      String(user.roleId || user.role || ''),
      String(user.status || '훈련 중'),
      String(user.pin || '0000'),
      now,
    ]);
  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, USER_HEADERS.length).clearContent();
  }
  if (rows.length) sheet.getRange(2, 1, rows.length, USER_HEADERS.length).setValues(rows);
  return rows.length;
}

function handleUsersAction_(action, payload) {
  if (action === 'users-list') {
    return { ok: true, users: listUsers_() };
  }
  if (action === 'users-save') {
    return { ok: true, count: saveUsers_(payload.users || []) };
  }
  return null;
}