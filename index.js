var currentInputTimeVal = "";
var currentTimeIndex = 4;

$(document).ready(function () {
    
    $('.numBtn').on('click', function() {
        var currentButtonVal = $(this).text();
        currentInputTimeVal = $("#timeInput").val();

        if (currentInputTimeVal == "") {
            currentInputTimeVal = $("#timeInput").attr("placeholder");
        }
        t = currentInputTimeVal.split("");
        console.log(currentTimeIndex);
        switch (currentTimeIndex) {
            case 4:
                t[4] = currentButtonVal;
                currentTimeIndex--;
                outputTimeText(t);
                break;
            case 3:
                t[3] = t[4];
                t[4] = currentButtonVal;
                if (combineTwoNumber(t[3], t[4]) > 59) {
                    t[3] = 0;
                }

                currentTimeIndex--;
                outputTimeText(t);
                break;
            case 2:
                t[1] = t[3];
                t[3] = t[4];
                t[4] = currentButtonVal;
                currentTimeIndex--;
                outputTimeText(t);
                break;
            case 1:
                t[0] = t[1];
                t[1] = t[3];
                t[3] = t[4];
                t[4] = currentButtonVal;
                currentTimeIndex--;
                outputTimeText(t);
                break;
            default:
                $("#timeInput").val("00:00");
                currentTimeIndex = 4;
        }
    });

    $('#backSpaceButton').on('click', function() {
        currentInputTimeVal = $("#timeInput").val();

        if (currentInputTimeVal == "") {
            currentInputTimeVal = $("#timeInput").attr("placeholder");
        }

        t = currentInputTimeVal.split("");
        console.log(currentTimeIndex);

        switch (currentTimeIndex) {
            case 3:
                t[4] = 0;
                currentTimeIndex++;
                outputTimeText(t);
                break;
            case 2:
                t[4] = t[3];
                t[3] = t[1];
                currentTimeIndex++;
                outputTimeText(t);
                break;
            case 1:
                t[3] = t[1];
                t[1] = t[0];
                t[0] = 0;
                currentTimeIndex++;
                outputTimeText(t);
                break;
            case 0:
                t[4] = t[3];
                t[3] = t[1];
                t[1] = t[0];
                t[0] = 0;
                currentTimeIndex++;
                outputTimeText(t);
                break;
            // default:
            //     $("#timeInput").val("00:00");
            //     currentTimeIndex = 4;
        }
    });
});

function combineTwoNumber(a, b) {
    return parseInt(a + b);
}

function outputTimeText(t) {
    var res = "";
    t.forEach(element => {
        res += element;
    });
    $("#timeInput").val(res);
}