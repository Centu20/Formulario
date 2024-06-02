function informacion() {
    const nombrerecibido = document.querySelector("#nombres").value;
    const gmailrecibido = document.querySelector("#gmails").value;
    const instagramrecibido = document.querySelector("#recomendaciones").value;
    const mensajesrecibido = document.querySelector("#textos").value;

    const subscriptores = JSON.parse( localStorage.getItem("subscriptores") ) || [];

    subscriptores.push({
        nombre: nombrerecibido,
        gmail: gmailrecibido,
        instagram: instagramrecibido,
        mensaje: mensajesrecibido
    });

    localStorage.setItem("subscriptores", JSON.stringify(subscriptores));
}