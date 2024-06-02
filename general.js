function infoGeneral() {
  const olSubscriptores = document.querySelector("#infoGeneral");
  const subscriptores = JSON.parse(localStorage.getItem("subscriptores")) || [];

  subscriptores.forEach(subscriptor => {
    olSubscriptores.innerHTML+=`
        <li>
            <ul>
                <li>
                    ${subscriptor.nombres}
                </li>
                <li>
                    ${subscriptor.gmails}
                </li>
                <li>
                    ${subscriptor.recomendaciones}
                </li>
                <li>
                    ${subscriptores.textos}
                </li>
            </ul>
        </li>
    `;
  });
}



infoGeneral();