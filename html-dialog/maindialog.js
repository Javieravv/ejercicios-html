// Css para el dialog
const resultDialog = document.getElementById('resultDialog');
const mainDialog = document.getElementById('mainDialog');

mainDialog.addEventListener('close', () => {
    const response = mainDialog.returnValue;
    if (response === "no") {
        resultDialog.innerText = "El usuario ha elegido No";
    } else {
        resultDialog.innerText = "El usuario ha elegido Sí";
    }
})
