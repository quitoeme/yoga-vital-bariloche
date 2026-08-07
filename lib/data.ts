// Datos centralizados de Ayur Yoga Vital Bariloche con Rashi.
// Editá este archivo y se actualiza toda la landing.

export const site = {
  name: "Ayur Yoga Vital Bariloche",
  // Nombre corto que se muestra únicamente junto al logo del header.
  // El resto del sitio (footer, SEO, JSON-LD) sigue usando `name`.
  headerName: "Yoga en Bariloche",
  teacher: "Rashi",
  teacherFullName: "Rashi Natha (Ricardo Alzamendi)",
  tagline: "Yoga terapéutico al pie de los Andes",
  description:
    "Una práctica que une el yoga ancestral con el Ayurveda. Adapta la postura a tu cuerpo, no tu cuerpo a la postura.",
  // URL pública del sitio (canonical, sitemap, OpenGraph). Cambiá esto si
  // conectás un dominio propio (ej. https://yogavitalbariloche.com).
  url: "https://rashi-theta.vercel.app",
  address: "Av. San Martín 586, 1° B · San Carlos de Bariloche",
  streetAddress: "Av. San Martín 586, 1° B",
  locality: "San Carlos de Bariloche",
  region: "Río Negro",
  postalCode: "8400",
  country: "AR",
  // Coordenadas aprox. del centro de San Carlos de Bariloche
  geo: { lat: -41.1334722, lng: -71.3102778 },
  city: "San Carlos de Bariloche, Patagonia",
  email: "bariloche@yogavital.com.ar",
  whatsapp: "5492944796273", // formato internacional sin + ni espacios
  whatsappDisplay: "+54 9 294 479-6273",
  phoneE164: "+5492944796273",
  instagram: "@yogavitalbariloche",
  instagramUrl: "https://www.instagram.com/yogavitalbariloche",
  facebook: "Ayur.Yoga.Vital.Bariloche",
  facebookUrl: "https://www.facebook.com/Ayur.Yoga.Vital.Bariloche",
  founded: 2009,
  lineage: "Escuela Ayur Yoga Vital · Fundada por Jorge Bidondo (Dev Hansa Natha)",
};

export type ClassFeature = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  intensity: 1 | 2 | 3;
  duration: string;
  forWho: string;
  icon: "lotus" | "leaf" | "mountain" | "wave" | "sun" | "moon";
};

export const classFeatures: ClassFeature[] = [
  {
    id: "vital",
    title: "Ayur Yoga Vital",
    subtitle: "La práctica madre",
    description:
      "Asanas suaves, respiración consciente y relajación. Adaptamos cada postura con cinturones, bloques y almohadones. Tu cuerpo manda.",
    intensity: 2,
    duration: "75 min",
    forWho: "Todos los niveles",
    icon: "lotus",
  },
  {
    id: "terapeutico",
    title: "Ayur Yoga Terapéutico",
    subtitle: "Tu cuerpo necesita ser escuchado",
    description:
      "Rutinas específicas para ansiedad, ataques de pánico, miedo, depresión, estrés crónico, insomnio, etc. Patologías de columna y articulaciones en general, hernias de disco, escoliosis, lordosis, artrosis, artritis, tendinitis, etc. Problemas digestivos, estreñimiento, constipación, hígado graso, etc. Abordaje individual y grupal.",
    intensity: 1,
    duration: "75 min",
    forWho: "Recuperación · adultos mayores",
    icon: "leaf",
  },
  {
    id: "uccara",
    title: "Uccara® · Ayur Yoga para Adolescentes",
    subtitle: "El despertar del cuerpo energético y el manejo de las emociones",
    description:
      "Metodología de meditación en movimiento. Práctica que permite una potente movilización energética a través de movimientos rítmicos, fórmulas de sonidos \"mantras\" y la respiración. Revitaliza el cuerpo físico y energético y genera una mente despierta y calma.",
    intensity: 3,
    duration: "60 min",
    forWho: "Adolescentes",
    icon: "sun",
  },
  {
    id: "meditacion",
    title: "Meditación con Sonidos Soul Healing",
    subtitle: "Calmar el ruido mental",
    description:
      "Práctica de meditación guiada con concierto sonoro de gongs, cuencos, tambor chamánico, didgeridoo e instrumentos ancestrales. 1 hora de práctica equivale a 4 horas de sueño profundo. Ideal para disminuir el estrés crónico y la ansiedad.",
    intensity: 1,
    duration: "60 min",
    forWho: "Todos los niveles",
    icon: "moon",
  },
  {
    id: "ayur-meditacion",
    title: "Ayur Yoga y la Meditación",
    subtitle: "Un tónico para el alma",
    description:
      "Prácticas de iniciación en el arte de la meditación. Objetivo: aprender a enfocar y concentrar la mente. Reconocer los estados de conciencia y sus beneficios para la salud física, mental y emocional.",
    intensity: 1,
    duration: "60 min",
    forWho: "Todos los niveles",
    icon: "wave",
  },
  {
    id: "adultos",
    title: "Ayur Yoga para Adultos Mayores",
    subtitle: "Movilidad y autonomía",
    description:
      "Prácticas terapéuticas específicas para mejorar el tono muscular, la movilidad articular, el equilibrio, la memoria, la coordinación y la capacidad de disfrutar la vida.",
    intensity: 1,
    duration: "60 min",
    forWho: "Desde los 60",
    icon: "mountain",
  },
];

export type ScheduleSlot = {
  day: "Lun" | "Mar" | "Mié" | "Jue" | "Vie" | "Sáb";
  start: string;
  end: string;
  classId: string;
  groupName: string;
  spotsLeft: number;
};

// Nota: spotsLeft ya no se muestra en pantalla (se sacó el contador de lugares
// disponibles de la UI). Se mantiene solo como bandera interna de disponibilidad.
export const schedule: ScheduleSlot[] = [
  { day: "Lun", start: "14:15", end: "15:15", classId: "vital", groupName: "Grupo Mediodía", spotsLeft: 5 },
  { day: "Mié", start: "14:15", end: "15:15", classId: "vital", groupName: "Grupo Mediodía", spotsLeft: 5 },
  { day: "Lun", start: "16:30", end: "17:30", classId: "vital", groupName: "Grupo Tarde", spotsLeft: 5 },
  { day: "Mié", start: "16:30", end: "17:30", classId: "vital", groupName: "Grupo Tarde", spotsLeft: 5 },
  { day: "Mar", start: "09:30", end: "10:30", classId: "vital", groupName: "Grupo Mañana", spotsLeft: 5 },
  { day: "Vie", start: "09:30", end: "10:30", classId: "vital", groupName: "Grupo Mañana", spotsLeft: 5 },
  { day: "Mar", start: "11:00", end: "12:00", classId: "vital", groupName: "Grupo Media Mañana", spotsLeft: 5 },
  { day: "Vie", start: "11:00", end: "12:00", classId: "vital", groupName: "Grupo Media Mañana", spotsLeft: 5 },
  { day: "Mar", start: "18:00", end: "19:00", classId: "vital", groupName: "Grupo Noche", spotsLeft: 5 },
  { day: "Jue", start: "18:00", end: "19:00", classId: "vital", groupName: "Grupo Noche", spotsLeft: 5 },
  { day: "Mar", start: "19:30", end: "20:30", classId: "vital", groupName: "Grupo Noche II", spotsLeft: 5 },
  { day: "Jue", start: "19:30", end: "20:30", classId: "vital", groupName: "Grupo Noche II", spotsLeft: 5 },
];

export const days: ScheduleSlot["day"][] = ["Lun", "Mar", "Mié", "Jue", "Vie"];

export type Faq = { q: string; a: string };

// Preguntas frecuentes. Escritas con búsquedas locales reales en mente
// ("yoga en Bariloche", "yoga terapéutico", "clases de yoga"). Se usan tanto
// en la sección visible como en el structured data (FAQPage) para SEO.
export const faqs: Faq[] = [
  {
    q: "¿Dónde puedo hacer yoga en Bariloche?",
    a: "En Ayur Yoga Vital Bariloche, en pleno centro de San Carlos de Bariloche (Av. San Martín 586, 1° B), con Rashi. Tenemos clases de lunes a viernes en distintos horarios de mañana, mediodía, tarde y noche.",
  },
  {
    q: "¿Qué es el Ayur Yoga Vital?",
    a: "Ayur Yoga Vital es una práctica terapéutica que une el yoga clásico con el Ayurveda. En lugar de forzar el cuerpo a la postura, adaptamos la postura a tu cuerpo con cinturones, bloques y almohadones. Es ideal para todos los niveles.",
  },
  {
    q: "¿Necesito experiencia previa para empezar?",
    a: "No. Trabajamos en grupos chicos y cada persona avanza a su ritmo. Si nunca hiciste yoga, te acompañamos desde la primera clase. Podés venir a una clase suelta para probar antes de sumarte.",
  },
  {
    q: "¿Hacen yoga terapéutico?",
    a: "Sí. Ofrecemos prácticas específicas para columna, articulaciones, estrés, hipertensión y post-rehabilitación, con un trabajo individualizado dentro del grupo. El yoga terapéutico es el corazón de la escuela.",
  },
  {
    q: "¿Qué días y horarios hay clases de yoga?",
    a: "Hay clases de lunes a viernes. Lunes y miércoles a las 14:00 y 16:30; martes y viernes a las 9:30; y martes y jueves a las 19:00 y 20:30. Cada clase dura aproximadamente 60 minutos.",
  },
  {
    q: "¿Cómo reservo una clase?",
    a: "Escribinos por WhatsApp al +54 9 294 479-6273 y te orientamos. Podés reservar un mes completo (tu lugar queda fijo cada semana) o coordinar una clase suelta para probar.",
  },
];

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  format: string;
  startDate: string;
  description: string;
  highlights: string[];
  level: "Profesorado I" | "Profesorado II" | "Especialización";
};

export const courses: Course[] = [
  {
    id: "instructorado",
    title: "Profesorado de Ayur Yoga Vital",
    subtitle: "Primer paso para convertirte en un profesional",
    format: "Presencial y online",
    startDate: "Inicio: marzo y septiembre",
    level: "Profesorado I",
    description:
      "Formación completa para ser profesor de Ayur Yoga Vital. Filosofía e historia yóguica. Abordaje completo de las metodologías para trabajar el cuerpo físico, energético, emocional y mental-espiritual. Anatomía física aplicada. Kriyas; namaskares; la ciencia de las posturas \"asanas\"; swara, las respiraciones conscientes; el sonido sagrado de los mantras; pranayamas, el arte de mover la energía vital; relajaciones; meditaciones y los estados de consciencia. Clases presenciales y online, prácticas docentes supervisadas.",
    highlights: [
      "Certificaciones nacionales e internacionales otorgadas por la FYRA (Federación de Yoga de la República Argentina) y la UIDYV (Unión Internacional de Docentes de Yoga Vital)",
      "Prácticas semanales con acompañamiento personalizado",
      "Material de estudio incluido",
    ],
  },
  {
    id: "profesorado",
    title: "Profesorado Ayur Yoga Vital Superior Terapéutico",
    subtitle: "Nivel de aplicación yóguica en patologías y trastornos psicofísicos",
    format: "Presencial y online",
    startDate: "Inicio: marzo y septiembre",
    level: "Profesorado II",
    description:
      "Enfoque terapéutico: abordaje de las diferentes patologías de los sistemas del cuerpo y de la mente. Abordaje del estrés, depresión, ataques de pánico, miedo, fobias, etc. Patologías del sistema nervioso, sistema articular y óseo, sistema digestivo, sistema circulatorio, sistema endocrino, sistema linfático y reproductivo.",
    highlights: [
      "Diplomaturas nacionales e internacionales",
      "Trabajo final con casos clínicos reales",
      "Prácticas presenciales en el centro Bariloche",
    ],
  },
  {
    id: "especializacion-etapas",
    title: "Especialidades para cada Etapa de la Vida",
    subtitle: "Para profesorxs ya formadxs",
    format: "Presencial y online",
    startDate: "Inicio: marzo y septiembre",
    level: "Especialización",
    description:
      "Formación en Ayur Yoga Vital en el embarazo, parto y posparto; en niños; en adolescentes; en la tercera edad. Ayur Yoga Vital en el deporte; con elementos de ayuda; para el manejo de las emociones, etc.",
    highlights: [
      "Cupo limitado a 15 personas",
      "Elegís la etapa o el enfoque que más te interesa",
      "Casos y observación de clases",
    ],
  },
];

export type Workshop = {
  id: string;
  title: string;
  recurrence: string;
  day: string;
  sessionType: string;
  modality: string;
  duration: string;
  description: string;
};

export const workshops: Workshop[] = [
  {
    id: "respiracion-vital",
    title: "Respiración Vital y Pranayama",
    recurrence: "Mensual · Primer sábado",
    day: "Sábado",
    sessionType: "Teórico-práctico",
    modality: "Presencial y online",
    duration: "2 hs",
    description:
      "Aprendé a usar tu propia energía vital (prana) para mejorar tu salud y aumentar tu vitalidad.",
  },
  {
    id: "emociones",
    title: "Las Emociones Tienen un Mensaje para Ti",
    recurrence: "Mensual · Segundo sábado",
    day: "Sábado",
    sessionType: "Teórico-práctico",
    modality: "Presencial y online",
    duration: "2 hs",
    description:
      "Tres módulos: identificá de manera fácil cuáles son los patrones emocionales activos en vos. Aprendé cómo desactivar los hábitos emocionales.",
  },
  {
    id: "chakras",
    title: "Ayur Yoga Diksha · Ciclo Iniciático en los 7 Chakras",
    recurrence: "Mensual · Primer domingo · un chakra por encuentro",
    day: "Domingo",
    sessionType: "Teórico-práctico",
    modality: "Presencial y online",
    duration: "4 hs",
    description:
      "Ciclo de ocho encuentros donde vas a aprender prácticas avanzadas para desarrollar tus capacidades latentes (\"siddhis\") a través de una iniciación símil a las técnicas de reiki.",
  },
  {
    id: "cuencos",
    title: "Taller de Cuencos Tibetanos y Cuarzo",
    recurrence: "Mensual · Segundo domingo",
    day: "Domingo",
    sessionType: "Teórico-práctico",
    modality: "Presencial y online",
    duration: "4 hs",
    description:
      "Iniciate en el mágico mundo de los cuencos tibetanos y de cuarzo. Aprendé técnicas para tocarlos adecuadamente, los diferentes metales y sus usos terapéuticos, tratamientos de sanación y armonización, y el simbolismo oculto de cada uno de los toques.",
  },
  {
    id: "nutricion",
    title: "Encuentros de Nutrición",
    recurrence: "Mensual",
    day: "[Definir día]",
    sessionType: "[Definir tipo]",
    modality: "[Definir modalidad]",
    duration: "[Definir duración]",
    description:
      "Encuentro mensual sobre nutrición consciente y hábitos alimentarios saludables. [Completar descripción — falta info de Rashi]",
  },
];

export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Baño de Gong" | "Luna" | "Retiro" | "Encuentro";
  description: string;
  spots: number;
  totalSpots: number;
  cover: string;
};

export const events: Event[] = [
  {
    id: "gong-luna-llena",
    title: "Baño de Gong · Luna Llena de Sagitario",
    date: "Sábado 30 de mayo",
    time: "20:30 hs",
    type: "Baño de Gong",
    description:
      "Una hora y media de inmersión sonora con gongs planetarios, cuencos tibetanos y voz. Llegás como llegues, salís otrx.",
    spots: 4,
    totalSpots: 25,
    cover:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gong-solsticio",
    title: "Baño de Gong · Solsticio de Invierno",
    date: "Sábado 21 de junio",
    time: "19:00 hs",
    type: "Baño de Gong",
    description:
      "Cierre del ciclo solar. Práctica corta de yoga restaurativo y noventa minutos de gongs frente al lago.",
    spots: 12,
    totalSpots: 30,
    cover:
      "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retiro-lago",
    title: "Retiro de Fin de Semana · Lago Mascardi",
    date: "Viernes 17 al domingo 19 de julio",
    time: "Tres días completos",
    type: "Retiro",
    description:
      "Cabañas frente al lago, prácticas matinales, caminatas, comida vegetariana de estación y silencio.",
    spots: 6,
    totalSpots: 18,
    cover:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "luna-nueva-mujeres",
    title: "Círculo de Mujeres · Luna Nueva",
    date: "Domingo 14 de junio",
    time: "17:00 hs",
    type: "Luna",
    description:
      "Encuentro mensual de práctica, palabra y té. Coordina Rashi junto a Yamila (doula).",
    spots: 8,
    totalSpots: 16,
    cover:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const aboutRashi = {
  name: "Rashi",
  fullName: "Ricardo Alzamendi · Rashi Nath",
  role: "Coordinador regional Bariloche · Ayur Yoga Vital",
  bio: [
    "Mi nombre es Ricardo Alzamendi, me conocen en el ámbito espiritual como Rashi, que es mi nombre espiritual dentro de la tradición yóguica a la que pertenezco. Me formé como Profesor Superior Terapéutico en la Escuela Ayur Yoga Vital International School. Soy discípulo directo del Maha Yogacharya Shri Dev Hansa Nath, Gran Maestro de Yoga Jorge Bidondo. Me conocen en el ámbito yóguico por compartir lo que tanto amo, brindar disertaciones, formaciones y clases en diferentes partes del mundo.",
    "Actualmente, y desde hace más de 15 años, coordino la Sede Bariloche de la Escuela Ayur Yoga Vital International School, donde se dictan diversas formaciones, como el Instructorado de Ayur Yoga, Profesorado de Ayur Yoga y especializaciones. Entre ellos, cursos, talleres y clases de meditación, relajación, respiración, masajes, reiki, reflexología, etc.",
  ],
  credentials: [
    "Formador y Profesor de Ayur Yoga Vital International School",
    "Reflexólogo Holístico, Reikista y Masajista profesional",
    "Facilitador de Sound Healing · Terapias de sonido",
    "Más de 20 años brindando formaciones y clases de manera continua",
  ],
};

export const yogaVitalPhilosophy = {
  whatIs:
    "Ayur Yoga o Yoga Vital es un Sistema Vivo compuesto por diferentes metodologías y técnicas que permiten un abordaje completo del Ser, accionando de manera integral el cuerpo físico, emocional, mental y espiritual. Desarrollado por el Maha Yogacharya Sri Dev Hansa Nath, Gran Maestro Jorge Bidondo, de la tradición yoguica Natha Siddhas. El objetivo de toda la enseñanza es hacer consciente nuestra verdadera naturaleza esencial. La práctica tiene la característica que se adapta al alumnado, y no al revés, donde cada persona avanza de acuerdo a su búsqueda, sus posibilidades y necesidades personales.",
  pillars: [
    {
      title: "Mirada Terapéutica",
      body:
        "Clases para todo público, adaptación personalizada para practicantes con patologías y trastornos del cuerpo físico, aspectos emocionales y desequilibrios mentales. Que la práctica consciente sea tu camino para reequilibrarte y desarrollar la mejor versión de ti.",
    },
    {
      title: "Adaptación y Mejora Constante",
      body:
        "Avanzar puede ser tu desafío. Disfrutar de tu práctica también. Las clases siguen objetivos puntuales de mejora continua. Utilizamos elementos de ayuda: cinturones, bloques, esferobalones, bolster, sillas, etc. Cada postura \"asana\" es un medio para llegar a la meta; despertar tu poder interior garantiza que todos los beneficios se manifiesten plenamente.",
    },
    {
      title: "Hacer consciente lo Inconsciente",
      body:
        "Tú eres unic@ y tienes el poder de crear tu propia realidad. En nuestra visión no existe la palabra imposible. Te compartimos las herramientas y estrategias para hacer posible todo lo que te propongas.",
    },
    {
      title: "Linaje: El Hilo Dorado de la Enseñanza Sagrada",
      body:
        "Prácticas de sabiduría, con orígenes milenarios que se mantienen vigentes a través de la transmisión viva de maestros y discípulos, docentes y alumnos. Y hoy tú también eres parte de este camino de autorrealización. Sé parte de esta gran familia espiritual.",
    },
  ],
};
