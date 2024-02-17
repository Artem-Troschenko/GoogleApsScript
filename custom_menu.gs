function onOpen() {

  var ui = SpreadsheetApp.getUi();

    ui.createMenu("Custom Menu")
      .addSubMenu(ui.createMenu("menu1")
        .addItem("name_menu","name_your_function")
        .addSeparator()
        .addItem("name_menu2","name_your_function2"))
      .addSubMenu(ui.createMenu("menu2")
        .addItem("name_menu3","name_your_function3")
        .addSeparator()
        .addItem("name_menu4","name_your_function4"))
      .addToUi();
  
}