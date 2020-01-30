function toggleSideMenu() {
    let t = document.getElementById("sideMenu");
    //console.log("menuOpen: " + menuOpen);
    if(menuOpen) {
        t["style"]["width"] = "0px";
        menuOpen = false;
    }
    else {
        t['style']['width'] = "250px";
        menuOpen = true;
    }
}

function sideMenuHandler() {
    //console.log("sideMenuHandler");
    //console.log(this);
    if(menuOption != null) menuOption.classList.remove("menuItemSelected");
    else document.getElementById("bottomBar").style.display = "block";
    menuOption = this;
    this.classList.add("menuItemSelected");
    currentPage['style']['display'] = "none";
    currentPage = document.getElementById(this.id + "Div");
    currentPage['style']['display'] = "block";
    if(currentSubPage != null) currentSubPage.style.display = "none";
    //console.log(this.id+'SubMenuItem');
    let t = document.getElementsByClassName(this.id+'SubMenuItem');
    t[0].style.display = "block";
    currentSubPage = t[0];
    //subMenuOption.classList.add('disabled');
    let s = document.getElementsByClassName('bottomBarBtn');
    for(let i = 0; i < s.length; i++){
        s[i].id = testModeToTitle[this.id+'ModeSubTitles'][i];
        s[i].innerHTML = "<span style='display: block; scroll-padding-top: 3px;' class='nonMenuItem fab fa-grunt'></span><spanstyle='display: block; font-size: small;'>" + testModeToTitle[this.id+'ModeSubTitles'][i] + "</span>";
    }
    if(subMenuOption != null) subMenuOption.classList.remove('disabled');
    subMenuOption = s[0];
    subMenuOption.classList.add('disabled');
}

function bottomMenuHandler() {
    subMenuOption.classList.remove('disabled');
    currentSubPage.style.display = "none";
    currentSubPage = document.getElementById(this.id+'Div');
    currentSubPage.style.display = "block";
    subMenuOption = document.getElementById(this.id);
    subMenuOption.classList.add('disabled');
    console.log(this);
}
