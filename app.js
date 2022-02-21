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
    });
    $(document).on("keyup", function (event) {
        if (event.key === "Shift") {
            $lowerCaseKeyboard.show();
            $upperCaseKeyboard.hide();
        }
    });
});
