function salary() {
    let hr = document.getElementById('rh').value;
    let dw = document.getElementById('dw').value;
    let hd = document.getElementById('hd').value;
    let w = 4;
    result = hr * dw * hd * w
    document.getElementById('output').innerText = result;
}