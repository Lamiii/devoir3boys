window.open("exo-2-3.html");
alert("Cette fenêtre se détruira dans 3s");
closeWindow();
function closeWindow() {
    setTimeout(function() {
    window.close();
    }, 3000);
    }


/*var win = window.open("http://www.google.com");

setTimeout(function () { win.close();}, 3000);*/
/*window.open("exo-2-3.html");
window.close(alert("Cette fenêtre se détruira elle meme en 3secondes"), mymy();)

function mymy() {
  setTimeout(hola(){ alert("Hello"); }, 3000);
}*/