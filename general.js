function infoGeneral() {
  const olSubscriptores = document.querySelector("#info-del-subscriptor");
  const subscriptores = JSON.parse(localStorage.getItem("subscriptores")) || [];

    subscriptores.forEach(subscriptor => {
        olSubscriptores.innerHTML+=`
            <li class="subscriptor">
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
                        ${subscriptor.textos}
                    </li>
                </ul>
            </li>
        `;
    });
}



infoGeneral();