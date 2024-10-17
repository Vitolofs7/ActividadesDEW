// 1. Abre una página about:blank en una nueva ventana/pestaña (tamaño 200x100px)
function openBlankWindow() {
  let blankWindow = window.open(
    "about:blank",
    "_blank",
    "width=200,height=100"
  );
  debugger;
}

// 2. Abre una nueva ventana llamada "MsgWindow" y escribe "some text" en ella
function openMsgWindow() {
  let msgWindow = window.open("", "MsgWindow", "width=300,height=200");
  msgWindow.document.write("some text");
  debugger;
}

// 3. Abre una nueva ventana llamada "MsgWindow" nuevamente y escribe "some other text" en ella
function openMsgWindowAgain() {
  let msgWindow = window.open("", "MsgWindow", "width=300,height=200");
  msgWindow.document.write("mi primo");
  debugger;
}

// 4. Reemplaza la ventana actual con una nueva ventana
function replaceWindow() {
  window.location.replace("https://www.realmadrid.com/");
  debugger;
}

// 5. Abre una nueva ventana y controla su apariencia
let customWindow = window.open(
  "",
  "",
  "toolbar=yes,scrollbars=yes,resizable=yes,width=200,height=400,left=200,top=100"
);
debugger; // Pausa aquí

// 6. Abre una nueva ventana y ciérrala después
function openAndCloseWindow() {
  let tempWindow = window.open("", "", "width=200,height=100");
  debugger;
  tempWindow.close();
  debugger;
}

// 7. Utiliza la propiedad opener
function useOpener() {
  let newWindow = window.open("", "", "width=200,height=100");
  newWindow.opener.document.body.innerHTML += "<p>some window text</p>";
  debugger;
}

// 8. Crea un iframe, carga iframe.html y escribe "some text" en él
function createIframeWithText() {
  let iframe = document.createElement("iframe");
  iframe.src = "iframe.html";
  document.body.appendChild(iframe);
  iframe.onload = function () {
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.body.innerHTML = "some text";
    debugger;
  };
}

// 9. Crea un iframe, carga iframe.html en él y accede a su contenido
function createIframeAndAccessContent() {
  let iframe = document.createElement("iframe");
  iframe.src = "iframe.html";
  document.body.appendChild(iframe);
  iframe.onload = function () {
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    console.log("Contenido del iframe:", iframeDoc.body.innerHTML);
    debugger;
  };
}

// Ejecuta cada tarea
openBlankWindow();
openMsgWindow();
openMsgWindowAgain();
replaceWindow();
openCustomWindow();
openAndCloseWindow();
useOpener();
createIframeWithText();
createIframeAndAccessContent();
