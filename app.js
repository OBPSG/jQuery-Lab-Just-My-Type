$(function () {
    //Add event listners to toggle between hiding/showing the lowercase/uppercase keyboards, depending on whether the shift key is pressed.
    let $lowerCaseKeyboard = $("#keyboard-lower-container");
    let $upperCaseKeyboard = $("#keyboard-upper-container");
    $upperCaseKeyboard.hide();

    let sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate",
    ];
    let sentencePosition = 0;
    let $prompt = $("#sentence");
    let sentence = sentences[0];

    //rather than use a div sliding across the line and fudging with offsets, let's use a span element that will highlight the current character in the prompt.
    //The string for each sentence will esentially be broken up into three parts: the part of the sentence before the current character position, the current character, and the part of the sentence after.
    let $span = $("<span>" + sentence.charAt(0) + "</span>");
    $span.addClass("highlight");
    $prompt.append($span, sentence.substring(1, sentence.length));
    
    $(document).on("keydown", function (event) {
        if (event.key === "Shift") {
            $lowerCaseKeyboard.hide();
            $upperCaseKeyboard.show();
        } else {
            let keyID = event.key.charCodeAt(0);
            let $keyPressed = $("#" + keyID);
            $keyPressed.addClass("key-highlight");

            if(sentencePosition < sentence.length)
            {
                $prompt.empty();
                sentencePosition += 1;
                let $highlightSpan = $("<span>" + sentence.charAt(sentencePosition) + "</span>");
                $highlightSpan.addClass("highlight");
                //console.log($highlightSpan);
                $prompt.append(sentence.substring(0, sentencePosition), $highlightSpan, sentence.substring(sentencePosition + 1, sentence.length));
            }
            
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
