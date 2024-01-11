function importRange() {

let sourseSS = SpreadsheetApp.getActive().getSheetByName("Бюджет путешествия");
let sourceRange = sourseSS.getRange("A:J");
let sourceValues = sourceRange.getValues();
    let sBG = sourceRange.getBackgrounds();
    let sFC = sourceRange.getFontColors();
    let sFF = sourceRange.getFontFamilies();
    let sFL = sourceRange.getFontLines();
    let sFFa = sourceRange.getFontFamilies();
    let sFSz = sourceRange.getFontSizes();
    let sFSt = sourceRange.getFontStyles();
    let sFW = sourceRange.getFontWeights();
    let sHA = sourceRange.getHorizontalAlignments();
    let sVA = sourceRange.getVerticalAlignments();
    let sNF = sourceRange.getNumberFormats();
    let sWR = sourceRange.getWraps();

let destinationSS = SpreadsheetApp.openById("183e8wEMkTdy258JU_A8GSgUoD0kwKMarMPSbsFk89vg").getSheetByName("Путешествие");
let destinationRange = destinationSS.getRange("A:J");
let row = destinationRange.getRow();
let column = destinationRange.getColumn();
let rows = sourceValues.length;
let columns = sourceValues[0].length;
destinationSS.getRange(row, column, rows, columns).setValues(sourceValues)
    .setBackgrounds(sBG)
    .setFontColors(sFC)
    .setFontFamilies(sFF)
    .setFontLines(sFL)
    .setFontFamilies(sFFa)
    .setFontSizes(sFSz)
    .setFontStyles(sFSt)
    .setFontWeights(sFW)
    .setHorizontalAlignments(sHA)
    .setVerticalAlignments(sVA)
    .setNumberFormats(sNF)
    .setWraps(sWR);

    var merged = sourceRange.getMergedRanges();
    merged.forEach( range => console.log(range.getA1Notation()));
    var rowOffset = destinationRange.getRow()-sourceRange.getRow();
    var columnOffset = destinationRange.getColumn()-sourceRange.getColumn();
    for( var i=0; i<merged.length; i++ ) {
      row = merged[i].getRow()+rowOffset;
      col = merged[i].getColumn()+columnOffset;
      rows = merged[i].getNumRows();
      cols = merged[i].getNumColumns();
      destinationSS.getRange(row,col,rows,cols).merge();
    }
  
}
