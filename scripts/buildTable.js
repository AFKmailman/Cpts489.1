var tID = -1;
var curID = -1;

function deleteRecordHandler() {
    deleteRecord(tID);
    closeDeleteModal();
    buildTable();
}

function findRecord(targetID) {
    console.log("targetid:" + targetID);
    //movieData = JSON.parse(localStorage.getItem(curUser));
    let size = movieData.movieData.length;

    for (let i = 0; i < size; i++) {
        if (movieData.movieData[i].id == targetID) {
            console.log("i:"+i);
            return i;
        }
    }
    return -1;
}

function deleteRecord(arrayLocation) {
    movieData = JSON.parse(localStorage.getItem(curUser));
    if (arrayLocation == -1);
    else {
        movieData.movieData.splice(findRecord(arrayLocation), 1);
        alert("Deleted Entry");
        localStorage.setItem(curUser, JSON.stringify(movieData));
    }
}

function editViewRecordData(a) {
    console.log(a);
    //console.log(this);
    movieData = JSON.parse(localStorage.getItem(curUser));
    //let i = 
    let t = movieData.movieData[findRecord(a)];
    //console.log(t);
    curID = t.id;
    document.getElementById('titleInput').value = "" + t.title;
    document.getElementById('productionCompanyInput').value = "" + t.productionCompany;
    document.getElementById('lengthInput').value = "" + t.length;
    document.getElementById('genreInput').value = "" + t.genre;
    document.getElementById('budgetInput').value = "" + t.budget;
    document.getElementById('releaseDateInput').value = "" + t.releaseDate;
    document.getElementById('submitAddRecordData').onclick = saveEditViewRecordData;
    // document.getElementById('titleInput').innerText = "" + t.title;
    // document.getElementById('productionCompanyInput').innerText = "" + t.productionCompany;
    // document.getElementById('lengthInput').innerText = "" + t.length;
    // document.getElementById('genreInput').innerText = "" + t.genre;
    // document.getElementById('budgetInput').innerText = "" + t.budget;
    // document.getElementById('releaseDateInput').innerText = "" + t.releaseDate;
    document.getElementById('submitAddRecordData').innerText = "Update Data";
    displayRecord();
}

function saveEditViewRecordData(){
    movieData = JSON.parse(localStorage.getItem(curUser));
    let t = movieData.movieData[findRecord(curID)];
    console.log(t);
    t.title = document.getElementById('titleInput').value;
    t.productionCompany = document.getElementById('productionCompanyInput').value;
    t.length = document.getElementById('lengthInput').value;
    t.genre = document.getElementById('genreInput').value;
    t.budget = document.getElementById('budgetInput').value;
    t.releaseDate = document.getElementById('releaseDateInput').value;
    
    localStorage.setItem(curUser, JSON.stringify(movieData));
    buildTable();
    goBack();
}

function testView(a) {
    tID = a;
    console.log(tID);
    document.getElementById('deleteModalDiv').style.display = 'block';
}

function buildTable() {
    
    //find table and fetus deletus it
    let myT = document.getElementById('movieDataTable');
    // myT.tBodies[0].remove(myT.tBodies[0]);
    if(localStorage.getItem(curUser) === null)
    {
        myT.tBodies[0].innerHTML = "no Items in localstorage. please add entries";
        return 0;
    }
    movieData = JSON.parse(localStorage.getItem(curUser));

    let size = movieData.movieData.length;

    var inH = "";
    var t = 0;
    for (var i = 0; i < size; i++){
        t = movieData.movieData[i].id;
        inH += "<tr>\n";
        //inH += "<td>" + movieData.movieData[i].id + "</td>\n";
        inH += "<td>" + movieData.movieData[i].title + "</td>\n";
        inH += "<td>" + movieData.movieData[i].productionCompany + "</td>\n";
        inH += "<td>" + movieData.movieData[i].length + "</td>\n";
        inH += "<td>" + movieData.movieData[i].genre + "</td>\n";
        inH += "<td>" + movieData.movieData[i].budget + "</td>\n";
        inH += "<td>" + movieData.movieData[i].releaseDate + "</td>\n";
        inH += "<td>" + "<button onclick='editViewRecordData(" + t.toString() + ")'>View/Edit</button>" + "</td>\n";
        inH += "<td>" + "<button onclick='testView(" + t.toString() + ")'>Remove</button>" + "</td>\n";
        inH += "</tr>";
    }
    

    myT.tBodies[0].innerHTML = inH;
}