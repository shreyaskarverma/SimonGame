
var start = false
var original = [];
var user = [];
var count = -1;
var level = 0;

$("html").keypress(function () {
    if (start == false) {
        $("h1").text("Game has begun");
        start = true;
        beginRound();
    }
});

$("html").click(function (e) {
    if (start === true) {
        if (e.target.id === "1" || e.target.id === "2" || e.target.id === "3" || e.target.id === "4") {
            user.push(Number(e.target.id));
            count++;
            console.log(e.target.id);
            $("#" + e.target.id).addClass("pressed");
            setTimeout(function () {
                $("#" + e.target.id).removeClass("pressed");
            }, 100);
            setTimeout(checkPattern, 2000);
        }
    }
});

function beginRound() {
    level++;
    $("h2").text("Level " + level);
    user = [];
    count = -1;
    showPattern();
}

function showPattern() {
    let a = Math.ceil((Math.random() * 4));
    original.push(a);
    let val = "#".concat(a.toString());
    //console.log(val);
    $(val).addClass("pressed");
    setTimeout(function () {
        $(val).removeClass("pressed");
    }, 100);
}

function checkPattern() {
    if (user[count] === original[count]) {
        if (count === original.length - 1) {
            beginRound();
        }
    }
    else {
        $("body").addClass("game-over");
        $("h1").text("GAME OVER!!");
        setTimeout(function () {
            $("body").removeClass("game-over");
            $("h1").text("Press Key to Restart Game");
        }, 1000);
        start = false;
        original = [];
        level = 0;
        //$("h2").text("Level "+ level);
    }
}






/*$("html").keypress(beginGame);

function beginGame() {
    var arr = [];
    var check = 1;

    for (var index = 0; index <= 9; index++) {
        (function () {
            let a = playRound(arr);
            if (a === false) {
                check = -1;
            }
        })();
        if (check === -1)
            break;
    }
    if (check === -1) {
        $("#level-title").text("Game Over");
        $(body).addClass("game-over");
        setTimeout("$(body).removeClass('game-over');", 100);
    }
}

function playRound(arr) {
    //console.log(arr);
    var a = Math.ceil(Math.random() * 4);
    arr.push(a);
    var val = "#".concat(a.toString());
    $(val).addClass("pressed");
    setTimeout(function () {
        $(val).removeClass("pressed");
    }, 100);
    var l = arr.length;
    let set = 1;
    for (let i = 0; i < l; i++) {
        let temp = arr[i];
        $("#1").click(function () {
            //console.log(i);
            $("#1").addClass("pressed");
            setTimeout("$('#1').removeClass('pressed');", 100);
            if (temp !== 1) {
                set = -1;
            }
        });
        if (set === -1)
            break;
        $("#2").click(function () {
            $("#2").addClass("pressed");
            setTimeout("$('#2').removeClass('pressed')", 100);
            if (temp !== 2) {
                set = -1;
            }
        });
        if (set === -1)
            break;
        $("#3").click(function () {
            $("#3").addClass("pressed");
            setTimeout("$('#3').removeClass('pressed')", 100);
            if (temp !== 3) {
                set = -1;
            }
        });
        if (set === -1)
            break;
        $("#4").click(function () {
            $("#4").addClass("pressed");
            setTimeout("$('#4').removeClass('pressed')", 100);
            //console.log(temp);
            if (temp !== 4) {
                set = -1;
            }
        });
        if (set === -1)
            break;

    }
    if (set === -1)
        return false;
    else
        return true;
}
/*$(".container").click(function(e)
                      {
    if(e.target.id == 1)
    {
        console.log("green");
    }
});*/