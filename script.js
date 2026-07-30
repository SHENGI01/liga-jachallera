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
        { local: "Pampa", visitante: "Andacollo",golesL: 1, golesV: 1,cancha: "pampa", hora: "16:30", estado: "finalizado" },
        { local: "Peñarol", visitante: "Racing",golesL: 3, golesV: 2,cancha: "pampa", hora: "14:00", estado: "finalizado" },
        { local: "San Lorenzo", visitante: "Niquivil",golesL: 3, golesV: 1,cancha: "florida", hora: "14:00", estado: "finalizado" },
        { local: "Florida", visitante: "Arbol Verde",golesL: 1, golesV: 3,cancha: "florida", hora: "16:30", estado: "finalizado" },
        { local: "Pampa Vieja", visitante: "Central Norte",golesL: 0, golesV: 3,cancha: "estrella", hora: "14:00", estado: "finalizado" },
        { local: "El Rincon", visitante: "Estrella",golesL: 0, golesV: 0,cancha: "estrella", hora: "16:30", estado: "finalizado" }
      ],
       fecha3: [
        { local: "San Lorenzo", visitante: "Florida",golesL: 1, golesV: 0,cancha:"san lorenzo", hora: "16:30", estado: "finalizado" },
        { local: "Peñarol", visitante: "Estrella",golesL: 1, golesV: 1,cancha: "peñarol", hora: "16:30", estado: "finalizado" },
        { local: "Central Norte", visitante: "Andacollo",golesL: 1, golesV: 1, cancha: "andacollo", hora: "16:30", estado: "finalizado" },
        { local: "Racing", visitante: "Arbol Verde",golesL: 2, golesV: 3, cancha:"andacollo", hora: "14:00", estado: "finalizado" },
        { local: "Pampa Vieja", visitante: "El Rincon",golesL: 1, golesV: 1, cancha: "san lorenzo", hora: "14:00", estado: "finalizado" },
        { local: "Pampa", visitante: "Niquivil",golesL: 1, golesV: 2, cancha:"peñarol", hora: "14:00", estado: "finalizado" }
      ],
      fecha4: [
        { local: "Pampa", visitante: "Florida",golesL: 2, golesV: 1,cancha:"pampa", hora: "16:30", estado: "finalizado" },
        { local: "Peñarol", visitante: "Pampa Vieja",golesL: 1, golesV: 0,cancha: "pampa vieja", hora: "16:30", estado: "finalizado" },
        { local: "El Rincon", visitante: "Andacollo",golesL: 3, golesV: 0,cancha: "san lorenzo", hora: "16:30", estado: "finalizado" },
        { local: "San Lorenzo", visitante: "Arbol Verde",golesL: 2, golesV: 6,cancha: "pampa", hora: "14:00", estado: "finalizado" },
        { local: "Estrella", visitante: "Racing",golesL: 3, golesV: 2,cancha: "san lorenzo", hora: "14:00", estado: "finalizado" },
        { local: "Central Norte", visitante: "Niquivil",golesL: 0, golesV: 2,cancha: "pampa vieja", hora: "14:00", estado: "finalizado" }
      ],
      fecha5: [
        { local: "Arbol Verde", visitante: "Estrella",golesL: 1, golesV: 4,cancha:"arbol verde", hora: "16:30", estado: "finalizado" },
        { local: "Peñarol", visitante: "Andacollo",golesL: 1, golesV: 0,cancha: "andacollo", hora: "16:30", estado: "finalizado" },
        { local: "San Lorenzo", visitante: "Pampa",golesL: 2, golesV: 1,cancha: "san lorenzo", hora: "16:30", estado: "finalizado" },
        { local: "Racing", visitante: "Pampa Vieja",golesL: 1, golesV: 0,cancha: "andacollo", hora: "14:00", estado: "finalizado" },
        { local: "El Rincon", visitante: "Niquivil",golesL: 2, golesV: 0,cancha: "san lorenzo", hora: "14:00", estado: "finalizado" },
        { local: "Central Norte", visitante: "Florida",golesL: 2, golesV: 2,cancha: "arbor verde", hora: "14:00", estado: "finalizado" }
      ],
      fecha6: [
        { local: "Central Norte", visitante: "San Lorenzo",golesL: 1, golesV: 2,cancha:"peñarol", hora: "16:30", estado: "finalizado" },
        { local: "Peñarol", visitante: "Niquivil",golesL: 1, golesV: 0,cancha: "niquivil", hora: "16:30", estado: "finalizado" },
        { local: "Estrella", visitante: "Pampa Vieja",golesL: 1, golesV: 1,cancha: "pampa vieja", hora: "16:30", estado: "finalizado" },
        { local: "Arbol Verde", visitante: "Pampa",golesL: 2, golesV: 0,cancha: "niquivil", hora: "14:00", estado: "finalizado" },
        { local: "El Rincon", visitante: "Florida",golesL: 3, golesV: 3,cancha: "peñarol", hora: "14:00", estado: "finalizado" },
        { local: "Andacollo", visitante: "Racing",golesL: 1, golesV: 2,cancha: "pampa vieja", hora: "14:00", estado: "finalizado" }
      ],
      fecha7: [
        { local: "Andacollo", visitante: "Estrella",golesL: 0, golesV: 1,cancha:"andacollo", hora:"16:30", estado: "finalizado" },
        { local: "Peñarol", visitante: "Florida",golesL: 2, golesV: 0,cancha: "peñarol", hora:"16:30", estado: "finalizado" },
        { local: "San Lorenzo", visitante: "El Rincon",golesL: 3, golesV: 0, cancha: "san lorenzo", hora:"16:30", estado: "finalizado" },
        { local: "Arbol Verde", visitante: "Pampa Vieja",golesL: 3, golesV: 2,cancha:"andacollo", hora: "14.00", estado: "finalizado" },
        { local: "Racing", visitante: "Niquivil",golesL: 3, golesV: 1,cancha:"san lorenzo", hora: "14:00", estado: "finalizado" },
        { local: "Central Norte", visitante: "Pampa",golesL: 0, golesV: 3,cancha:"peñarol", hora: "14:00", estado: "finalizado" }
      ],
      fecha8: [
        { local: "Arbol Verde", visitante: "Central Norte",golesL: 1, golesV: 0,cancha: "pampa", hora: "14:00", estado: "finalizado" },
        { local: "San Lorenzo", visitante: "Peñarol",golesL: 1, golesV: 1,cancha: "florida", hora: "14:00", estado: "finalizado" },
        { local: "Andacollo", visitante: "Pampa Vieja",golesL: 2, golesV: 1,cancha: "niquivil", hora: "14:00", estado: "finalizado" },
        { local: "Pampa", visitante: "El Rincon",golesL: 2, golesV:2,cancha:"pampa", hora: "16:30", estado: "suspendido" },
        { local: "Racing", visitante: "Florida",golesL: 2, golesV: 1,cancha: "florida", hora: "16:30", estado: "finalizado" },
        { local: "Niquivil", visitante: "Estrella",golesL: 0, golesV: 2,cancha: "niquivil", hora: "16:30", estado: "finalizado" },
        
      ],
      fecha9: [
        { local: "Arbol Verde", visitante: "Andacollo",cancha:"arbol verde", hora: "16:30", estado: "proximo" },
        { local: "Estrella", visitante: "Florida",cancha: "estrella", hora: "16:30", estado: "proximo" },
        { local: "Peñarol", visitante: "Pampa",cancha: "peñarol", hora: "16:30", estado: "proximo" },
        { local: "Niquivil", visitante: "Pampa Vieja",cancha: "arbol verde", hora: "14:00", estado: "proximo" },
        { local: "Racing", visitante: "San Lorenzo",cancha: "peñarol", hora: "14:00", estado: "proximo" },
        { local: "Central Norte", visitante: "El Rincon",cancha: "estrella", hora: "14:00", estado: "proximo" }
      ],
      fecha10: [
        { local: "Central Norte", visitante: "Peñarol",cancha:"sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Estrella", visitante: "San Lorenzo",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Florida", visitante: "Pampa Vieja",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "El Rincon", visitante: "Arbol Verde",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Racing", visitante: "Pampa",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Niquivil", visitante: "Andacollo",cancha: "sin definir", hora: "sin definir", estado: "proximo" }
      ],
      fecha11: [
        { local: "Florida", visitante: "Andacollo",cancha:"sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Racing", visitante: "Central Norte",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Peñarol", visitante: "El Rincon",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Niquivil", visitante: "Arbol Verde",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Pampa Vieja", visitante: "San Lorenzo",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Estrella", visitante: "Pampa",cancha: "sin definir", hora: "sin definir", estado: "proximo" }
      ],
      fecha12: [
        { local: "Arbol Verde", visitante: "Peñarol",cancha:"sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Niquivil", visitante: "Florida",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Estrella", visitante: "Central Norte",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "El Rincon", visitante: "Racing",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Pampa Vieja", visitante: "Pampa",cancha: "sin definir", hora: "sin definir", estado: "proximo" },
        { local: "Andacollo", visitante: "San Lorenzo",cancha: "sin definir", hora: "sin definir", estado: "proximo" }
      ]

    },

    goleadores: [
      { nombre: "Gaston Diaz", goles: 1, equipo: "El Rincon" },
      { nombre: "Alejo Santana", goles: 4, equipo: "El Rincon" },
      { nombre: " Javier Oro", goles: 3, equipo:"Central Norte" },
       { nombre: " Nestor Celan", goles: 9, equipo:"Arbol Verde" },
       { nombre: " Federico Gomez", goles: 1, equipo:"Arbol Verde" },
         { nombre: " Enzo Diaz", goles: 3, equipo:"Arbol Verde" },
      { nombre: "Michel Garcia", goles: 4, equipo: "Pampa" },
      { nombre: "Ezequiel Olivares", goles: 1, equipo:"Central Norte" },
      { nombre: "Bruno Abalo", goles: 2, equipo:"San Lorenzo" },
      { nombre: "Gaston Dogonik", goles: 1, equipo:"San Lorenzo" },
      { nombre: "Marcos Luna", goles: 1, equipo: "Pampa" },
      { nombre: "Lucas Suesa", goles: 1, equipo: "Arbol Verde" },
        { nombre: "Jose Femenia", goles: 1, equipo: "Arbol Verde" },
      { nombre: "Lucas Nievas", goles: 2, equipo: "Arbol Verde" },
      {nombre: "Eduardo Felis", goles: 5, equipo: "Peñarol" },
        { nombre: "Ramon Avila", goles: 1, equipo:"Estrella" },
        { nombre: "Ivan Santana", goles: 2, equipo:"Estrella" },
      { nombre: "Jere Neira", goles: 1, equipo:"Niquivil" },
      { nombre: "Brian Juares", goles: 4, equipo: "Florida" },
      { nombre: "Nicolas Paez", goles: 1, equipo: "Florida" },
      { nombre: "Marcelo Perez", goles: 1, equipo: "Pampa" },
      { nombre: "Erick Perez", goles: 5, equipo: "Racing" },
      { nombre: "Leonel Jofre", goles: 6, equipo: "Racing" },
      { nombre: "Ever Ortiz", goles: 2, equipo:"Niquivil" },
      { nombre: "Lisandro Almazan", goles: 7, equipo:"San Lorenzo" },
      { nombre: "Leonel Jofre", goles: 2, equipo: "Racing" },
      { nombre: "Marcelo Balmaceda", goles: 2, equipo:"Estrella" },
      { nombre: "Santiago Castillo", goles: 1, equipo:"Andacollo" },
      { nombre: "Matias Montaño", goles: 2, equipo: "El Rincon" },
      {nombre: "Gonzalo Pasten", goles: 3, equipo: "Peñarol" },
      {nombre: "Osvaldo Maza", goles: 1, equipo: "Niquivil" },
       { nombre: "Matias Vega", goles: 1, equipo: "Pampa" },
       { nombre: "Ali Casivar", goles: 1, equipo: "Pampa" },
     { nombre: "Franco Manrique", goles: 1, equipo:"Central Norte" },
      { nombre: "Santiago Tapia", goles: 1, equipo: "Florida" },
      { nombre: "Bastian Pereyra", goles: 1, equipo:"Estrella" },
      { nombre: "Diego Solares", goles: 2, equipo:"Estrella" },
      { nombre: "Santiago Riveros", goles: 3, equipo: "El Rincon" },
      { nombre: "Maximiliano Sanchez", goles: 1, equipo:"San Lorenzo" },
      { nombre: "Angel Abalo", goles: 1, equipo:"San Lorenzo" },
       { nombre: "Juan Jofre", goles: 2, equipo: "El Rincon" },
{ nombre: "Franco Santana", goles: 3, equipo: "Pampa" },
      { nombre: "Diego Toledo", goles: 1, equipo:"San Lorenzo" },
       { nombre: "Thiago Toledo", goles: 1, equipo: "Racing" },
       { nombre: "Franco Fuentes", goles: 1, equipo: "Racing" },
       { nombre: "Leandro Esquivel", goles: 1, equipo: "Florida" },
      { nombre: "Cesar Sanchez", goles: 1, equipo:"Andacollo" },
      { nombre: "Mateo Castro", goles: 1, equipo:"Andacollo" },
       { nombre: "Diego Solares", goles: 1, equipo:"Estrella" },
       { nombre: "Leonardo Levis", goles: 1, equipo:"Estrella" },
       { nombre: "Luciano Alvarez", goles: 1, equipo:"Pampa Vieja" },
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
        { local: "San Martin", visitante: "Otra Banda",golesL: 1, golesV: 6,cancha: "huaco",hora: "14:00", estado: "finalizado" },
        { local: "Huaco", visitante: "San Blas",golesL: 1, golesV: 0, cancha: "huaco", hora: "16:30", estado: "finalizado" },
        { local: "Calle Varas", visitante: "La Frontera",golesL: 2, golesV: 3,cancha: "hungaros", hora: "14:00", estado: "finalizado" },
        { local: "Independiente", visitante: "La Falda",golesL: 1, golesV: 2,cancha: "hungaros", hora: "16:30", estado: "finalizado" },
        { local: "San Roque", visitante: "Boca del Medano",cancha: "libre", hora: "libre", estado: "libres" }
      ],
         fecha3: [
        { local: "San Martin", visitante: "San Roque",golesL: 1, golesV: 1, cancha: "san martin", hora: "16:30", estado: "finalizado" },
        { local: "Huaco", visitante: "La Falda",golesL: 1, golesV: 0, cancha: "peñarol", hora: "14:00", estado: "finalizado" },
        { local: "Boca del Medano", visitante: "La Frontera",golesL: 1, golesV: 7, cancha: "san martin", hora: "14:00", estado: "finalizado" },
        { local: "Independiente", visitante: "Calle Varas", golesL: 2, golesV: 0,cancha: "peñarol", hora: "16:30", estado: "finalizado" },
        { local: "San Blas", visitante: "Otra Banda", cancha: "libre", hora: "libre", estado: "libres" }
           ],
       fecha4: [
        { local: "La Falda", visitante: "San Roque",golesL: 3, golesV: 0, cancha: "la falda", hora: "14:00", estado: "finalizado" },
        { local: "Huaco", visitante: "Independiente",golesL: 0, golesV: 1, cancha: "hungaros", hora: "14:00", estado: "finalizado" },
        { local: "Boca del Medano", visitante: "San Blas",golesL: 0, golesV: 3,cancha: "hungaros", hora: "16:30", estado: "finalizado" },
        { local: "Otra Banda", visitante: "Calle Varas",golesL: 2, golesV: 2, cancha: " la falda", hora: "16:30", estado: "finalizado" },
        { local: "San Martin", visitante: "La Frontera", cancha: "libre", hora: "libre", estado: "libres" }  
      ],
        fecha5: [
        { local: "Calle Varas", visitante: "San Roque",golesL: 3, golesV: 3,cancha: "huaco", hora: "14:00", estado: "finalizado" },
        { local: "Otra Banda", visitante: "Independiente",golesL: 0, golesV: 1,cancha: "hungaros", hora: "16:30", estado: "finalizado" },
        { local: "San Martin", visitante: "San Blas",golesL: 1, golesV: 2,cancha: "hungaros", hora: "14:00", estado: "finalizado" },
        { local: "Huaco", visitante: "La Frontera",golesL: 1, golesV: 1,cancha: " huaco", hora: "16:30", estado: "finalizado" },
        { local: "La Falda", visitante: "Boca del Medano", cancha: "libre", hora: "libre", estado: "libres" } 
      ],
       fecha6: [
        { local: "Calle Varas", visitante: "Boca del Medano",golesL: 4, golesV: 3,cancha: "san martin", hora: "14:00", estado: "finalizado" },
        { local: "San Martin", visitante: "La Falda",golesL: 0, golesV: 0,cancha: "san martin", hora: "16:30", estado: "finalizado" },
        { local: "Otra Banda", visitante: "Huaco",golesL: 1, golesV: 0,cancha: "san blas", hora: "14:00", estado: "finalizado" },
        { local: "San Blas", visitante: "La Frontera",golesL: 1, golesV: 2,cancha: " san blas", hora: "16:30", estado: "finalizado" },
        { local: "San Roque", visitante: "Independiente", cancha: "libre", hora: "libre", estado: "libres" } 
      ],
        fecha7: [
        { local: "Independiente", visitante: "San Roque",golesL: 4, golesV: 0,cancha: "pampa", hora: "14:00", estado: "finalizado" },
        { local: "San Martin", visitante: "La Frontera",golesL: 1, golesV: 3,cancha: "pampa", hora: "16:30", estado: "finalizado" },
        { local: "La Falda", visitante: "Boca del Medano",golesL: 4, golesV: 0,cancha: "la falda", hora: "14:00", estado: "finalizado" },
        { local: "San Blas", visitante: "Otra Banda",golesL: 2, golesV: 2,cancha: " la falda", hora: "16:30", estado: "finalizado" },
        { local: "Calle Varas", visitante: "Huaco",cancha: "libre", hora: "libre", estado: "libres" } 
      ],
       fecha8: [
        { local: "Otra Banda", visitante: "San Roque",golesL: 2, golesV: 3,cancha: "la falda", hora: "14:00", estado: "finalizado" },
        { local: "La Falda", visitante: "La Frontera",golesL: 2, golesV: 2,cancha: "la falda", hora: "16:30", estado: "finalizado" },
        { local: "Huaco", visitante: "Boca del Medano",golesL: 2, golesV: 1,cancha: "peñarol", hora: "14:00", estado: "finalizado" },
        { local: "San Blas", visitante: "Calle Varas",golesL: 3, golesV: 3,cancha: " peñarol", hora: "16:30", estado: "finalizado" },
        { local: "San Martin", visitante: "Independiente",cancha: "libre", hora: "libre", estado: "libres" } 
      ],
        fecha9: [
        { local: "Otra Banda", visitante: "La Frontera",golesL: 1, golesV: 1,cancha: "arbol verde", hora: "14:00", estado: "finalizado" },
        { local: "Boca del Medano", visitante: "Independiente",golesL: 2, golesV: 4,cancha: "arbol verde", hora: "16:30", estado: "finalizado" },
        { local: "Calle Varas", visitante: "San Martin",golesL: 1, golesV: 0,cancha: "huaco", hora: "14:00", estado: "finalizado" },
        { local: "Huaco", visitante: "San Roque",golesL: 3, golesV: 1,cancha: " huaco", hora: "16:30", estado: "finalizado" },
        { local: "La Falda", visitante: "San Blas",cancha: "libre", hora: "libre", estado: "libres" } 
      ],
       fecha10: [
        { local: "La Falda", visitante: "Calle Varas",cancha: "san blas", hora: "14:00", estado: "proximo" },
        { local: "San Blas", visitante: "Independiente",cancha: "san blas", hora: "16:30", estado: "proximo" },
        { local: "La Frontera", visitante: "San Roque",cancha: "san martin", hora: "14:00", estado: "proximo" },
        { local: "Huaco", visitante: "San Martin",cancha: " san martin", hora: "16:30", estado: "proximo" },
        { local: "Boca del Medano", visitante: "Otra Banda",cancha: "libre", hora: "libre", estado: "libres" } 
      ],
    },

    goleadores: [
      { nombre: "  Franco Pereyra", goles: 3, equipo:"Otra Banda" },
      { nombre: "Elias Aciar", goles: 5, equipo:" Otra Banda" },
       { nombre: "Cristian Pereyra", goles: 4, equipo:"La Frontera" },
      { nombre: "Yamil Muñoz", goles: 2, equipo:"San Martin" },
        { nombre: "Diego Aciar", goles: 3, equipo:"Otra Banda" },
     { nombre: "Alexis Lopez", goles: 1, equipo:"San Martin" },
      { nombre: "Sergio Carbajal", goles: 2, equipo:"San Martin" },
      { nombre: "Cristian Bordon", goles: 2, equipo:"Boca del Medano" },
      { nombre: "Emanuel Cabanay", goles: 4, equipo:"Independiente" },
      { nombre: "Bautista Carrizo", goles: 1, equipo:"La Falda" },
      { nombre: "Facundo Balmaceda", goles: 1,equipo:"La Falda" },
        { nombre: "Jorge Arancibia", goles: 2,equipo:"La Falda" },
      { nombre: "isac castro", goles: 2, equipo:"Independiente" },
      { nombre: "Rodrigo Santana", goles: 1, equipo:"Independiente" },
      { nombre: "Emiliano Diaz", goles: 1, equipo:"La Frontera" },
      { nombre: "Oscar Aravena", goles: 2, equipo:"Otra Banda" },
      { nombre: "Justiniano Carrasco", goles: 3,equipo:"La Falda" },
      { nombre: "Juan Manrique", goles: 1,equipo:"La Falda" },
      { nombre: "Milton Andrada", goles: 2,equipo:"Huaco" },
      { nombre: "Facundo Garcia", goles: 2,equipo:"Huaco" },
       { nombre: "Luis Garcia", goles: 2,equipo:"Huaco" },
      { nombre: "Luciano Vega", goles: 1, equipo:"La Frontera" },
      { nombre: "Yoel Olguin", goles: 1, equipo:"Calle Varas" },
      { nombre: "Alexis Perez", goles: 2, equipo:"Calle Varas" },
      { nombre: "Jose Castro", goles: 1, equipo:"Calle Varas" },
        { nombre: "  Matias Jofre", goles: 1, equipo:"Calle Varas" },
        { nombre: "Martin Jofre", goles: 1, equipo:"Calle Varas" },
       { nombre: "Hernan Aballay", goles: 2, equipo:"La Frontera" },
        { nombre: "Eber Pizarro", goles: 1, equipo:"San Roque" },
          { nombre: "Leonardo Muñoz", goles: 1, equipo:"San Blas" },
      { nombre: "Gonzalo Araoz", goles: 2, equipo:"San Blas" },
       { nombre: "Hugo Vedia", goles: 1, equipo:"San Roque" },
       { nombre: "Brian Paredes", goles: 1, equipo:"San Roque" },
       { nombre: "Nicolas Rosselot", goles: 1, equipo:"San Roque" },
      { nombre: "Leonel Balmaceda", goles: 3, equipo:"San Blas" },
      { nombre: "Gaston Barrionuevo", goles: 1, equipo:"San Blas" },
         { nombre: "Gonzalo Araoz", goles: 1, equipo:"San Blas" },
         { nombre: "Leandro Heredia", goles: 1, equipo:"San Blas" },
        { nombre: "Leonardo Fara", goles: 1, equipo:"Independiente" },
        { nombre: "Dylan Aballay", goles: 1,equipo:"Huaco" },
       { nombre: "Miguel Roja", goles: 4, equipo:"La Frontera" },
       { nombre: "Omar Cortez", goles: 1, equipo:"La Frontera" },
       { nombre: "Florencio Perez", goles: 1, equipo:"La Frontera" },
       { nombre: "Rolando Castillo", goles: 4, equipo:"La Frontera" },
       { nombre: "Lucio Perez", goles: 1, equipo:"La Frontera" },
      { nombre: "Leonardo Baigorian", goles: 2, equipo:"Boca del Medano" },
      { nombre: "Guillermo Paez", goles: 1, equipo:"Boca del Medano" },
        { nombre: "Luis Ontiveros", goles: 2, equipo:"Independiente" },
       { nombre: "Carlos Aballay", goles: 1, equipo:"San Martin" },
        { nombre: "Lucas Montaño", goles: 1,equipo:"La Falda" },
        { nombre: "Kevin Montaño", goles: 1,equipo:"La Falda" },
        { nombre: "Martin Paez", goles: 1,equipo:"La Falda" },
        { nombre: "Jonatan Carmona", goles: 1,equipo:"La Falda" },
        { nombre: "Rodrigo Heredia", goles: 1, equipo:"Otra Banda" },
      { nombre: "Ismael Dias", goles: 3, equipo:"San Roque" },
      { nombre: "Ignacio Avila", goles: 1, equipo:"San Roque" },
      { nombre: "Maximiliano Paredes", goles: 1, equipo:"Independiente" },
      { nombre: "Luis Ontiveros", goles: 1, equipo:"Independiente" },
      { nombre: "Enzo Castro", goles: 1, equipo:"Independiente" },
        { nombre: "Milton Sanchez", goles: 1, equipo:"Boca del Medano" },
        { nombre: "Felipe Olmos", goles: 1, equipo:"Boca del Medano" },
       { nombre: "Sergio Villafañe", goles: 1, equipo:"Calle Varas" },
      { nombre: "Jose Argumoza", goles: 1,equipo:"Huaco" },
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
let mostrarTodosGoleadores = false;
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
      dg: 0,
      pts: 0
    };

  });

  Object.values(fechas).forEach(lista => {

    lista.forEach(p => {

      const local = stats[p.local];
      const visitante = stats[p.visitante];

      if (!local || !visitante) return;
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

  Object.values(stats).forEach(e => {
    e.dg = e.gf - e.gc;
  });

  const ordenados = Object.values(stats).sort((a, b) => {

    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    return b.gf - a.gf;

  });

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
        <span>${e.dg > 0 ? "+" + e.dg : e.dg}</span>
        <span>${e.pts}</span>

      </div>
    `;

  });

}

// =====================
// =====================
// GOLEADORES
// =====================
function cargarGoleadores() {

  listaGoleadores.innerHTML = "";

  const goleadoresOrdenados =
    [...categorias[categoriaActual].goleadores]
    .sort((a, b) => b.goles - a.goles);

  const goleadoresAMostrar = mostrarTodosGoleadores
    ? goleadoresOrdenados
    : goleadoresOrdenados.slice(0, 12);

  goleadoresAMostrar.forEach((g, i) => {

    const equipo = obtenerEquipo(g.equipo || "");

    listaGoleadores.innerHTML += `
      <div class="goleador-fila">

        <span>${i + 1}</span>

        <span class="goleador-info">
          ${
            equipo
              ? `<img src="${equipo.escudo}" class="escudo-goleador">`
              : ""
          }
          ${g.nombre}
        </span>

        <span>${g.goles}</span>

      </div>
    `;
  });

  if (!mostrarTodosGoleadores && goleadoresOrdenados.length > 12) {

    listaGoleadores.innerHTML += `
      <div style="text-align:center; margin-top:20px;">
        <button id="btn-ver-mas">Ver más</button>
      </div>
    `;

    document
      .getElementById("btn-ver-mas")
      .addEventListener("click", () => {

        mostrarTodosGoleadores = true;
        cargarGoleadores();

      });

  }

  if (mostrarTodosGoleadores && goleadoresOrdenados.length > 12) {

    listaGoleadores.innerHTML += `
      <div style="text-align:center; margin-top:20px;">
        <button id="btn-ver-menos">Ver menos</button>
      </div>
    `;

    document
      .getElementById("btn-ver-menos")
      .addEventListener("click", () => {

        mostrarTodosGoleadores = false;
        cargarGoleadores();

      });

  }

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
    mostrarFecha("fecha9");

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


  async function compartirPagina() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Liga Jachallera 2026",
                text: "¡Mira esta página de la liga!",
                url: window.location.href
            });
        } catch (err) {}
    } else {
        copiarEnlace();
    }
}

};

// =====================
// INICIO
// =====================

mostrarFecha("fecha9");
generarTabla();
cargarGoleadores();

async function compartirPagina() {

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Liga Jachallera 2026",
                text: "¡Mira resultados aqui!",
                url: window.location.href
            });

        } catch (e) {}

    } else {

        copiarEnlace();

    }

}

function copiarEnlace() {

    navigator.clipboard.writeText(window.location.href)
        .then(() => alert("✅ Enlace copiado"))
        .catch(() => alert("No se pudo copiar"));

}
