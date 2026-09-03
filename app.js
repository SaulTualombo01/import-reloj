// Configuración de contacto
const whatsappNumber = "593967296100";

// Base de datos de los 14 relojes del catálogo con rutas locales
const watches = [
  // ==================== FOSSIL ====================
  {
    id: 1,
    name: "Fossil Riley Multifunción",
    brand: "fossil",
    gender: "mujer",
    image: "imagenes/fossil-riley.jpg",
    highlight: "Bisel brillante con cristales y esfera multifunción.",
    caseSize: "38 mm",
    waterResist: "100 m (10 ATM)",
    movement: "Cuarzo Multifunción",
    material: "Acero Inoxidable Tono Oro Rosa",
    crystal: "Mineral endurecido",
    description: "Diseño refinado en tono oro rosa que equilibra la joyería con la funcionalidad diaria.",
    features: [
      "Bisel exterior engastado con 45 cristales tallados de alta brillantez.",
      "3 subesferas funcionales: día de la semana, fecha del mes y hora en formato 24h.",
      "Cierre desplegable con doble pulsador de seguridad para evitar caídas.",
      "Sumergible hasta 100 metros: apto para lavado, ducha y nado superficial."
    ]
  },
  {
    id: 2,
    name: "Fossil Coachman Cronógrafo Azul",
    brand: "fossil",
    gender: "hombre",
    image: "imagenes/fossil-coachman-black.jpg",
    highlight: "Diseño automovilístico con dial azul y correa de cuero perforada.",
    caseSize: "45 mm",
    waterResist: "100 m (10 ATM)",
    movement: "Cuarzo Cronógrafo",
    material: "Caja de Acero Inoxidable / Correa Piel Genuina",
    crystal: "Mineral endurecido con taquímetro",
    description: "Inspirado en los cronómetros de carreras clásicos. Presenta una esfera azul texturizada de alta legibilidad, subesferas de precisión y correa de cuero genuino ventilada.",
    features: [
      "Esfera en tono azul con marcadores de alto contraste para lectura rápida.",
      "Correa de cuero genuino perforada tipo carreras que mejora la transpiración.",
      "Cronómetro funcional con dos pulsadores y escala de taquímetro en el bisel.",
      "Hermeticidad de 100 m (10 ATM): resistente a lluvia intensa, duchas y lavado."
    ]
  },
  {
    id: 3,
    name: "Fossil Machine Black IP",
    brand: "fossil",
    gender: "hombre",
    image: "imagenes/fossil-machine-black.jpg",
    highlight: "Bisel moleteado texturizado y acabado negro mate completo.",
    caseSize: "42 mm",
    waterResist: "50 m (5 ATM)",
    movement: "Cuarzo Cronógrafo",
    material: "Acero Pavonado Negro Mate",
    crystal: "Mineral endurecido",
    description: "Estética industrial con tratamiento iónico negro mate de alta resistencia.",
    features: [
      "Bisel grabado con textura diamante (tipo moleteado) de agarre táctico.",
      "Brazalete eslabonado de acero macizo con cierre plegable seguro.",
      "Fechador discreto y subesferas de cronógrafo de 60 minutos.",
      "Construcción íntegra en acero con baño de vaporización iónica anti-desgaste."
    ]
  },
  {
    id: 4,
    name: "Fossil Machine Set de Regalo",
    brand: "fossil",
    gender: "hombre",
    image: "imagenes/fossil-machine-set.jpg",
    highlight: "Cronógrafo elegante en estuche con pulsera de cuero a juego.",
    caseSize: "42 mm",
    waterResist: "50 m (5 ATM)",
    movement: "Cuarzo Cronógrafo",
    material: "Acero y Piel Genuina Marrón",
    crystal: "Mineral endurecido",
    description: "Paquete coordinado presentado en lata coleccionable vintage de Fossil.",
    features: [
      "Incluye reloj cronógrafo Machine con pulsera artesanal de cuero trenzado a juego.",
      "Caja de acero cepillado con esfera negra sobria.",
      "Correa intercambiable de cuero natural con hebilla de pasador.",
      "Presentación ideal para regalo o conmemoración especial."
    ]
  },
  {
    id: 5,
    name: "Fossil Nate Oversized",
    brand: "fossil",
    gender: "hombre",
    image: "imagenes/fossil-nate.jpg",
    highlight: "Caja grande militar de 50 mm y números legibles.",
    caseSize: "50 mm",
    waterResist: "50 m (5 ATM)",
    movement: "Cuarzo Cronógrafo",
    material: "Acero Inoxidable Revestido en Negro",
    crystal: "Mineral endurecido",
    description: "Reloj imponente de inspiración militar diseñado para muñecas grandes.",
    features: [
      "Caja extra grande de 50 mm con excelente presencia e impacto visual.",
      "Números arábigos de gran tamaño que permiten ver la hora sin forzar la vista.",
      "Pulsadores y corona sobredimensionados para fácil manipulación.",
      "Brazalete de acero inoxidable negro con acabado mate antirreflejos."
    ]
  },
  {
    id: 6,
    name: "Fossil The Minimalist",
    brand: "fossil",
    gender: "hombre",
    image: "imagenes/fossil-minimalist.jpg",
    highlight: "Diseño ultraplano y esfera limpia de 3 manecillas.",
    caseSize: "44 mm",
    waterResist: "50 m (5 ATM)",
    movement: "Cuarzo Analógico de Precisión",
    material: "Acero Inoxidable y Piel Negra",
    crystal: "Mineral endurecido",
    description: "Perfil ultradelgado de máxima comodidad para uniforme o vestimenta formal.",
    features: [
      "Grosor de caja reducido: entra fácilmente bajo el puño de camisas formales.",
      "Dial limpio y despejado sin subesferas para una lectura de hora inmediata.",
      "Índices lineales minimalistas aplicados a mano.",
      "Correa de cuero suave y flexible de peso ligero."
    ]
  },

  // ==================== CASIO ====================
  {
    id: 7,
    name: "Casio G-Shock GA-100-1A1",
    brand: "casio",
    gender: "hombre",
    image: "imagenes/casio-ga100.jpg",
    highlight: "Resistencia extrema a impactos y campos magnéticos.",
    caseSize: "51.2 mm",
    waterResist: "200 m (20 ATM)",
    movement: "Analógico - Digital de Cuarzo",
    material: "Resina Táctica de Alta Densidad",
    crystal: "Mineral resistente a rayones",
    description: "El referente de resistencia táctica y militar en todo el mundo.",
    features: [
      "Estructura antigolpes 'Hollow Case' y protección antimagnética certificada (ISO 764).",
      "Sumergible hasta 200 metros (20 bar): apto para inmersión profunda.",
      "Luz LED automática con selector de duración e interruptor por inclinación de muñeca.",
      "Hora mundial en 48 ciudades, 4 alarmas diarias y cronómetro milimétrico 1/1000s."
    ]
  },
  {
    id: 8,
    name: "Casio Illuminator AE-1500WH (Clásico)",
    brand: "casio",
    gender: "hombre",
    image: "imagenes/casio-ae1500.jpg",
    highlight: "Dígitos gigantes de alta lectura y batería de 10 años.",
    caseSize: "51.2 mm",
    waterResist: "100 m (10 ATM)",
    movement: "Módulo Digital Japonés",
    material: "Resina Duradera Ligera",
    crystal: "Resina abombada",
    description: "Diseñado con números extra grandes para lectura cómoda y descanso visual.",
    features: [
      "Pantalla LCD clara con números extragrandes legibles a gran distancia.",
      "Batería ultra duradera con hasta 10 años continuos de autonomía.",
      "Iluminación LED ámbar homogénea para condiciones de poca luz.",
      "Resistencia de 100 m, cronómetro 1/100s y 5 alarmas configurables."
    ]
  },
  {
    id: 9,
    name: "Casio Illuminator AE-1500WH (Pantalla Invertida)",
    brand: "casio",
    gender: "hombre",
    image: "imagenes/casio-ae1500-negro.jpg",
    highlight: "Pantalla táctica negra antirreflejos y batería de 10 años.",
    caseSize: "51.2 mm",
    waterResist: "100 m (10 ATM)",
    movement: "Módulo Digital Japonés",
    material: "Resina Táctica Mate",
    crystal: "Resina abombada",
    description: "Edición táctica de bajo perfil con pantalla oscura de lectura limpia.",
    features: [
      "Pantalla LCD negativa (fondo negro con dígitos iluminados) para uso táctico discreto.",
      "Módulo con pila de 10 años de autonomía continua.",
      "Luz LED ámbar integrada para visibilidad total nocturna.",
      "Caja resistente de 100 m apta para natación y trabajo de campo pesado."
    ]
  },

  // ==================== ANNE KLEIN ====================
  {
    id: 10,
    name: "Anne Klein Set Reloj y Pulseras Bangle",
    brand: "anne-klein",
    gender: "mujer",
    image: "imagenes/anne-klein-set.jpg",
    highlight: "Juego completo con reloj tipo brazalete y pulseras coordinadas.",
    caseSize: "32 mm",
    waterResist: "30 m (3 ATM - Salpicaduras)",
    movement: "Cuarzo Japonés de Precisión",
    material: "Aleación Pulida con Esmalte / Cristales",
    crystal: "Mineral endurecido resistente a rayaduras",
    description: "Elegante set de joyería fina diseñado para complementar cualquier ocasión especial, combinando el reloj con brazaletes intercambiables de esmalte y cristales.",
    features: [
      "Incluye reloj joya y pulseras coordinadas para lucir juntas o por separado.",
      "Brazalete con eslabones ajustables y cierre de joyero para ajuste personalizado.",
      "Esfera limpia y elegante con manecillas doradas de fácil lectura.",
      "Presentado en caja de lujo ideal para regalo de alta distinción."
    ]
  },
  {
    id: 11,
    name: "Anne Klein Diamante Genuino Plateado",
    brand: "anne-klein",
    gender: "mujer",
    image: "imagenes/anne-klein-diamond.jpg",
    highlight: "Diamante auténtico a las 12 en punto y acabado plateado pulido.",
    caseSize: "30 mm",
    waterResist: "30 m (3 ATM - Salpicaduras)",
    movement: "Cuarzo Japonés de Alta Precisión",
    material: "Acero / Metal Mixto Plateado Pulido",
    crystal: "Mineral endurecido",
    description: "Clásico refinado que destaca por un diamante natural engastado a las 12 en punto, aportando sobriedad y distinción para uso diario o eventos formales.",
    features: [
      "Diamante genuino certificado ubicado a las 12 en punto sobre esfera pulida.",
      "Perfil estilizado y ligero de 30 mm que se adapta con ligereza a la muñeca.",
      "Brazalete eslabonado en tono plata brillante con broche de joyero plegable.",
      "Mecanismo de cuarzo japonés de alta exactitud horaria y bajo mantenimiento."
    ]
  },

  // ==================== SMARTWATCH ====================
  {
    id: 12,
    name: "Garmin Instinct Solar Tactical",
    brand: "smartwatch",
    gender: "hombre",
    image: "imagenes/garmin-tactical.jpg",
    highlight: "Carga solar, estándar militar MIL-STD-810 y modo oculto.",
    caseSize: "45 mm",
    waterResist: "100 m (10 ATM)",
    movement: "Digital Smart con Sensor Solar",
    material: "Polímero Reforzado con Fibra",
    crystal: "Power Glass con Captación Solar",
    description: "Construido bajo el estándar militar 810 para soportar calor extremo, golpes y agua.",
    features: [
      "Carga solar mediante lente Power Glass con autonomía potencialmente ilimitada.",
      "Modo Oculto (Stealth): apaga señales inalámbricas y desactiva rastreo GPS.",
      "Pantalla de alto contraste compatible con gafas de visión nocturna.",
      "Navegación satelital triple (GPS, GLONASS, Galileo) y sensor de rumbo."
    ]
  },
  {
    id: 13,
    name: "Garmin Venu® Sq 2",
    brand: "smartwatch",
    gender: "mujer",
    image: "imagenes/garmin-venu-sq2.jpg",
    highlight: "Pantalla táctil AMOLED cuadrada y monitoreo de salud 24/7.",
    caseSize: "40.6 mm",
    waterResist: "50 m (5 ATM / Apto natación)",
    movement: "Sistema Garmin Connect",
    material: "Bisel de Aluminio Anodizado",
    crystal: "Corning Gorilla Glass 3",
    description: "Reloj inteligente compacto y ligero con control completo de bienestar diario.",
    features: [
      "Pantalla AMOLED brillante con texto grande de fácil lectura.",
      "Hasta 11 días de batería continua sin cargarlo todas las noches.",
      "Monitoreo de pulso, saturación de oxígeno, estrés y reserva Body Battery.",
      "Aviso de llamadas entrantes, mensajes y alertas en la muñeca.",
      "Más de 25 aplicaciones de actividad física y caminata guiada."
    ]
  },
  {
    id: 14,
    name: "Garmin Vívoactive 5",
    brand: "smartwatch",
    gender: "mujer",
    image: "imagenes/garmin-vivoactive5.jpg",
    highlight: "Smartwatch fitness con pantalla AMOLED y métricas avanzadas.",
    caseSize: "42.2 mm",
    waterResist: "50 m (5 ATM)",
    movement: "Garmin OS con Sensores Gen 4",
    material: "Aluminio y Polímero Reforzado",
    crystal: "Corning Gorilla Glass 3",
    description: "Diseño ergonómico con asesor de sueño y seguimiento exhaustivo de salud.",
    features: [
      "Entrenador de sueño con detección automática de siestas.",
      "Pantalla táctil AMOLED ultra nítida con opción de modo siempre activo.",
      "Hasta 11 días de batería en modo smartwatch convencional.",
      "Sesiones de respiración guiada, meditación y control de hidratación.",
      "Pagos sin contacto vía Garmin Pay y conectividad con Android e iOS."
    ]
  }
];

// Estado de los filtros
let selectedBrand = 'all';
let selectedGender = 'all';
let searchQuery = '';

// Elementos del DOM
const grid = document.getElementById('catalogGrid');
const countDisplay = document.getElementById('productCount');
const searchInput = document.getElementById('searchInput');
const brandButtons = document.querySelectorAll('.nav-btn');
const genderButtons = document.querySelectorAll('.filter-pill');
const modal = document.getElementById('watchModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

// Renderizado con columnas de Bootstrap responsivas
function renderCatalog() {
  const query = searchQuery.trim().toLowerCase();

  const filteredWatches = watches.filter(watch => {
    const matchBrand = (selectedBrand === 'all') || (watch.brand === selectedBrand);
    const matchGender = (selectedGender === 'all') || (watch.gender === selectedGender);
    const matchSearch = query === '' || 
      watch.name.toLowerCase().includes(query) || 
      watch.brand.toLowerCase().includes(query) ||
      watch.highlight.toLowerCase().includes(query);

    return matchBrand && matchGender && matchSearch;
  });

  countDisplay.textContent = `${filteredWatches.length} modelo(s) disponible(s)`;

  if (filteredWatches.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5">
        <h3 class="h5 text-dark">No se encontraron modelos</h3>
        <p class="text-muted small mt-1">Intenta con otra combinación de filtros o término de búsqueda.</p>
      </div>
    `;
    return;
  }

  // Cuadrícula Bootstrap: 1 columna en móvil, 2 en tablets, 3 o 4 en PC
  grid.innerHTML = filteredWatches.map(watch => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <article class="watch-card" onclick="openWatchModal(${watch.id})">
        <div class="card-img-wrap">
          <span class="card-badge">${watch.brand.replace('-', ' ')}</span>
          <span class="card-gender-badge">${watch.gender}</span>
          <img src="${watch.image}" alt="${watch.name}">
        </div>
        <div class="card-info">
          <h3 class="card-title">${watch.name}</h3>
          <p class="card-highlight">${watch.highlight}</p>
          <div class="card-specs-preview">
            <span>📏 ${watch.caseSize}</span>
            <span>💧 ${watch.waterResist}</span>
          </div>
        </div>
      </article>
    </div>
  `).join('');
}

// Modal adaptado a móvil con WhatsApp y botón volver
function openWatchModal(id) {
  const watch = watches.find(w => w.id === id);
  if (!watch) return;

  const whatsappMessage = encodeURIComponent(
    `Hola IMPORT RELOJ, deseo consultar la disponibilidad y precio del modelo: ${watch.name} (${watch.brand.replace('-', ' ').toUpperCase()}).`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  modalBody.innerHTML = `
    <header class="modal-header-centered">
      <span class="modal-pill-tag">${watch.brand.replace('-', ' ').toUpperCase()} &bull; ${watch.gender.toUpperCase()}</span>
      <h2 class="modal-title-centered">${watch.name}</h2>
      <p class="modal-subtitle-centered">${watch.description}</p>
    </header>

    <div class="modal-gallery-box">
      <img src="${watch.image}" alt="${watch.name}">
    </div>

    <div class="specs-grid">
      <div class="spec-tile">
        <span class="spec-tile-label">Diámetro de caja</span>
        <span class="spec-tile-val">${watch.caseSize}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-tile-label">Resistencia al agua</span>
        <span class="spec-tile-val">${watch.waterResist}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-tile-label">Movimiento</span>
        <span class="spec-tile-val">${watch.movement}</span>
      </div>
      <div class="spec-tile">
        <span class="spec-tile-label">Cristal</span>
        <span class="spec-tile-val">${watch.crystal}</span>
      </div>
      <div class="spec-tile full-width">
        <span class="spec-tile-label">Materiales / Acabados</span>
        <span class="spec-tile-val">${watch.material}</span>
      </div>
    </div>

    <div class="modal-highlights-card">
      <h4>Puntos Destacados</h4>
      <ul>
        ${watch.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="whatsapp-action-btn">
      <span>💬 Consultar este reloj por WhatsApp</span>
    </a>

    <button class="back-catalog-btn" onclick="closeModalDirectly()">
      Volver al catálogo
    </button>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Permite cerrar con la flecha o gesto de atrás del celular sin salir de la página
  history.pushState({ modalOpen: true }, "");
}

// Cerrar modal y restablecer scroll
function closeModalDirectly() {
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (history.state && history.state.modalOpen) {
      history.back();
    }
  }
}

// Sincronizar botón físico/gesto "Atrás" de Android e iOS
window.addEventListener('popstate', () => {
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Eventos de la cruz 'X' y clic en el fondo oscuro
closeModalBtn.addEventListener('click', closeModalDirectly);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModalDirectly();
});

// Eventos de Búsqueda
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderCatalog();
});

// Eventos de botones de Marca
brandButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    brandButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedBrand = btn.getAttribute('data-brand');
    renderCatalog();
  });
});

// Eventos de botones de Género
genderButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    genderButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedGender = btn.getAttribute('data-gender');
    renderCatalog();
  });
});

// Inicialización
document.addEventListener('DOMContentLoaded', renderCatalog);