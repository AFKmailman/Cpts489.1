function openModal() {
    console.log('in openModal');
    document.getElementById("aboutModalDiv").style.display = 'block';
    document.getElementsByClassName("modal-close")[0].onclick = closeModal;
}

function closeModal() {
    document.getElementById('aboutModalDiv').style.display = 'none';
}

function closeDeleteModal() {
    document.getElementById('deleteModalDiv').style.display = 'none';
    tID = -1;
}