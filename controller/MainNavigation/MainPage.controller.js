sap.ui.define([
    "sap/m/Button",
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/library",
    "sap/ui/core/mvc/Controller"
], function (Button, Dialog, Text, mobileLibrary, Controller) {
    "use strict";
    
    var ButtonType = mobileLibrary.ButtonType;

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.MainPage", {
        onMessageDialogPress: function () {
            var oDialog = new Dialog({
                title: 'Default Message',
                contentWidth: '400px',
                type: 'Message',
                content: new Text({
                    text: 'Fix size'
                }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: 'OK',
                    press: function () {
                        oDialog.close();
                    }
                }),
                afterClose: function () {
                    oDialog.destroy();
                }
            });

            oDialog.open();
        }
    });


    return Controller;
});