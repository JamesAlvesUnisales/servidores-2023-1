function fecharModal() {
  const modal = document.querySelector(".blackBack");
  modal.remove();
}

function salvar(idDia) {
  const divdia = document.getElementById(idDia);

  const aula = document.getElementById("mate");
  const sala = document.getElementById("sala");
  const hora = document.getElementById("hora");

  const novoEvent = document.createElement("div");
  novoEvent.classList.add("aula");
  novoEvent.innerHTML = `
        <span class="mat">${aula.value}</span>
        <span class="sala">${sala.value}</span>
        <span class="hora">${hora.value}</span>
        `;
  divdia.appendChild(novoEvent);
  fecharModal();
}

function callModal(idDia) {
  const divModal = document.createElement("div");
  divModal.classList.add("blackBack");
  divModal.innerHTML = `
      <div class="modal">
        <div class="header">Novo Evento ${idDia}</div>
        <div class="content">
          <input type="text" id="mate" placeholder="materia">
          <input type="text" id="sala" placeholder="sala">
          <input type="text" id="hora"  placeholder="hora">
        </div>
        <div class="navbar">
          <button id="save" onclick="salvar('${idDia}');">Salvar</button>
          <button onclick="fecharModal()">Cancelar</button>
        </div>
      </div>
`;
  // divModal.onclick = fecharModal;

  const ebody = document.body;
  ebody.appendChild(divModal);
}

function createCalendarios(target) {
  const createSemana = () => {
    const divSemana = document.createElement("div");
    divSemana.classList.add("row");
    divSemana.classList.add("row1");
    return divSemana;
  };

  const createDia = (dia) => {
    const divDia = document.createElement("div");
    divDia.classList.add("col");
    divDia.classList.add("col3");
    const idDia = "dayMonth" + dia;
    divDia.id = idDia
    divDia.innerHTML = `
    <div class="dayMonth">${dia} <button onclick="callModal('${idDia}')">+</button></div>

    `;
    return divDia;
  };

  let vDias = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const elemTarget = document.getElementById(target);

  for (let index = 0; index < vDias.length; index++) {
    let cont = 0;
    const divSemana = createSemana();
    while (cont < 7) {
      const divDia = createDia(vDias[index]);
      divSemana.appendChild(divDia);
      cont++; // cont = cont + 1;
      index++;
      if (index + 1 == vDias.length) break;
    }
    elemTarget.appendChild(divSemana);
  }
}
