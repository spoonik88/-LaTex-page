var ggbApp1 = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showToolBarHelp: false,
        showMenuBar: false,
        filename: "t2.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp1.inject("ggbElement_1");
});

var ggbApp2 = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        filename: "cylindrical_surface.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp2.inject("ggbElement_2");
});

var ggbApp_generatrix = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        filename: "generatrix.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp_generatrix.inject("ggbElement_generatrix");
});

var ggbApp3 = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        filename: "t3.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp3.inject("ggbElement_3");
});

var ggbApp4 = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        filename: "cylinder.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp4.inject("ggbElement_4");
});

var ggbApp5 = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        filename: "t4.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp5.inject("ggbElement_5");
});
var ggbApp6 = new GGBApplet({
        appName: "classic",
        width: 1200,
        height: 800,
        showToolBar: false,
        showAlgebraInput: false,
        showMenuBar: false,
        filename: "quest.ggb",
        showResetIcon: true,
        enableRightClick: false,
        showFullscreenButton: true,
        id: "firstApplet"
    },
    true
);
window.addEventListener("load", function() {
    ggbApp6.inject("ggbElement_6");
});
//  var right_answer = document.getElementById("right_answer");
//  var right_answer = document.getElementById("right_check");
//  window.addEventListener("chec", function() {

// });

function fn_right_check() {
    var right_answer = document.getElementById("right_answer").checked;
    var right_check = document.getElementById("right_check");
    var quest_answer_one = document.querySelectorAll(".error_check")[0].checked;
    var quest_answer_two = document.querySelectorAll(".error_check")[1].checked;
    var quest_answer_three = document.querySelectorAll(".error_check")[2].checked;

    if (right_answer == true & quest_answer_one != true & quest_answer_two != true & quest_answer_three != true) {
        right_check.className = "right_quest_answer";
    } else {
        right_check.className = "error";
    }
}