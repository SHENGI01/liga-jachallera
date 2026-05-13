// =====================
// EQUIPOS
// =====================
const equipos = [
  { nombre: "Pampa", escudo: "imagenes/1.png" },
  { nombre: "San Lorenzo", escudo: "imagenes/2.png" },
  { nombre: "Estrella", escudo: "imagenes/3.png" },
  { nombre: "Central Norte", escudo: "imagenes/4.png" },
  { nombre: "Arbol Verde", escudo: "imagenes/5.png" },
  { nombre: "Racing", escudo: "imagenes/6.png" },
  { nombre: "Pampa Vieja", escudo: "imagenes/7.png" },
  { nombre: "Florida", escudo: "imagenes/8.png" },
  { nombre: "Niquivil", escudo: "imagenes/9.png" },
  { nombre: "Peñarol", escudo: "imagenes/10.png" },
  { nombre: "Andacollo", escudo: "imagenes/11.png" },
  { nombre: "El Rincon", escudo: "imagenes/12.png" }
];

function obtenerEquipo(nombre) {
  return equipos.find(e => e.nombre === nombre);
}

// =====================
// PARTIDOS
// =====================
const fechas = {
  fecha1: [
    { local: "Pampa", visitante: "Pampa Vieja", golesL:0, golesV:0 , cancha: "Racing", hora: "14:00", estado: "proximo" },
    { local: "San Lorenzo", visitante: "Andacollo", golesL: 0, golesV: 0, cancha: "Niquivil", hora: "14:00", estado: "proximo" },
    { local: "Central Norte", visitante: "Estrella", golesL: 0, golesV: 0, cancha: "Arbol verde", hora: "14:00",estado: "proximo" },
    { local: "Peñarol", visitante: "Arbol Verde", golesL:0 , golesV: 0, cancha: "Arbol verde", hora: "16:00", estado: "proximo" },
    { local: "Niquivil", visitante: "Florida", golesL: 0, golesV: 0, cancha: "Niquivil", hora: "16:00", estado: "proximo" },
    { local: "El Rincon", visitante: "Racing", golesL:0 , golesV:0 , cancha: "Racing", hora: "16:00",estado: "proximo" }
  ],

  fecha2: [
    { local: "Pampa", visitante: "San Lorenzo", cancha: "A", hora: "16:00",estado: "proximo" },
    { local: "El Rincon", visitante: "Estrella", cancha: "B", hora: "17:00",estado: "proximo" },
    { local: "Central Norte", visitante: "Peñarol", cancha: "C", hora: "18:00",estado: "proximo" },
    { local: "Andacollo", visitante: "Arbol Verde", cancha: "A", hora: "19:00", estado: "proximo"},
    { local: "Niquivil", visitante: "Pampa Vieja", cancha: "B", hora: "20:00",estado: "proximo" },
    { local: "Florida", visitante: "Racing", cancha: "C", hora: "21:00",estado: "proximo" }
  ],

  fecha3: [
    { local: "Pampa", visitante: "Estrella", cancha: "A", hora: "16:00",estado: "proximo" },
    { local: "El Rincon", visitante: "San Lorenzo", cancha: "B", hora: "17:00",estado: "proximo" },
    { local: "Central Norte", visitante: "Arbol Verde", cancha: "C", hora: "18:00",estado: "proximo" },
    { local: "Andacollo", visitante: "Peñarol", cancha: "A", hora: "19:00",estado: "proximo" },
    { local: "Niquivil", visitante: "Racing", cancha: "B", hora: "20:00",estado: "proximo" },
    { local: "Florida", visitante: "Pampa Vieja", cancha: "C", hora: "21:00",estado: "proximo" }
  ]
};

// =====================
// MOSTRAR PARTIDOS
// =====================
const contenedor = document.getElementById("lista-partidos");

function mostrarFecha(fecha) {
  contenedor.innerHTML = "";

  fechas[fecha].forEach(p => {
    const local = obtenerEquipo(p.local);
    const visitante = obtenerEquipo(p.visitante);

    contenedor.innerHTML += `
      <div class="partido-card">
      
    <div class="estado ${p.estado || 'finalizado'}">
      ${(p.estado || 'finalizado').toUpperCase()}
    </div>
    
        <div class="equipos">
          <div class="team">
            <img src="${local.escudo}">
            <span>${local.nombre}</span>
          </div>

          <div class="marcador">
            ${p.golesL ?? "-"} - ${p.golesV ?? "-"}
          </div>

          <div class="team">
            <img src="${visitante.escudo}">
            <span>${visitante.nombre}</span>
          </div>
        </div>

        <div class="info">
          <span>Cancha: ${p.cancha}</span>
          <span>Hora: ${p.hora}</span>
        </div>
      </div>
    `;
  });
}

// =====================
// BOTONES FECHAS
// =====================
const botones = document.querySelectorAll(".fechas span");

botones.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    botones.forEach(b => b.classList.remove("activa"));
    btn.classList.add("activa");

    mostrarFecha("fecha" + (i + 1));
  });
});

// =====================
// TABLA AUTOMÁTICA
// =====================
const tabla = document.getElementById("tabla");

function generarTabla() {
  let stats = {};

  equipos.forEach(e => {
    stats[e.nombre] = {
      equipo: e.nombre,
      gf: 0,
      gc: 0,
      pts: 0
    };
  });

  Object.values(fechas).forEach(lista => {
    lista.forEach(p => {
      if (p.golesL == null || p.golesV == null) return;

      const local = stats[p.local];
      const visitante = stats[p.visitante];

      local.gf += p.golesL;
      local.gc += p.golesV;

      visitante.gf += p.golesV;
      visitante.gc += p.golesL;

      if (p.golesL > p.golesV) local.pts += 3;
      else if (p.golesL < p.golesV) visitante.pts += 3;
      else {
        local.pts += 1;
        visitante.pts += 1;
      }
    });
  });

  const ordenados = Object.values(stats).sort((a, b) => b.pts - a.pts);

  ordenados.forEach(e => {
  const equipo = obtenerEquipo(e.equipo) || { escudo: "" };

  tabla.innerHTML += `
    <div class="fila">
      <span class="equipo-tabla">
        <img src="${equipo.escudo}">
        ${e.equipo}
      </span>
      <span>${e.gf}</span>
      <span>${e.gc}</span>
      <span>${e.pts}</span>
    </div>
  `;
});
}

// =====================
// GOLEADORES
// =====================
const listaGoleadores = document.getElementById("lista-goleadores");

const goleadores = [
  { nombre: "jugador", goles: 5 },
  { nombre: "Jugador 2", goles: 6 },
  { nombre: "Jugador 3", goles: 3 }
];

function cargarGoleadores() {
  listaGoleadores.innerHTML = "";

  goleadores.forEach((g, i) => {
    listaGoleadores.innerHTML += `
      <div class="fila">
        <span>${i + 1}</span>
        <span>${g.nombre}</span>
        <span>${g.goles}</span>
      </div>
    `;
  });
}

// =====================
// NAVEGACIÓN
// =====================
const btnPartidos = document.getElementById("btn-partidos");
const btnPosiciones = document.getElementById("btn-posiciones");
const btnGoleadores = document.getElementById("btn-goleadores");

const secPartidos = document.getElementById("partidos-section");
const secPosiciones = document.getElementById("posiciones-section");
const secGoleadores = document.getElementById("goleadores-section");

function activarBoton(activo) {
  btnPartidos.classList.remove("activo");
  btnPosiciones.classList.remove("activo");
  btnGoleadores.classList.remove("activo");

  activo.classList.add("activo");
}

btnPartidos.onclick = () => {
  secPartidos.style.display = "block";
  secPosiciones.style.display = "none";
  secGoleadores.style.display = "none";
  activarBoton(btnPartidos);
};

btnPosiciones.onclick = () => {
  secPartidos.style.display = "none";
  secPosiciones.style.display = "block";
  secGoleadores.style.display = "none";
  activarBoton(btnPosiciones);
};

btnGoleadores.onclick = () => {
  secPartidos.style.display = "none";
  secPosiciones.style.display = "none";
  secGoleadores.style.display = "block";
  activarBoton(btnGoleadores);
};

// =====================
// INICIO
// =====================
mostrarFecha("fecha1");
generarTabla();
cargarGoleadores();
