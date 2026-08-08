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
  address: "Campichuelo 734, Planta Baja A · San Carlos de Bariloche",
  streetAddress: "Campichuelo 734, Planta Baja A",
  locality: "San Carlos de Bariloche",
  region: "Río Negro",
  postalCode: "8400",
  country: "AR",
  // Coordenadas de Campichuelo 734, San Carlos de Bariloche (geocodificado con
  // Nominatim/OpenStreetMap).
  geo: { lat: -41.1378407, lng: -71.3179502 },
  city: "San Carlos de Bariloche, Patagonia",
  email: "ayvisbariloche@gmail.com",
  whatsapp: "5492944796273", // formato internacional sin + ni espacios
  whatsappDisplay: "+54 9 294 479-6273",
  phoneE164: "+5492944796273",
  instagram: "@yoguirashi",
  instagramUrl: "https://www.instagram.com/yoguirashi",
  facebook: "Ayur.Yoga.Vital.Bariloche",
  facebookUrl: "https://www.facebook.com/Ayur.Yoga.Vital.Bariloche",
  founded: 2009,
  lineage:
    "Escuela Ayur Yoga Vital International School · Coordinador Rashi Nath - Ricardo Alzamendi",
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
    subtitle: "Despierta tu Potencial",
    description:
      "Prácticas para el desarrollo de tu fuerza, flexibilidad y elongación: todo lo que tu cuerpo necesita. Prácticas especiales para desarrollar tu capacidad de adaptación, flexibilidad y fortaleza interior. El uso de elementos de ayuda te ayuda a ver un mundo de posibilidades.",
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
    a: "En Ayur Yoga Vital Bariloche, en pleno centro de San Carlos de Bariloche (Campichuelo 734, Planta Baja A), con Rashi. Tenemos clases de lunes a viernes en distintos horarios de mañana, mediodía, tarde y noche.",
  },
  {
    q: "¿Qué es el Ayur Yoga Vital?",
    a: "Ayur Yoga Vital es un sistema compuesto por prácticas terapéuticas que manifiestan la esencia de la enseñanza yóguica milenaria, adaptada en sus formas a las necesidades del mundo globalizado. La práctica yóguica (sadhana) se revitaliza en Occidente a través de una sistematización terapéutica que tiene en cuenta las necesidades y posibilidades de cada practicante. Cada alumn@ realiza su práctica con la guía de un profesional. Comprender y respetar cuál es el ritmo adecuado para cada individuo es uno de nuestros grandes valores: inspiramos con el ejemplo, y la calidad amorosa de nuestros docentes nos respalda.",
  },
  {
    q: "¿Necesito experiencia previa para empezar?",
    a: "No. Cada persona realiza las dinámicas propuestas de acuerdo a su posibilidad y a su propio ritmo. Las propuestas son muy cuidadas y se adaptan a cada practicante. Si nunca tomaste una clase, te acompañamos, guiándote desde la primera clase. Podés venir a una clase libre para probar antes de sumarte.",
  },
  {
    q: "¿Hacen Ayur yoga terapéutico?",
    a: "Sí. Ofrecemos prácticas específicas para abordar cualquier problemática y patología del cuerpo y la mente. Somos especialistas en estrés crónico, ataques de pánico, fobias y miedos, y desequilibrios del sistema nervioso; problemas en la columna vertebral, articulaciones, sistema digestivo, etc. El abordaje terapéutico es uno de los pilares de nuestra escuela.",
  },
  {
    q: "¿Qué días y horarios hay clases de yoga?",
    a: "Hay clases de lunes a viernes. Lunes y miércoles a las 14:15 y 16:30; martes y viernes a las 9:30 y 11:00; y martes y jueves a las 18:00 y 19:30. Cada clase dura aproximadamente 60 minutos.",
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
    subtitle: "Para profesorxs formadxs",
    format: "Presencial y online",
    startDate: "Inicio: marzo y septiembre",
    level: "Especialización",
    description:
      "Enfoque terapéutico aplicado desde la práctica a cada una de las necesidades de cada situación.",
    highlights: [
      "Elegís la etapa o el enfoque que más te interesa",
      "Tu posibilidad de hacer lo que te apasiona lo encontrás aquí",
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
];

export type Event = {
  id: string;
  title: string;
  // Patrón de recurrencia (ya no son fechas puntuales con cupo limitado).
  date: string;
  time: string;
  type: "Baño de Gong" | "Luna" | "Retiro" | "Encuentro";
  description: string;
  cover: string;
};

export const events: Event[] = [
  {
    id: "gong-nidra",
    title: "Baño de Gong y Nidra",
    date: "2do domingo de cada mes",
    time: "19 hs",
    type: "Baño de Gong",
    description:
      "Una hora y media de inmersión meditativa y sonora con gongs, cuencos tibetanos y mantras. Un viaje al mundo de las percepciones sutiles del ser.",
    cover:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "equinoccios-solsticios",
    title: "Equinoccios y Solsticios · Días Mágicos",
    date: "En cada equinoccio y solsticio",
    time: "Fecha a confirmar",
    type: "Encuentro",
    description:
      "En cada solsticio y equinoccio se generan oportunidades para resetear nuestros sistemas. Práctica de Ayur Yoga a través de ceremonias ancestrales para cerrar ciclos y dar la bienvenida a lo nuevo, en un entorno natural mágico.",
    // TODO(Rashi): pidió cambiar esta foto por una de personas meditando en
    // la naturaleza — este es un placeholder, reemplazar cuando tengan una.
    cover:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retiro-lago-steffen",
    title: "Resets de Dos Días Completos · Retiro de Fin de Semana en Lago Steffen",
    date: "Fin de semana (fecha a confirmar)",
    time: "Dos días completos",
    type: "Retiro",
    description:
      "Cabañas frente al lago, prácticas matinales, caminatas, comida vegetariana de estación y silencio.",
    cover:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "circulo-sabios",
    title: "Círculo de Mujeres y Hombres Sabios",
    date: "Lunas llenas y lunas nuevas",
    time: "Fecha a confirmar",
    type: "Luna",
    description:
      "Encuentro mensual de Satsang: compartir sabiduría, prácticas yóguicas, danza y masaje.",
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
