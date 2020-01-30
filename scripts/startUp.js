
//Start-up functions run when page is loaded.
//1. Include the HTML snippets:
includeHTML();
//2. Define global vars and function bindings
//Set up UI state
var menuOpen = false; //Boolean variable to capture the state of the side menu.
var menuOption = null;
var currentPage = document.getElementById("homeDiv");
var currentSubPage = null;
var subMenuOption = null;


document.getElementById("menuBtn").addEventListener("click", toggleSideMenu);
//Associative array maps modes to page titles
// var modeToTitle = {"feedMode": "Activity Feed",
//                    "roundsMode": "My Rounds",
//                    "coursesMode": "Speedgolf Courses",
//                    "loginMode": "Welcome to Speedgolf App"};

var testModeToTitle = {
    "aboutMeModeSubTitles": ['general', 'education', 'livedIn'],
    "familyModeSubTitles": ['dad', 'mom', 'siblings'],
    "hobbiesModeSubTitles": ['computers', 'miniatures', 'camping']
};
// var aboutMeModeSubTitles = ['general', 'education', 'livedIn'];
// var familyModeSubTitles = ['dad', 'mom', 'siblings'];
// var hobbiesModeSubTitles = ['computers', 'miniatures', 'camping'];

//Bind bottomBarBtnClick function to all elements of class bottomBarBtn
var bottomBtns = document.getElementsByClassName("bottomBarBtn");
for (var i = 0; i < bottomBtns.length; ++i) {
    //bottomBtns[i].addEventListener("click", bottomBarBtnClick);
}

var hideOnStartUp = document.getElementsByClassName("hideOnStartUp");
for (i = 0; i < hideOnStartUp.length; i++) {
    hideOnStartUp[i]['style']['display'] = "none";
}

var menuItems = document.getElementsByClassName("menuItem");
for (i = 0; i < menuItems.length; i++) {
    //menuItems[i].addEventListener("click", sideMenuHandler);
}

var bottomItems = document.getElementsByClassName("bottomBarBtn");
for (i = 0; i < bottomItems.length; i++) {
    //bottomItems[i].addEventListener("click", bottomMenuHandler);
}

document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("test1").addEventListener("click", openModal);
    //console.log(document.getElementsByClassName('modal-close'));
});

//Hide bottom bar
document.getElementById("bottomBar").style.display = "none";
document.getElementById('menuBtn').disabled = true;



//document.getElementById("menuBtn").disabled = true;