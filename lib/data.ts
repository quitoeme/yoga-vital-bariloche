// Datos centralizados de Yoga Vital Bariloche con Rashi.
// Editá este archivo y se actualiza toda la landing.

export const site = {
  name: "Yoga Vital Bariloche",
  teacher: "Rashi",
  teacherFullName: "Rashi Natha (Ricardo Alzamendi)",
  tagline: "Yoga terapéutico al pie de los Andes",
  description:
    "Una práctica que une el yoga ancestral con el Ayurveda. Adapta la postura a tu cuerpo, no tu cuerpo a la postura.",
  address: "Av. San Martín 586, 1° B · San Carlos de Bariloche",
  city: "San Carlos de Bariloche, Patagonia",
  email: "bariloche@yogavital.com.ar",
  whatsapp: "5492944796273", // formato internacional sin + ni espacios
  whatsappDisplay: "+54 9 294 479-6273",
  instagram: "@yogavitalbariloche",
  facebook: "Ayur.Yoga.Vital.Bariloche",
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
    title: "Yoga Vital",
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
    title: "Yoga Terapéutico",
    subtitle: "Cuerpo que necesita escucha",
    description:
      "Rutinas específicas para columna, articulaciones, hipertensión, estrés o post-rehabilitación. Trabajo individualizado dentro del grupo.",
    intensity: 1,
    duration: "75 min",
    forWho: "Recuperación · adultos mayores",
    icon: "leaf",
  },
  {
    id: "uccara",
    title: "Uccara® · Vital Energético",
    subtitle: "Despertar la energía latente",
    description:
      "Técnica de movilización energética propia de la escuela. Movimientos rítmicos, sonido y respiración para despejar y vitalizar.",
    intensity: 3,
    duration: "60 min",
    forWho: "Práctica activa",
    icon: "sun",
  },
  {
    id: "meditacion",
    title: "Meditación y Gongs",
    subtitle: "Bajar el ruido",
    description:
      "Práctica de meditación guiada que cierra con baño sonoro de gongs y cuencos. Sales como si hubieras dormido un día entero.",
    intensity: 1,
    duration: "60 min",
    forWho: "Todos los niveles",
    icon: "moon",
  },
  {
    id: "embarazo",
    title: "Yoga en el Embarazo",
    subtitle: "Acompañar el proceso",
    description:
      "Posturas, respiración y meditación adaptadas a cada trimestre. Prepara cuerpo y mente para el parto consciente.",
    intensity: 1,
    duration: "60 min",
    forWho: "Embarazo desde la semana 12",
    icon: "wave",
  },
  {
    id: "adultos",
    title: "Yoga para Adultos Mayores",
    subtitle: "Movilidad y autonomía",
    description:
      "Práctica con silla y de pie. Movilidad articular, equilibrio, memoria corporal y respiración. Sin acrobacias.",
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

export const schedule: ScheduleSlot[] = [
  { day: "Lun", start: "10:00", end: "11:15", classId: "vital", groupName: "Grupo Mañana", spotsLeft: 3 },
  { day: "Lun", start: "18:30", end: "19:45", classId: "uccara", groupName: "Grupo Uccara", spotsLeft: 2 },
  { day: "Lun", start: "20:00", end: "21:00", classId: "meditacion", groupName: "Cierre del día", spotsLeft: 6 },
  { day: "Mar", start: "10:00", end: "11:15", classId: "terapeutico", groupName: "Terapéutico AM", spotsLeft: 1 },
  { day: "Mar", start: "16:00", end: "17:00", classId: "adultos", groupName: "Adultos mayores", spotsLeft: 5 },
  { day: "Mar", start: "18:30", end: "19:45", classId: "vital", groupName: "Vital tarde", spotsLeft: 4 },
  { day: "Mié", start: "10:00", end: "11:15", classId: "vital", groupName: "Grupo Mañana", spotsLeft: 3 },
  { day: "Mié", start: "17:30", end: "18:30", classId: "embarazo", groupName: "Embarazo", spotsLeft: 4 },
  { day: "Mié", start: "19:00", end: "20:15", classId: "uccara", groupName: "Grupo Uccara", spotsLeft: 0 },
  { day: "Jue", start: "10:00", end: "11:15", classId: "terapeutico", groupName: "Terapéutico AM", spotsLeft: 2 },
  { day: "Jue", start: "18:30", end: "19:45", classId: "vital", groupName: "Vital tarde", spotsLeft: 5 },
  { day: "Vie", start: "10:00", end: "11:15", classId: "vital", groupName: "Grupo Mañana", spotsLeft: 4 },
  { day: "Vie", start: "19:00", end: "20:30", classId: "meditacion", groupName: "Gongs · Cierre semana", spotsLeft: 8 },
  { day: "Sáb", start: "10:00", end: "11:30", classId: "uccara", groupName: "Sábado vital", spotsLeft: 6 },
];

export const days: ScheduleSlot["day"][] = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  format: string;
  startDate: string;
  description: string;
  highlights: string[];
  level: "Instructorado" | "Profesorado" | "Especialización";
};

export const courses: Course[] = [
  {
    id: "instructorado",
    title: "Instructorado de Yoga Vital",
    subtitle: "Primer paso para dar clase",
    duration: "1 año · 250 hs",
    format: "Presencial · Sábados",
    startDate: "Inicio: 8 de agosto de 2026",
    level: "Instructorado",
    description:
      "Formación completa para enseñar Yoga Vital. Anatomía aplicada, técnica de asanas, pranayama, didáctica y prácticas docentes supervisadas.",
    highlights: [
      "Certificación reconocida por la Unión Argentina de Yoga",
      "Prácticas docentes desde el mes 6",
      "Material de estudio incluido",
      "Becas parciales disponibles",
    ],
  },
  {
    id: "profesorado",
    title: "Profesorado Ayur Yoga Terapéutico",
    subtitle: "Segundo nivel · Orientación clínica",
    duration: "2 años · 500 hs",
    format: "Híbrido · Encuentros mensuales",
    startDate: "Inicio: marzo 2027",
    level: "Profesorado",
    description:
      "Para quienes ya tienen instructorado. Enfoque terapéutico: columna, articulaciones, hipertensión, embarazo, salud mental. Trabajo con casos reales.",
    highlights: [
      "Diploma internacional Ayur Yoga Vital",
      "Trabajo final con casos clínicos",
      "Pasantía en el centro Bariloche",
      "Ayurveda aplicada al yoga",
    ],
  },
  {
    id: "especializacion-embarazo",
    title: "Especialización en Yoga para el Embarazo",
    subtitle: "Para instructorxs ya formadxs",
    duration: "4 meses · 80 hs",
    format: "Intensivo · Fines de semana",
    startDate: "Próxima cohorte: septiembre 2026",
    level: "Especialización",
    description:
      "Profundización en la fisiología del embarazo, adaptación de prácticas por trimestre, preparación para el parto y posparto.",
    highlights: [
      "Cupo limitado a 15 personas",
      "Materno-puericultura aplicada",
      "Casos y observación de clases",
    ],
  },
];

export type Workshop = {
  id: string;
  title: string;
  recurrence: string;
  nextDate: string;
  duration: string;
  description: string;
  price: string;
};

export const workshops: Workshop[] = [
  {
    id: "respiracion-vital",
    title: "Respiración Vital · Pranayama",
    recurrence: "Mensual · Primer sábado",
    nextDate: "Sábado 6 de junio · 10:00 hs",
    duration: "2 hs",
    description:
      "Las cuatro respiraciones esenciales del yoga. Bandhas, kumbhakas y aplicación a la vida cotidiana.",
    price: "$ 18.000",
  },
  {
    id: "mandalas",
    title: "Mandalas y Geometría Sagrada",
    recurrence: "Mensual · Tercer domingo",
    nextDate: "Domingo 21 de junio · 15:00 hs",
    duration: "3 hs",
    description:
      "Práctica meditativa de creación de mandalas con tinta y pigmentos naturales. Materiales incluidos.",
    price: "$ 22.000",
  },
  {
    id: "chakras",
    title: "Ciclo Diksha · Los 7 Chakras",
    recurrence: "Cada 6 semanas · Un chakra por encuentro",
    nextDate: "Sábado 13 de junio · Anahata (corazón)",
    duration: "4 hs",
    description:
      "Ciclo de siete encuentros para recorrer cada chakra desde la teoría, la práctica y el sonido.",
    price: "$ 28.000 por encuentro",
  },
  {
    id: "reiki",
    title: "Iniciación a Reiki Nivel I",
    recurrence: "Cada dos meses",
    nextDate: "Sábado 11 y domingo 12 de julio",
    duration: "Fin de semana intensivo",
    description:
      "Iniciación tradicional, historia, prácticas de autotratamiento y tratamiento a otrxs.",
    price: "$ 65.000",
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
  fullName: "Ricardo Alzamendi · Rashi Natha",
  role: "Coordinador regional Bariloche · Yoga Vital",
  bio: [
    "Rashi se formó como Profesor de Ayur Yoga Vital con Jorge Bidondo (Dev Hansa Natha) y lleva más de quince años dando clase en Bariloche.",
    "Su mirada es terapéutica: trabaja con personas que llegan con dolor de espalda, ansiedad, hipertensión, embarazo o simplemente con ganas de habitar el cuerpo de otra forma.",
    "Coordina la sede Bariloche de la Escuela Ayur Yoga Vital, dicta el instructorado, profesorado y las especializaciones, y guía baños de gong frente al lago Nahuel Huapi.",
  ],
  credentials: [
    "Profesor de Ayur Yoga Vital (Escuela Jorge Bidondo)",
    "Maestro de Reiki tradicional",
    "Operador en sonoterapia con gongs y cuencos",
    "Más de 15 años de práctica docente continua",
  ],
};

export const yogaVitalPhilosophy = {
  whatIs:
    "Yoga Vital es un sistema desarrollado en Argentina por Jorge Bidondo que fusiona el yoga clásico con los principios del Ayurveda. La práctica se adapta a la persona, no la persona a la práctica.",
  pillars: [
    {
      title: "Adaptación, no exigencia",
      body:
        "Usamos cinturones, bloques, almohadones y sillas. Cada postura se ajusta a tu cuerpo de hoy. No hay acrobacia que justifique el dolor.",
    },
    {
      title: "Mirada terapéutica",
      body:
        "Trabajamos sobre columna, articulaciones, respiración, sistema nervioso e hipertensión. El yoga como medicina preventiva, no como deporte.",
    },
    {
      title: "Cuatro funciones vitales",
      body:
        "Respiración consciente, movimiento corporal, relajación profunda y pensamiento positivo. Las cuatro se entrenan en cada clase.",
    },
    {
      title: "Linaje Natha Siddha",
      body:
        "La escuela bebe de la tradición Natha. Una práctica de raíz, sin esoterismo de marketing, con maestros formados durante décadas.",
    },
  ],
};
