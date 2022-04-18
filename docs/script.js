let a = 0;

function enviar() {
    if (document.getElementById("three").checked == true) {
        a++;
    }
    if (document.getElementById("one_").checked == true) {
        a++;
    }
    if (document.getElementById("two__").checked == true) {
        a++;
    }
    document.getElementById("puntos").innerHTML = "<h2>" + a + "/3</h2>";
    a = 0;
}