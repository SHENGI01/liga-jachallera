// =====================
// DATOS POR CATEGORÍA
// =====================

const categorias = {

  primera: {

    equipos: [
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
    ],

    fechas: {

      fecha1: [
        { local: "Pampa", visitante: "Pampa Vieja",golesL: 2, golesV: 0, cancha: "racing", hora: "14:00", estado: "finalizado" },
        { local: "San Lorenzo", visitante: "Andacollo",golesL: 0, golesV: 0,cancha: "niquivil", hora: "14:00", estado: "finalizado" },
        { local: "Central Norte", visitante: "Estrella",golesL: 0, golesV: 1, cancha: "arbol verde", hora: "14:00", estado: "finalizado" },
        { local: "Peñarol", visitante: "Arbol Verde",golesL: 1, golesV: 2,cancha: "arbol verde", hora: "16:30", estado: "finalizado" },
        { local: "Niquivil", visitante: "Florida",golesL: 1, golesV: 2,cancha: "niquivil", hora: "16:30", estado: "finalizado" },
        { local: "El Rincon", visitante: "Racing",golesL: 2, golesV: 2, cancha: "racing", hora: "16:30", estado: "finalizado" }
      ],
    fecha2: [
        { local: "Pampa", visitante: "Andacollo",cancha: "pampa", hora: "16:30", estado: "proximo" },
        { local: "Peñarol", visitante: "Racing",cancha: "pampa", hora: "14:00", estado: "proximo" },
        { local: "San Lorenzo", visitante: "Niquivil",cancha: "florida", hora: "14:00", estado: "proximo" },
        { local: "Florida", visitante: "Arbol Verde",cancha: "florida", hora: "16:30", estado: "proximo" },
        { local: "Pampa Vieja", visitante: "Central Norte",cancha: "estrella", hora: "14:00", estado: "proximo" },
        { local: "El Rincon", visitante: "Estrella",cancha: "estrella", hora: "16:30", estado: "proximo" }
      ]

    },

    goleadores: [
      { nombre: "Gaston Diaz", goles: 1 },
      { nombre: "Michel Garcia", goles: 1 },
      { nombre: "Marcos Luna", goles: 1 },
      { nombre: "Lucas Suesa", goles: 1 },
      { nombre: "Lucas Nievas", goles: 1 },
   { nombre: "Eduardo Felis", goles: 1 },
     { nombre: "Jere Neira", goles: 1 },
   { nombre: "Brian Juares", goles: 1 },
{ nombre: "Nicolas Paez", goles: 1 },
{ nombre: "Marcelo Perez", goles: 1 },
{ nombre: "Gaston Diaz", goles: 1 },
{ nombre: "Erick Perez", goles: 1 }
    ]

  },

  segunda: {

    equipos: [
      { nombre: "San Martin", escudo: "imagenes/1b.png" },
      { nombre: "La Frontera", escudo: "imagenes/2b.png" },
      { nombre: "San Roque", escudo: "imagenes/3b.png" },
      { nombre: "Independiente", escudo: "imagenes/4b.png" },
      { nombre: "San Blas", escudo: "imagenes/5b.png" },
      { nombre: "Otra Banda", escudo: "imagenes/6b.png" },
      { nombre: "Huaco", escudo: "imagenes/7b.png" },
      { nombre: "Boca del Medano", escudo: "imagenes/8b.png" },
      { nombre: "Calle Varas", escudo: "imagenes/9b.png" },
      { nombre: "La Falda", escudo: "imagenes/10b.png" }
    ],

    fechas: {

      fecha1: [
        { local: "La Frontera", visitante: "Independiente",cancha: "pampa",golesL: 0, golesV: 1, hora: "16:30", estado: "finalizado" },
        { local: "San Martin", visitante: "Boca del Medano", golesL: 2, golesV: 1, cancha: "pampa", hora: "14:00", estado: "finalizado" },
        { local: "La Falda", visitante: "Otra Banda",golesL: 2, golesV: 1,cancha: "la falda", hora: "16:30", estado: "finalizado" },
        { local: "San Blas", visitante: "San Roque",golesL: 0, golesV: 0, cancha: "la falda", hora: "14:00", estado: "finalizado" },
        { local: "Calle Varas", visitante: "Huaco",cancha: "libre", hora: "libre", estado: "libres" }
      ],
 fecha2: [
        { local: "San Martin", visitante: "Otra Banda",golesL: 0, golesV: 4,cancha: "huaco",hora: "14:00", estado: "vivo" },
        { local: "Huaco", visitante: "San Blas", cancha: "huaco", hora: "16:30", estado: "proximo" },
        { local: "Calle Varas", visitante: "La Frontera",golesL: 2, golesV: 2,cancha: "hungaros", hora: "14:00", estado: "vivo" },
        { local: "Independiente", visitante: "La Falda",cancha: "hungaros", hora: "16:30", estado: "proximo" },
        { local: "San Roque", visitante: "Boca Del Medano",cancha: "libre", hora: "libre", estado: "libres" }
      ],
     
    },

    goleadores: [
{ nombre: "  Cristian Pereira", goles: 2 },
      { nombre: "Yamil Muñoz", goles: 1 },
      { nombre: "Sergio Carbajal", goles: 1 },
      { nombre: "Cristian Bordon", goles: 1 },
      { nombre: "Emanuel Cabanay", goles: 1 },
      { nombre: "Bautista Carrizo", goles: 1 },
      { nombre: "Facundo Balmaceda", goles: 1 },
      { nombre: "Elias Aciar", goles: 1 },
      { nombre: "  Emiliano Diaz", goles: 1 }
    ]

  },

  femenino: {

    equipos: [
      { nombre: "Pampa", escudo: "imagenes/1.png" },
      { nombre: "Andacollo", escudo: "imagenes/11.png" },
      { nombre: "Peñarol", escudo: "imagenes/10.png" },
      { nombre: "Florida", escudo: "imagenes/8.png" },
      { nombre: "Estrella", escudo: "imagenes/3.png" },
      { nombre: "Racing", escudo: "imagenes/6.png" },
      { nombre: "Independiente", escudo: "imagenes/4b.png" }
    ],

    fechas: {

      fecha1: [
        { local: "Pampa", visitante: "Andacollo", cancha: "D", hora: "15:00", estado: "proximo" },
        { local: "Peñarol", visitante: "Florida", cancha: "E", hora: "17:00", estado: "proximo" },
        { local: "Estrella", visitante: "Racing", cancha: "E", hora: "17:00", estado: "proximo" }
      ]

    },

    goleadores: [
      { nombre: "jugadora1", goles: 0 },
      { nombre: "jugadora2", goles: 0 }
    ]

  }

};

let categoriaActual = "primera";

// =====================
// ELEMENTOS
// =====================

const tabla = document.getElementById("tabla");
const contenedor = document.getElementById("lista-partidos");
const listaGoleadores = document.getElementById("lista-goleadores");

// =====================
// OBTENER EQUIPO
// =====================

function obtenerEquipo(nombre) {

  return categorias[categoriaActual].equipos.find(
    e => e.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()
  );

}

// =====================
// MOSTRAR PARTIDOS
// =====================

function mostrarFecha(fecha) {

  contenedor.innerHTML = "";

  const fechas = categorias[categoriaActual].fechas;

  if (!fechas[fecha]) return;

  fechas[fecha].forEach(p => {

    const local = obtenerEquipo(p.local);
    const visitante = obtenerEquipo(p.visitante);

    if (!local || !visitante) return;

    contenedor.innerHTML += `
      <div class="partido-card">

        <div class="estado ${p.estado}">
          ${p.estado.toUpperCase()}
        </div>

        <div class="equipos">

          <div class="team">
            <img src="${local.escudo}">
            <span>${local.nombre}</span>
          </div>

          <div class="marcador">
            ${p.golesL} - ${p.golesV}
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
// TABLA
// =====================

function generarTabla() {

  tabla.innerHTML = "";

  const equipos = categorias[categoriaActual].equipos;
  const fechas = categorias[categoriaActual].fechas;

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

      const local = stats[p.local];
      const visitante = stats[p.visitante];

     if (p.golesL == null || p.golesV == null) return;

      local.gf += p.golesL;
      local.gc += p.golesV;

      visitante.gf += p.golesV;
      visitante.gc += p.golesL;

      if (p.golesL > p.golesV) {
        local.pts += 3;
      }
      else if (p.golesV > p.golesL) {
        visitante.pts += 3;
      }
      else {
        local.pts += 1;
        visitante.pts += 1;
      }

    });

  });

  const ordenados = Object.values(stats).sort(
    (a, b) => b.pts - a.pts
  );

  ordenados.forEach(e => {

    const equipo = obtenerEquipo(e.equipo);

    tabla.innerHTML += `
      <div class="fila">

        <span class="equipo-tabla">
          <img src="${equipo.escudo}">
          ${equipo.nombre}
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

function cargarGoleadores() {

  listaGoleadores.innerHTML = "";

  categorias[categoriaActual].goleadores.forEach((g, i) => {

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
// CAMBIAR CATEGORÍA
// =====================

const botonesCategorias = document.querySelectorAll(".MAS-btn");

botonesCategorias.forEach(btn => {

  btn.addEventListener("click", () => {

    botonesCategorias.forEach(b =>
      b.classList.remove("activa-cat")
    );

    btn.classList.add("activa-cat");

    categoriaActual = btn.dataset.cat;

    generarTabla();
    cargarGoleadores();
    mostrarFecha("fecha2");

  });

});

// =====================
// BOTONES FECHAS
// =====================

const botonesFechas = document.querySelectorAll(".fechas span");

botonesFechas.forEach((btn, i) => {

  btn.addEventListener("click", () => {

    botonesFechas.forEach(b =>
      b.classList.remove("activa")
    );

    btn.classList.add("activa");

    mostrarFecha("fecha" + (i + 1));

  });

});

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

mostrarFecha("fecha2");
generarTabla();
cargarGoleadores();
