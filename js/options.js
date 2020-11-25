const fileInput = document.getElementById('file');

fileInput.addEventListener('change', fileChanged);

function fileChanged(e) {
    let files = e.target.files, reader = new FileReader();
    reader.onload = _imp;
    reader.readAsText(files[0]);
}

function _imp() {
    let _myImportedData = JSON.parse(this.result);
    console.log(_myImportedData)
}