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

function displayRecord(){
    document.getElementById('dataTableDiv').style.display = 'none';
    document.getElementById('addRecordDiv').style.display = 'block';
    document.getElementById('bottomBar').style.display = 'none';
    document.getElementById('menuBtn').disabled = true;
    document.getElementById('sideMenu').style.width = '0px';
}

function goBack() {
    document.getElementById('dataTableDiv').style.display = 'block';
    document.getElementById('addRecordDiv').style.display = 'none';
    document.getElementById('bottomBar').style.display = 'block';
    document.getElementById('menuBtn').disabled = false;
}

function underConstruction() {
    alert("page is currently under construction");
}

function mode1() {
    document.getElementById('mode').setAttribute( "onClick", "javascript: displayRecord();" );
    document.getElementById('mode').innerHTML = "<span class='fas fa-angle-right'>&nbsp;Add Data&nbsp;</span>";
}
function mode2() {
    document.getElementById('mode').setAttribute( "onClick", "javascript: underConstruction();" );
    document.getElementById('mode').innerHTML = "<span class='fas fa-angle-right'>&nbsp;Under Construction&nbsp;</span>";
}

function saveAddRecordData() {
    let data = {
        "title":"" + document.getElementById('titleInput').value,
        "productionCompany":"" + document.getElementById('productionCompanyInput').value,
        "length":"" + document.getElementById('lengthInput').value,
        "genre":"" + document.getElementById('genreInput').value,
        "budget":"" + document.getElementById('budgetInput').value,
        "releaseDate":"" + document.getElementById('releaseDateInput').value
    }
    console.log(data);
    localStorage.setItem(curUser, JSON.stringify(data));
    alert("Data Saved")
    document.getElementById('titleInput').value = "";
    document.getElementById('productionCompanyInput').value = "";
    document.getElementById('lengthInput').value = "";
    document.getElementById('genreInput').value = "";
    document.getElementById('budgetInput').value = "";
    document.getElementById('releaseDateInput').value = "";
    goBack();
}