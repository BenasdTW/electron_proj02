// Retrieve remote BrowserWindow
const {BrowserWindow} = require("electron").remote
const $ = require("jquery");

$(document).ready(function() {
    $("#close-btn").click(() => {
        BrowserWindow.getFocusedWindow().close();
    }); 
});
