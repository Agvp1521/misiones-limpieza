import { useState, useEffect } from 'react';

export default function MisionesLimpieza() {
  // Datos de todos los niveles
  const datosJuego = {
    "Héroe del Hogar": [
      
      {id: 1, mision: "Tender la cama", puntos: 5, tiempo: "5 min", frecuencia: "Diaria", recompensa: "5 minutos de relajación", recompensaPersonal: "Preparar un desayuno tranquilo", notas: "Realízalo al despertar para empezar el día con orden."},
      {id: 2, mision: "Limpiar el lavaplatos", puntos: 5, tiempo: "10 min", frecuencia: "Diaria", recompensa: "Preparar una bebida favorita", recompensaPersonal: "Tú escoges libremente", notas: "Usa un desinfectante suave para mantenerlo impecable."},
      {id: 3, mision: "Limpiar interruptores de luz", puntos: 5, tiempo: "5 min", frecuencia: "Semanal", recompensa: "Elegir una playlist favorita", recompensaPersonal: "Descansar con música instrumental", notas: "Utiliza un paño húmedo y desinfectante para eliminar acumulación."},
      {id: 4, mision: "Vaciar el cesto de basura pequeño", puntos: 5, tiempo: "5 min", frecuencia: "Diaria", recompensa: "Momento de lectura breve", recompensaPersonal: "Tú escoges libremente", notas: "Combínalo con una tarea más grande para optimizar el tiempo."},
      {id: 5, mision: "Limpiar el horno pequeño", puntos: 10, tiempo: "15 min", frecuencia: "Semanal", recompensa: "Probar una bebida nueva", recompensaPersonal: "Comprar una pequeña planta decorativa", notas: "Usa un recipiente con agua y limón caliente para ablandar residuos."},
      {id: 6, mision: "Sacudir cortinas", puntos: 5, tiempo: "10 min", frecuencia: "Mensual", recompensa: "Disfrutar de un aire fresco", recompensaPersonal: "Tú escoges libremente", notas: "Usa una aspiradora manual para optimizar el proceso."},
      {id: 7, mision: "Limpiar ventanas", puntos: 10, tiempo: "15 min", frecuencia: "Semanal", recompensa: "Relajación visual", recompensaPersonal: "Comprar algo pequeño", notas: "Usa vinagre diluido para evitar marcas en el cristal."},
      {id: 8, mision: "Hacer plantas de origami", puntos: 10, tiempo: "5 min", frecuencia: "Diaria", recompensa: "Música relajante", recompensaPersonal: "Descanso con vista a las plantas", notas: "Hazlo al amanecer o atardecer para disfrutarlo."},
      {id: 9, mision: "Aspirar tapete", puntos: 10, tiempo: "20 min", frecuencia: "Semanal", recompensa: "Descanso para los pies", recompensaPersonal: "Tú escoges libremente", notas: "Aspira primero y refresca fibras con bicarbonato."},
      {id: 10, mision: "Organizar zapatos", puntos: 10, tiempo: "15 min", frecuencia: "Semanal", recompensa: "Playlist favorita", recompensaPersonal: "Momento de relajación", notas: "Ordena por tipo y frecuencia de uso para mayor eficiencia."},
      {id: 11, mision: "Doblar ropa", puntos: 10, tiempo: "15 min", frecuencia: "Semanal", recompensa: "Momento de relajación", recompensaPersonal: "Tú escoges libremente", notas: "Agrupa por categorías para agilizar el proceso."},
      {id: 12, mision: "Limpiar mesas", puntos: 5, tiempo: "10 min", frecuencia: "Diaria", recompensa: "Un pequeño capricho", recompensaPersonal: "Comprar un snack saludable", notas: "Usa movimientos circulares para evitar marcas."},
      {id: 13, mision: "Limpiar espejos", puntos: 10, tiempo: "10 min", frecuencia: "Semanal", recompensa: "Estiramiento breve", recompensaPersonal: "Tú escoges libremente", notas: "Papel periódico funciona bien para evitar rayas."},
      {id: 14, mision: "Limpiar polvo", puntos: 15, tiempo: "20 min", frecuencia: "Semanal", recompensa: "Ver tu episodio favorito", recompensaPersonal: "Tomar un jugo refrescante", notas: "Concéntrate en áreas como estanterías, mesas y electrodomésticos."},
      {id: 15, mision: "Ordenar papeles y documentos", puntos: 15, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Un dulce pequeño", recompensaPersonal: "Crear espacio para nuevas ideas", notas: "Usa carpetas etiquetadas para facilitar la organización."},
      {id: 16, mision: "Limpiar puertas", puntos: 10, tiempo: "20 min", frecuencia: "Mensual", recompensa: "Mejor calidad de aire", recompensaPersonal: "Comprar un libro o audiolibro", notas: "Usa un cepillo para eliminar polvo acumulado y mejorar la circulación."},
      {id: 17, mision: "Desinfectar control remoto y teclados", puntos: 10, tiempo: "10 min", frecuencia: "Semanal", recompensa: "Momento tecnológico libre", recompensaPersonal: "Tú escoges libremente", notas: "Usa alcohol isopropílico para eliminar gérmenes y mantener la higiene."},
      {id: 18, mision: "Limpiar cuadros", puntos: 10, tiempo: "10 min", frecuencia: "Semanal", recompensa: "Momento de reflexión breve", recompensaPersonal: "Probar una nueva receta", notas: "Usa un paño seco para mantenerlos brillantes y sin residuos."},
      {id: 19, mision: "Lavar y desinfectar almohadas", puntos: 15, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Disfrutar de una cama limpia", recompensaPersonal: "Tú escoges libremente", notas: "Usa detergente suave para prolongar la vida útil y evitar alergias."}
      {id: 65, mision: "Limpiar cama mascotas", puntos: 15, tiempo: "30 min", frecuencia: "Semanal", recompensa: "Brillo renovador", recompensaPersonal: "Tener detalles impecables", notas: "usar la aspiradora y cambiar la funda."}
    ],
    "Maestro/a del Orden": [
      {id: 20, mision: "Trapear los pisos", puntos: 15, tiempo: "30 min", frecuencia: "Semanal", recompensa: "Descanso prolongado", recompensaPersonal: "Tomar un té relajante", notas: "Usa agua tibia con desinfectante para lograr un acabado fresco."},
      {id: 21, mision: "Limpiar el baño completo", puntos: 20, tiempo: "45 min", frecuencia: "Semanal", recompensa: "Película con snacks", recompensaPersonal: "Elegir una película motivadora", notas: "Divide la limpieza en lavabo, ducha y pisos para hacerlo más manejable."},
      {id: 22, mision: "Organizar un armario", puntos: 15, tiempo: "40 min", frecuencia: "Semanal", recompensa: "Comprar algo útil", recompensaPersonal: "Probar una nueva organización", notas: "Dona o descarta prendas que no uses, dejando espacio para lo esencial."},
      {id: 23, mision: "Limpiar la nevera", puntos: 15, tiempo: "30 min", frecuencia: "Quincenal", recompensa: "Preparar tu bebida favorita", recompensaPersonal: "Comer algo preparado en casa", notas: "Revisa productos caducados antes de limpiar con vinagre diluido."},
      {id: 24, mision: "Limpiar ventanas", puntos: 20, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Ver el atardecer", recompensaPersonal: "Tener un momento de reflexión", notas: "Usa un paño de microfibra para evitar marcas."},
      {id: 25, mision: "Aspirar el patio", puntos: 15, tiempo: "25 min", frecuencia: "Semanal", recompensa: "Respirar aire fresco", recompensaPersonal: "Escuchar música mientras trabajas", notas: "Hazlo al final de la tarde cuando el clima sea agradable."},
      {id: 26, mision: "Limpiar y desinfectar la estufa", puntos: 20, tiempo: "30 min", frecuencia: "Semanal", recompensa: "Cocinar una nueva receta", recompensaPersonal: "Tomar una pausa para planear el menú", notas: "Usa productos específicos para grasa y evita dañar los quemadores."},
      {id: 27, mision: "Lavar la ropa", puntos: 15, tiempo: "25 min", frecuencia: "Diaria", recompensa: "Escuchar un audiolibro", recompensaPersonal: "Hacer una lista de pendientes", notas: "Separa la ropa por colores y tipos para evitar problemas en el lavado."},
      {id: 28, mision: "Organizar el espacio de trabajo", puntos: 15, tiempo: "20 min", frecuencia: "Semanal", recompensa: "Un descanso visual", recompensaPersonal: "Añadir elementos inspiradores", notas: "Clasifica papeles, limpia cables y añade algo motivador como una planta."},
      {id: 29, mision: "Limpiar el horno grande", puntos: 20, tiempo: "40 min", frecuencia: "Mensual", recompensa: "Preparar un postre", recompensaPersonal: "Hacer algo que te entusiasme", notas: "Usa bicarbonato de sodio y agua para limpiar sin productos abrasivos."},
      {id: 30, mision: "Lavar y desinfectar las almohadas", puntos: 15, tiempo: "40 min", frecuencia: "Mensual", recompensa: "Dormir cómodamente", recompensaPersonal: "Comprar un aromatizador ligero", notas: "Usa detergente suave y asegúrate de secarlas completamente."},
      {id: 31, mision: "Limpiar muebles de madera", puntos: 15, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Escuchar música clásica", recompensaPersonal: "Tomarte un momento para ti", notas: "Usa productos que restauren el brillo sin dañar el material."},
      {id: 32, mision: "Organizar la despensa y limpiar cajones de la cocina", puntos: 20, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Probar una nueva receta", recompensaPersonal: "Hacer un bocadillo sano", notas: "Clasifica los productos por categorías y rotación según la fecha de caducidad."},
      {id: 33, mision: "Limpiar juntas de azulejos en el baño", puntos: 15, tiempo: "30 min", frecuencia: "Trimestral", recompensa: "Tomar un baño relajante", recompensaPersonal: "Planear algo especial después", notas: "Usa un cepillo y bicarbonato para eliminar suciedad y moho."},
      {id: 34, mision: "Limpiar lámparas de techo", puntos: 20, tiempo: "25 min", frecuencia: "Mensual", recompensa: "Disfrutar de mejor iluminación", recompensaPersonal: "Leer en tu espacio renovado", notas: "Usa un paño seco para evitar residuos y dejar una luz clara y uniforme."},
      {id: 35, mision: "Reorganizar muebles", puntos: 20, tiempo: "45 min", frecuencia: "Mensual", recompensa: "Cambiar el ambiente", recompensaPersonal: "Experimentar con el diseño del espacio", notas: "Explora configuraciones diferentes para dar nueva vida a las habitaciones."},
      {id: 36, mision: "Inspeccionar y limpiar zonas ocultas", puntos: 20, tiempo: "40 min", frecuencia: "Trimestral", recompensa: "Reorganizar algún objeto", recompensaPersonal: "Crear un lugar dedicado a accesorios", notas: "Limpia detrás de muebles grandes o electrodomésticos acumuladores de polvo."},
      {id: 37, mision: "Eliminar pelusas de lavadora y secadora", puntos: 10, tiempo: "20 min", frecuencia: "Mensual", recompensa: "Escuchar tu playlist favorita", recompensaPersonal: "Hacerlo de manera rápida y relajada", notas: "Mejorará la eficiencia de los aparatos y reducirá riesgos de incendio."},
      {id: 38, mision: "Limpiar closet y sacar lo necesario para reciclaje", puntos: 25, tiempo: "1 hora", frecuencia: "Trimestral", recompensa: "Sesión de película", recompensaPersonal: "Tener tiempo libre", notas: "Usa una escalera adecuada y aspiradora con extensiones para zonas altas."},
      {id: 39, mision: "Limpiar el filtro de agua", puntos: 10, tiempo: "10 min", frecuencia: "Mensual", recompensa: "Disfrutar de tu bebida favorita", recompensaPersonal: "Mantenerla lista para usar", notas: "Usa cepillo y lija suave sin jabón y con abundante agua."},
      {id: 40, mision: "Desinfectar manijas de puertas", puntos: 10, tiempo: "5 min", frecuencia: "Semanal", recompensa: "Reflexión rápida", recompensaPersonal: "Momento de inspiración rápida", notas: "Asegúrate de incluir también interruptores y superficies muy tocadas."},
      {id: 41, mision: "Limpiar biblioteca", puntos: 20, tiempo: "40 min", frecuencia: "Trimestral", recompensa: "Disfrutar de un clima fresco", recompensaPersonal: "Adaptarlo a tu momento del día", notas: "Usa un paño húmedo o funda para evitar que el polvo caiga directamente."},
      {id: 42, mision: "Organizar cables eléctricos y cargadores", puntos: 15, tiempo: "30 min", frecuencia: "Semestral", recompensa: "Escuchar algo motivador", recompensaPersonal: "Usar sujetadores organizadores", notas: "Clasifica por función y agrupa cables para evitar enredos y desorden."}
    ],
    "Campeón/a de Limpieza Épica": [
      {id: 43, mision: "Limpiar debajo de muebles de madera pequeños", puntos: 25, tiempo: "1 hora", frecuencia: "Trimestral", recompensa: "Sesión de cine en casa", recompensaPersonal: "Ver película con snacks", notas: "Usa una aspiradora con extensiones para zonas altas y una escalera segura."},
      {id: 44, mision: "Limpiar tablas de la cama", puntos: 25, tiempo: "45 min", frecuencia: "Mensual", recompensa: "Respirar aire fresco", recompensaPersonal: "Tiempo para leer algo motivador", notas: "Utiliza un cepillo suave o una aspiradora de mano para retirar acumulación."},
      {id: 45, mision: "Organizar el sótano", puntos: 25, tiempo: "1 hora", frecuencia: "Mensual", recompensa: "Un espacio organizado", recompensaPersonal: "Planificar un nuevo proyecto creativo", notas: "Clasifica herramientas, descarta lo innecesario y optimiza el espacio."},
      {id: 46, mision: "Limpiar juntas de azulejos en cocina", puntos: 20, tiempo: "45 min", frecuencia: "Mensual", recompensa: "Preparar una cena especial", recompensaPersonal: "Recrear una receta nueva", notas: "Usa bicarbonato de sodio y vinagre para quitar manchas difíciles."},
      {id: 47, mision: "Limpiar mesitas de noche", puntos: 20, tiempo: "45 min", frecuencia: "Trimestral", recompensa: "Una tarde de descanso", recompensaPersonal: "Escuchar música relajante", notas: "Usa una funda vieja o trapo para limpiar y evitar que caiga polvo."},
      {id: 48, mision: "Pintar pequeñas áreas del hogar", puntos: 25, tiempo: "1 hora", frecuencia: "Según necesidad", recompensa: "Cambiar el ambiente", recompensaPersonal: "Comprar una decoración nueva", notas: "Protege superficies con cinta adhesiva y prueba colores en una sección pequeña."},
      {id: 49, mision: "Lavar y desinfectar cortinas", puntos: 20, tiempo: "1 hora", frecuencia: "Trimestral", recompensa: "Un descanso reparador", recompensaPersonal: "Aromatiza el ambiente", notas: "Asegúrate de usar un detergente adecuado para el tipo de tela."},
      {id: 50, mision: "Limpiar debajo de muebles grandes", puntos: 25, tiempo: "1 hora", frecuencia: "Trimestral", recompensa: "Una comida especial", recompensaPersonal: "Preparar algo que te guste mucho", notas: "Usa herramientas con mango largo para llegar a las áreas más difíciles."},
      {id: 51, mision: "Limpiar cajones de la oficina y reciclaje", puntos: 20, tiempo: "30 min", frecuencia: "Semestral", recompensa: "Mejor iluminación", recompensaPersonal: "Tener un ambiente acogedor", notas: "Usa un paño seco y evita productos abrasivos para no dañar el material."},
      {id: 52, mision: "Organizar archivos digitales", puntos: 15, tiempo: "45 min", frecuencia: "Mensual", recompensa: "Espacio digital más limpio", recompensaPersonal: "Crear carpetas personalizadas", notas: "Elimina archivos innecesarios y organiza por categorías para mayor claridad."},
      {id: 53, mision: "Limpiar y desinfectar estanterías", puntos: 25, tiempo: "1 hora", frecuencia: "Mensual", recompensa: "Rediseñar tu espacio", recompensaPersonal: "Añadir elementos decorativos", notas: "Retira todo de las estanterías, limpia fondo y clasifica objetos al reordenar."},
      {id: 54, mision: "Encerar los pisos", puntos: 25, tiempo: "1 hora", frecuencia: "Mensual", recompensa: "Un descanso prolongado", recompensaPersonal: "Tomar un libro inspirador", notas: "Usa productos específicos para pisos para evitar daño."},
      {id: 55, mision: "Limpiar accesorios de la ducha", puntos: 20, tiempo: "40 min", frecuencia: "Trimestral", recompensa: "Mejor flujo de aire", recompensaPersonal: "Disfrutar de un ambiente fresco", notas: "Remueve y lava las rejillas con agua y jabón, y aspira las salidas de aire."},
      {id: 56, mision: "Desinfectar electrodomésticos grandes", puntos: 25, tiempo: "1 hora", frecuencia: "Mensual", recompensa: "Preparar algo delicioso", recompensaPersonal: "Usar un electrodoméstico renovado", notas: "Limpia frigoríficos, lavavajillas y hornos con productos seguros y efectivos."},
      {id: 57, mision: "Limpiar desagües y sifones", puntos: 20, tiempo: "45 min", frecuencia: "Mensual", recompensa: "Sentir un flujo limpio", recompensaPersonal: "Renovar tu ambiente", notas: "Usa una mezcla de bicarbonato, vinagre y agua caliente para destapar los desagües."},
      {id: 58, mision: "Organizar productos de limpieza", puntos: 15, tiempo: "30 min", frecuencia: "Trimestral", recompensa: "Simplificar el proceso", recompensaPersonal: "Hacer un espacio funcional", notas: "Clasifica productos según frecuencia de uso y elimina lo que ya no necesites."},
      {id: 59, mision: "Eliminar manchas difíciles de paredes", puntos: 20, tiempo: "1 hora", frecuencia: "Según necesidad", recompensa: "Renovar la vista del hogar", recompensaPersonal: "Crear un espacio estético", notas: "Usa productos específicos para no dañar la pintura; prueba primero en una sección pequeña."},
      {id: 60, mision: "Revisar y reparar grietas pequeñas", puntos: 20, tiempo: "1 hora", frecuencia: "Según necesidad", recompensa: "Reparar para tranquilidad", recompensaPersonal: "Planificar mejoras", notas: "Usa masilla o materiales adecuados para sellar las grietas según la superficie."},
      {id: 61, mision: "Inspeccionar y limpiar techos de baño", puntos: 20, tiempo: "45 min", frecuencia: "Mensual", recompensa: "Un baño renovado", recompensaPersonal: "Mejorar el ambiente del baño", notas: "Elimina moho y suciedad con productos antisépticos adecuados."},
      {id: 62, mision: "Desinfectar tapetes", puntos: 25, tiempo: "1 hora", frecuencia: "Semestral", recompensa: "Espacio fresco y limpio", recompensaPersonal: "Disfrutar de un ambiente renovado", notas: "Usa productos específicos y deja que las alfombras se sequen completamente."},
      {id: 63, mision: "Limpiar espejos grandes", puntos: 20, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Relajación visual", recompensaPersonal: "Admirar un espacio despejado", notas: "Usa limpiacristales con paños de microfibra para evitar marcas y residuos."},
      {id: 64, mision: "Limpiar cama mascotas", puntos: 15, tiempo: "30 min", frecuencia: "Mensual", recompensa: "Brillo renovador", recompensaPersonal: "Tener detalles impecables", notas: "usar la aspiradora y cambiar la funda."}
    ]
  };

  // Estado para niveles y filtros
  const [nivelActual, setNivelActual] = useState("Héroe del Hogar");
  const [filtroFrecuencia, setFiltroFrecuencia] = useState("Todas");
  const [misionesCompletadas, setMisionesCompletadas] = useState({});
  const [misionSeleccionada, setMisionSeleccionada] = useState(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    try {
      const datosGuardados = localStorage.getItem('misionesLimpiezaData');
      if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        setMisionesCompletadas(datos.misionesCompletadas || {});
        setNivelActual(datos.nivelActual || "Héroe del Hogar");
        setFiltroFrecuencia(datos.filtroFrecuencia || "Todas");
      }
    } catch (error) {
      console.error("Error al cargar datos del localStorage:", error);
    }
  }, []);

  // Guardar datos en localStorage cuando cambian
  useEffect(() => {
    try {
      const datosAGuardar = {
        misionesCompletadas,
        nivelActual,
        filtroFrecuencia
      };
      localStorage.setItem('misionesLimpiezaData', JSON.stringify(datosAGuardar));
    } catch (error) {
      console.error("Error al guardar datos en localStorage:", error);
    }
  }, [misionesCompletadas, nivelActual, filtroFrecuencia]);

  // Funciones auxiliares
  const marcarComoCompletada = (id) => {
    setMisionesCompletadas(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const calcularPuntosTotales = () => {
    return datosJuego[nivelActual]
      .filter(mision => misionesCompletadas[mision.id])
      .reduce((total, mision) => total + mision.puntos, 0);
  };

  const calcularMisionesCompletadas = () => {
    const completadas = datosJuego[nivelActual].filter(mision => misionesCompletadas[mision.id]).length;
    const total = datosJuego[nivelActual].length;
    return {
      completadas,
      total,
      porcentaje: total > 0 ? Math.round((completadas / total) * 100) : 0
    };
  };

  const filtrarMisionesPorFrecuencia = () => {
    if (filtroFrecuencia === "Todas") {
      return datosJuego[nivelActual];
    }
    return datosJuego[nivelActual].filter(mision => mision.frecuencia === filtroFrecuencia);
  };

  const reiniciarProgreso = () => {
    setMisionesCompletadas({});
    setMostrarConfirmacion(false);
  };

  const misionesFiltradas = filtrarMisionesPorFrecuencia();
  const estadisticas = calcularMisionesCompletadas();

  // Obtener frecuencias únicas para el filtro
  const obtenerFrecuenciasUnicas = () => {
    const todasLasFrecuencias = [];
    Object.values(datosJuego).forEach(nivel => {
      nivel.forEach(mision => {
        if (!todasLasFrecuencias.includes(mision.frecuencia)) {
          todasLasFrecuencias.push(mision.frecuencia);
        }
      });
    });
    return todasLasFrecuencias;
  };

  const frecuenciasUnicas = obtenerFrecuenciasUnicas();

  // Función para abrir la vista detallada de una misión
  const verDetalleMision = (mision) => {
    setMisionSeleccionada(mision);
  };

  // Función para cerrar la vista detallada
  const cerrarDetalle = () => {
    setMisionSeleccionada(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md mb-4">
        <h1 className="text-xl font-bold text-center">Misiones de Limpieza</h1>
        <p className="text-center mt-1">¡Convierte la limpieza en una aventura!</p>
      </header>
  
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <div className="w-full md:w-1/3">
          <select 
            className="w-full p-2 rounded border-2 border-blue-300 bg-white"
            value={nivelActual}
            onChange={(e) => setNivelActual(e.target.value)}
          >
            {Object.keys(datosJuego).map((nivel) => (
              <option key={nivel} value={nivel}>{nivel}</option>
            ))}
          </select>
        </div>
        
        <div className="w-full md:w-1/3">
          <select 
            className="w-full p-2 rounded border-2 border-blue-300 bg-white"
            value={filtroFrecuencia}
            onChange={(e) => setFiltroFrecuencia(e.target.value)}
          >
            <option value="Todas">Todas las frecuencias</option>
            {frecuenciasUnicas.map((frecuencia) => (
              <option key={frecuencia} value={frecuencia}>{frecuencia}</option>
            ))}
          </select>
        </div>
  
        <div className="w-full md:w-1/3">
          <button 
            className="w-full p-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
            onClick={() => setMostrarConfirmacion(true)}
          >
            Reiniciar Progreso
          </button>
        </div>
      </div>
  
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-2 md:mb-0">
            <h2 className="text-lg font-semibold">{nivelActual}</h2>
            <p className="text-sm text-gray-600">
              Misiones completadas: {estadisticas.completadas} de {estadisticas.total} ({estadisticas.porcentaje}%)
            </p>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg">
            <p className="font-bold">Puntos Totales: {calcularPuntosTotales()}</p>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-blue-600 h-4 rounded-full" 
            style={{ width: `${estadisticas.porcentaje}%` }}>
          </div>
        </div>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow mb-6">
        {misionesFiltradas.map((mision) => (
          <div 
            key={mision.id} 
            className={`bg-white rounded-lg shadow-md p-4 transition-all ${misionesCompletadas[mision.id] ? 'border-l-4 border-green-500 opacity-70' : 'border-l-4 border-blue-500'}`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{mision.mision}</h3>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-xs p-1 rounded">{mision.puntos} pts</span>
                <input
                  type="checkbox"
                  checked={!!misionesCompletadas[mision.id]}
                  onChange={() => marcarComoCompletada(mision.id)}
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-2">
              <p>⏱️ {mision.tiempo} | {mision.frecuencia}</p>
            </div>
            
            <button 
              onClick={() => verDetalleMision(mision)}
              className="text-blue-600 text-sm hover:underline mt-2"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>
  
      {misionSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{misionSeleccionada.mision}</h2>
            
            <div className="mb-4">
              <p className="text-sm font-semibold">Detalles:</p>
              <p className="text-sm">⏱️ Tiempo estimado: {misionSeleccionada.tiempo}</p>
              <p className="text-sm">🔄 Frecuencia: {misionSeleccionada.frecuencia}</p>
              <p className="text-sm">✨ Puntos: {misionSeleccionada.puntos}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-semibold">Recompensa:</p>
              <p className="text-sm">{misionSeleccionada.recompensa}</p>
              <p className="text-sm italic mt-1">Personalización: {misionSeleccionada.recompensaPersonal}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-semibold">Notas:</p>
              <p className="text-sm">{misionSeleccionada.notas}</p>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={cerrarDetalle}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Cerrar
              </button>
              
              <button 
                onClick={() => {
                  marcarComoCompletada(misionSeleccionada.id);
                  cerrarDetalle();
                }}
                className={`${
                  misionesCompletadas[misionSeleccionada.id] 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-green-500 hover:bg-green-600'
                } text-white font-semibold py-2 px-4 rounded`}
              >
                {misionesCompletadas[misionSeleccionada.id] ? 'Desmarcar' : 'Completar'}
              </button>
            </div>
          </div>
        </div>
      )}
  
      {mostrarConfirmacion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">¿Estás seguro?</h2>
            <p className="mb-6">Esta acción reiniciará todo tu progreso. No podrás recuperarlo.</p>
            
            <div className="flex justify-between">
              <button 
                onClick={() => setMostrarConfirmacion(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Cancelar
              </button>
              
              <button 
                onClick={reiniciarProgreso}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              >
                Reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
  
      <footer className="mt-auto text-center text-gray-500 text-sm p-4">
        Desarrollado con ❤️ para hacer la limpieza más divertida
      </footer>
    </div>
  );
}