$(function () {
    //Add event listners to toggle between hiding/showing the lowercase/uppercase keyboards, depending on whether the shift key is pressed.
    let $lowerCaseKeyboard = $("#keyboard-lower-container");
    let $upperCaseKeyboard = $("#keyboard-upper-container");
    $upperCaseKeyboard.hide();

    $(document).on("keydown", function (event) {
        if (event.key === "Shift") {
            $lowerCaseKeyboard.hide();
            $upperCaseKeyboard.show();
        }
        else {
            let keyID = event.key.charCodeAt(0);
            let $keyPressed = $("#" + keyID);
            $keyPressed.addClass("key-highlight");
        }

    });
    $(document).on("keyup", function (event) {
        if (event.key === "Shift") {
            $lowerCaseKeyboard.show();
            $upperCaseKeyboard.hide();
        } else {
            let keyID = event.key.charCodeAt(0);
            let $keyPressed = $("#" + keyID);
            $keyPressed.removeClass("key-highlight");
        }

    });
});
