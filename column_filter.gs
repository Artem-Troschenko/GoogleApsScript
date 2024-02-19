function sum() {

  inhide_columns()
  
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("весь список");

sheet.hideColumns(2, 2);
sheet.hideColumns(5, 3);
sheet.hideColumns(9, 3);
sheet.hideColumns(13, 3);
sheet.hideColumns(17, 3);
sheet.hideColumns(21, 3);
sheet.hideColumns(25, 3);
sheet.hideColumns(29, 3);
sheet.hideColumns(33, 3);
sheet.hideColumns(37, 3);
sheet.hideColumns(41, 3);
sheet.hideColumns(45, 3);
sheet.hideColumns(49);



}

function developer() {
  
  inhide_columns()
  
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("весь список");

sheet.hideColumns(2, 3);
sheet.hideColumns(6, 3);
sheet.hideColumns(10, 3);
sheet.hideColumns(14, 3);
sheet.hideColumns(18, 3);
sheet.hideColumns(22, 3);
sheet.hideColumns(26, 3);
sheet.hideColumns(30, 3);
sheet.hideColumns(34, 3);
sheet.hideColumns(38, 3);
sheet.hideColumns(42, 3);
sheet.hideColumns(46, 3);



}

function inhide_columns() {

const sheet = SpreadsheetApp.getActive();
sheet.getRange("A:AW").activate();
const active_sheet = sheet.getSheetByName("весь список");
let columns = sheet.getActiveRange().getColumn();
let num_columns = sheet.getActiveRange().getNumColumns();

active_sheet.showColumns(columns, num_columns)

}