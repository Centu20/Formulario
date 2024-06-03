function infoGeneral() {
  const olSubscriptores = document.querySelector("#info-del-subscriptor");
  const subscriptores = JSON.parse(localStorage.getItem("subscriptores")) || [];

    subscriptores.forEach(subscriptor => {
        olSubscriptores.innerHTML+=`
            <li class="subscriptor">
                <ul>
                    <li>
                        ${subscriptor.nombre}
                    </li>
                    <li>
                        ${subscriptor.gmail}
                    </li>
                    <li>
                        ${subscriptor.instagram}
                    </li>
                    <li>
                        ${subscriptor.mensaje}
                    </li>
                </ul>
            </li>
        `;
    });
}



infoGeneral();