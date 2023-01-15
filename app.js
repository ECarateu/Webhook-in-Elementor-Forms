/* By: Eloisa Caratéu */

function doGet(e) {
    return HtmlService.createHtmlOutput('Request Received');
}
function doPost(e) {

    if (typeof e !== 'undefined')
        var parametros = e.parameter; //Get all values from Elementor form
   
    var myspreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('MyspreadName'); //Select the Spreadsheet by name

    var endline = Math.max(myspreadsheet.getLastRow(), 1); //Define end line
  
    var currentline = endline + 1; // Define current line

    myspreadsheet.insertRowAfter(endline); // Insert date after  last line filled


    // form data 
    var name = parametros['Name']; // label from form
    var email = parametros['E-mail'];
    var phone = parametros['Phone'];
    
   myspreadsheet.getRange(currentline, 1).setValue(name); // set value in Spreadsheet 
   myspreadsheet.getRange(currentline, 2).setValue(email);
   myspreadsheet.getRange(currentline, 3).setValue(phone);

   SpreadsheetApp.flush();  // Applies all pending Spreadsheet changes

  return HtmlService.createHtmlOutput('Request Received');

}