// Retrieve remote BrowserWindow
const {BrowserWindow} = require("electron").remote
const $ = require("jquery");

$(document).ready(function() {
    $("#min-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().minimize();
    });
    $("#close-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().close();
    });
});
