function onEdit(e) {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = e.range;
  var column = range.getColumn();
  var row = range.getRow();
  var value =range.getValue();

//внимание, число "999" необходимо заменить на номер столбца, в котором находится чекбокс, столбец A = 1, столбец B = 2 и т.д.

    if(column == 999 && value == true){
      var targetRange = sheet.getRange(row, 1, 1, sheet.getLastColumn());
      var targetRangeValues = targetRange.getValues();
      sheet.insertRowsAfter(row, 1);
      sheet.getRange(row + 1, 1, 1, sheet.getLastColumn()).setValues(targetRangeValues);
      sheet.getRange(row, 999).setValue(false);
      sheet.getRange(row + 1, 999).setValue(false);
      sheet.getRange(row + 1, 1, 1, sheet.getLastColumn()).setBackgroundRGB(0, 0, 255)

    }


}