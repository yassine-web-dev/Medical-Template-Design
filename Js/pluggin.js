/* Global Rules */

// Show Clearer Button After Entering Text

function toggleClearButton() {

    'use strict';

    var inputField = document.getElementById("myinput"),
        clearButton = document.getElementById("clearbutton");

    if (inputField.value.length > 0) {

        clearButton.style.display = 'block';

    } else {

        clearButton.style.display = 'none';

    }
}
      
function clearInput() {

    'use strict';

    var inputField = document.getElementById("myinput");

    inputField.value = "";

    toggleClearButton();
}

// Clear Placeholder Onfocus 

var myInputField  = document.getElementById('myinput'),
    myPlaceholder = myInputField.placeholder;

myInputField.onfocus = function () {

    'use strict';

    this.placeholder = '';

}

myInputField.onblur = function () {

    'use strict';

    this.placeholder = myPlaceholder;

}

// Show Random Bar Color Every 2s
var myBar = document.getElementById('og-bar'),
    myColors = [
        'background-color: rgb(224, 103, 43)',
        'background-color: rgb(90, 186, 74)',
        'background-color: rgb(255, 255, 255)'
    ];

function changeColor(myBar, myColors) {

    'use strict';

    setInterval(function () {

        var randomNumber = Math.floor(myColors.length * Math.random());
        myBar.setAttribute('style', myColors[randomNumber]);

        /*
        for (var i = 0; i < myBar.length; i++) {
            myBar[i].setAttribute('style', myColors[randomNumber]);
        }
        */
    }, 2000);
}

changeColor(myBar, myColors);

// Change Color On Active

$('.links li').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

});









