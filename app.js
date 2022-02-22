$(function () {
    //Add event listners to toggle between hiding/showing the lowercase/uppercase keyboards, depending on whether the shift key is pressed.
    let $lowerCaseKeyboard = $("#keyboard-lower-container");
    let $upperCaseKeyboard = $("#keyboard-upper-container");
    $upperCaseKeyboard.hide();

    let sentenceArr = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate",
    ];
    let check = "✔️"
    let X = "❌"
    let sentencePosition = 0;
    let $prompt = $("#sentence");
    let sentence = sentenceArr[0];
    let sentencesIndex = 0;
    let expectedChar = sentence.charAt(0);
    let $target = $("#target-letter");
    $target.text(expectedChar);

    //Rather than use a div sliding across the line and fudging with offsets, let's use a span element that will highlight the current character in the prompt.
    //The string for each sentence will esentially be broken up into three parts: the part of the sentence before the current character position, the current character, and the part of the sentence after.
    let $span = $("<span>" + sentence.charAt(0) + "</span>");
    $span.addClass("highlight");
    $prompt.append($span, sentence.substring(1, sentence.length));

    $(document).on("keydown", function (event) {
        if (event.key === "Shift") {
            $lowerCaseKeyboard.hide();
            $upperCaseKeyboard.show();
        } else {
            sentencePosition += 1;
            //Highlight the current key that was pressed on the keyboard map
            let keyID = event.key.charCodeAt(0);
            let $keyPressed = $("#" + keyID);
            $keyPressed.addClass("key-highlight");

            if (sentencePosition < sentence.length) {
                //TODO: Check if the input character is equal to the expected one, and update the feedback accordingly

                expectedChar = sentence.charAt(sentencePosition);
                $target.text(expectedChar);
                $prompt.empty();
                let $highlightSpan = $("<span>" + sentence.charAt(sentencePosition) + "</span>");
                $highlightSpan.addClass("highlight");
                //console.log($highlightSpan);
                $prompt.append(sentence.substring(0, sentencePosition), $highlightSpan, sentence.substring(sentencePosition + 1, sentence.length));
            }
            //We've reached the end of the current sentence, so display the next one, or if that was the last sentence, end the test.
            else {
                if (sentencesIndex < sentenceArr.length - 1) {
                    sentencesIndex += 1;
                    sentence = sentenceArr[sentencesIndex];
                    sentencePosition = 0;
                    //TODO: clear the feedback div
                    //Display the next sentence
                    $prompt.empty();
                    let $highlightSpan = $("<span>" + sentence.charAt(sentencePosition) + "</span>");
                    $highlightSpan.addClass("highlight");
                    //console.log($highlightSpan);
                    $prompt.append(sentence.substring(0, sentencePosition), $highlightSpan, sentence.substring(sentencePosition + 1, sentence.length));
                }

            }

        }
    });
    $(document).on("keyup", function (event) {
        if (event.key === "Shift") {
            $lowerCaseKeyboard.show();
            $upperCaseKeyboard.hide();
        } else {
            //Un-highlight the key that was pressed
            let keyID = event.key.charCodeAt(0);
            let $keyPressed = $("#" + keyID);
            $keyPressed.removeClass("key-highlight");
        }
    });

});