function filter1() {

  unhideRows()

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("весь список");
  const data = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();
  //console.log(data)
  const target = ["Слово по которому хотим фильтровать строки в столбце А"]

  const uniqueData = Array.from(new Set(data.flat())).filter(item => !target.includes(item));
  console.log(uniqueData)

  var rows = [];

      for(var i = 0; i < data.length; i++) {
        for (var j = 0; j < uniqueData.length; j++){
          if(data[i][0] == uniqueData[j]) {
            sheet.hideRows(i + 2);
            break;
          }
        }
      }
  
  return rows; 
}

function filter2() {

  unhideRows()

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("весь список");
  const data = sheet.getRange("A2:A" + sheet.getLastRow()).getValues();
  //console.log(data)
  const target = ["Слово по которому хотим фильтровать строки в столбце А"]

  const uniqueData = Array.from(new Set(data.flat())).filter(item => !target.includes(item));
  console.log(uniqueData)

  var rows = [];

      for(var i = 0; i < data.length; i++) {
        for (var j = 0; j < uniqueData.length; j++){
          if(data[i][0] == uniqueData[j]) {
            sheet.hideRows(i + 2);
            break;
          }
        }
      }
  
  return rows; 
}

function unhideRows() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("весь список");

  var rows = sheet.getRange("A:A")
  sheet.unhideRow(rows)

}