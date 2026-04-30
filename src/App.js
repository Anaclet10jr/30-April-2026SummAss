import React, { useEffect, useMemo, useState } from "react";
import "./index.css";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Francais" },
  { code: "rw", label: "Kinyarwanda" },
];

const COPY = {
  en: {
    appName: "CareFlow Patient",
    tagline: "Book, check in, and manage care from one place.",
    patient: "Patient",
    admin: "Admin",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    step: "Step",
    of: "of",
    symptoms: "Symptoms",
    doctor: "Doctor",
    booking: "Booking",
    confirmed: "Confirmed",
    location: "Location",
    checkIn: "Check-in",
    waiting: "Waiting",
    summary: "Summary",
    followUp: "Follow-up",
    payment: "Payment",
    symptomTitle: "What brings you in?",
    symptomHelp: "Choose symptoms so the care team can route you to the right clinician.",
    extraNotes: "Extra notes",
    notesPlaceholder: "When did it start? Any allergies or current medication?",
    findDoctors: "Find available doctors",
    chooseDoctor: "Choose a doctor",
    doctorHelp: "These clinicians match your symptoms and accept same-day appointments.",
    rating: "Rating",
    selectTime: "Select appointment time",
    pickTime: "Pick a time",
    timeHelp: "Select the slot that works best for your visit today.",
    confirmBooking: "Confirm booking",
    appointmentBooked: "Your appointment is booked.",
    visitCode: "Visit code",
    viewLocation: "View clinic location",
    clinicLocation: "Clinic location",
    mapHelp: "Use this map preview and address before traveling to the clinic.",
    openMaps: "Open in Google Maps",
    startCheckIn: "Start check-in",
    checkInTitle: "Check in",
    checkInHelp: "Confirm the essentials before the care team calls you.",
    insurance: "Insurance details are current",
    insuranceHelp: "Your saved policy will be shared with the front desk.",
    consent: "Consent to treatment",
    consentHelp: "Allows the clinic to begin today's consultation.",
    joinWaiting: "Join waiting room",
    waitingRoom: "Waiting room",
    waitingHelp: "Stay nearby. The queue updates automatically.",
    patientsAhead: "Patients ahead",
    doctorReady: "The doctor is ready for you.",
    estimate: "Estimated call time is under 10 minutes.",
    openSummary: "Open visit summary",
    visitSummary: "Visit summary",
    summaryHelp: "Review what was captured for your care record.",
    clinician: "Clinician",
    noNotes: "No extra notes added.",
    setReminders: "Set medication reminders",
    followTitle: "Follow-up plan",
    followHelp: "Medication and next steps are ready for the next few days.",
    newVisit: "Start a new visit",
    continueToPayment: "Continue to payment",
    paymentTitle: "Pay for medication and service",
    paymentHelp: "Choose how you want to pay for today&apos;s consultation and medication.",
    serviceFee: "Service fee",
    medicationFee: "Medication",
    totalDue: "Total due",
    paymentMethod: "Payment method",
    mobileMoney: "Mobile money",
    cardPayment: "Card",
    cashPayment: "Cash at clinic",
    phoneOrCard: "Mobile number or card reference",
    payNow: "Pay now",
    paymentComplete: "Payment completed",
    serviceRecords: "Service records",
    patientName: "Patient",
    qualityRating: "Quality rating",
    todayRecords: "Today",
    allTimeRecords: "All time",
    doctorActivity: "Doctor activity",
    servicesGiven: "Services given",
    downloadSlip: "Download care slip",
    careSlip: "Care slip",
    diagnosis: "Diagnosis",
    testsPerformed: "Tests performed",
    medicationGiven: "Medication given",
    pillInstructions: "Pill instructions",
    bloodPressure: "Blood pressure",
    temperature: "Temperature",
    pulse: "Pulse",
    adminLogin: "Admin sign in",
    username: "Username",
    password: "Password",
    signIn: "Sign in",
    signOut: "Sign out",
    loginHelp: "Use the clinic admin credentials to configure the dashboard.",
    invalidLogin: "Invalid username or password.",
    adminTitle: "Admin portal",
    adminHelp: "Configure doctors, clinic location, queue, and appointment slots.",
    clinicName: "Clinic name",
    address: "Address",
    city: "City",
    phone: "Phone",
    doctorPhone: "Doctor phone",
    clinicPhone: "Clinic phone below map",
    latitude: "Latitude",
    longitude: "Longitude",
    mapEmbedUrl: "Google map embed URL",
    mapEmbedHelp: "Paste a Google Maps embed link, or leave it empty and the app will use latitude/longitude.",
    locationNote: "Location note below map",
    queue: "Queue",
    appointmentSlots: "Appointment slots",
    addSlot: "Add slot",
    doctorName: "Doctor name",
    specialty: "Specialty",
    waitTime: "Wait time",
    addDoctor: "Add doctor",
    remove: "Remove",
    saveDoctor: "Add doctor",
    carePractices: "Care practices",
    carePracticesHelp: "Simple habits that support recovery and make daily care easier.",
    practiceTitle: "Practice title",
    practiceExample: "Example",
    addPractice: "Add practice",
    diseases: "Diseases",
    diseasesHelp: "Common conditions patients can review before or after a visit.",
    diseaseName: "Disease name",
    diseaseDescription: "Description and advice",
    addDisease: "Add disease",
  },
  fr: {
    appName: "CareFlow Patient",
    tagline: "Reservez, enregistrez-vous et suivez vos soins au meme endroit.",
    patient: "Patient",
    admin: "Admin",
    language: "Langue",
    theme: "Theme",
    light: "Clair",
    dark: "Sombre",
    step: "Etape",
    of: "sur",
    symptoms: "Symptomes",
    doctor: "Medecin",
    booking: "Rendez-vous",
    confirmed: "Confirme",
    location: "Localisation",
    checkIn: "Accueil",
    waiting: "Attente",
    summary: "Resume",
    followUp: "Suivi",
    payment: "Paiement",
    symptomTitle: "Qu'est-ce qui vous amene?",
    symptomHelp: "Choisissez vos symptomes pour orienter l'equipe vers le bon clinicien.",
    extraNotes: "Notes",
    notesPlaceholder: "Quand cela a commence? Allergies ou medicaments actuels?",
    findDoctors: "Voir les medecins disponibles",
    chooseDoctor: "Choisir un medecin",
    doctorHelp: "Ces cliniciens correspondent a vos symptomes et acceptent des rendez-vous aujourd'hui.",
    rating: "Note",
    selectTime: "Choisir l'heure",
    pickTime: "Choisir une heure",
    timeHelp: "Selectionnez le creneau qui vous convient aujourd'hui.",
    confirmBooking: "Confirmer",
    appointmentBooked: "Votre rendez-vous est confirme.",
    visitCode: "Code de visite",
    viewLocation: "Voir la localisation",
    clinicLocation: "Localisation de la clinique",
    mapHelp: "Utilisez cet apercu et cette adresse avant de vous deplacer.",
    openMaps: "Ouvrir dans Google Maps",
    startCheckIn: "Commencer l'accueil",
    checkInTitle: "Accueil",
    checkInHelp: "Confirmez les informations essentielles avant l'appel de l'equipe.",
    insurance: "Les details d'assurance sont a jour",
    insuranceHelp: "Votre police enregistree sera partagee avec l'accueil.",
    consent: "Consentement aux soins",
    consentHelp: "Autorise la clinique a commencer la consultation.",
    joinWaiting: "Rejoindre la salle d'attente",
    waitingRoom: "Salle d'attente",
    waitingHelp: "Restez proche. La file se met a jour automatiquement.",
    patientsAhead: "Patients devant vous",
    doctorReady: "Le medecin est pret.",
    estimate: "Temps d'appel estime: moins de 10 minutes.",
    openSummary: "Ouvrir le resume",
    visitSummary: "Resume de visite",
    summaryHelp: "Verifiez les informations ajoutees a votre dossier.",
    clinician: "Clinicien",
    noNotes: "Aucune note ajoutee.",
    setReminders: "Definir les rappels",
    followTitle: "Plan de suivi",
    followHelp: "Les medicaments et prochaines etapes sont prets.",
    newVisit: "Nouvelle visite",
    continueToPayment: "Continuer au paiement",
    paymentTitle: "Payer les medicaments et le service",
    paymentHelp: "Choisissez comment payer la consultation et les medicaments d'aujourd'hui.",
    serviceFee: "Frais de service",
    medicationFee: "Medicaments",
    totalDue: "Total a payer",
    paymentMethod: "Methode de paiement",
    mobileMoney: "Mobile money",
    cardPayment: "Carte",
    cashPayment: "Especes a la clinique",
    phoneOrCard: "Numero mobile ou reference carte",
    payNow: "Payer",
    paymentComplete: "Paiement effectue",
    serviceRecords: "Dossiers de service",
    patientName: "Patient",
    qualityRating: "Note qualite",
    todayRecords: "Aujourd'hui",
    allTimeRecords: "Tout le temps",
    doctorActivity: "Activite des medecins",
    servicesGiven: "Services donnes",
    downloadSlip: "Telecharger le recu de soins",
    careSlip: "Recu de soins",
    diagnosis: "Diagnostic",
    testsPerformed: "Tests effectues",
    medicationGiven: "Medicaments donnes",
    pillInstructions: "Instructions des comprimes",
    bloodPressure: "Tension arterielle",
    temperature: "Temperature",
    pulse: "Pouls",
    adminLogin: "Connexion admin",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    signIn: "Se connecter",
    signOut: "Se deconnecter",
    loginHelp: "Utilisez les identifiants admin de la clinique pour configurer le tableau de bord.",
    invalidLogin: "Nom d'utilisateur ou mot de passe invalide.",
    adminTitle: "Portail admin",
    adminHelp: "Configurez les medecins, la localisation, la file et les horaires.",
    clinicName: "Nom de la clinique",
    address: "Adresse",
    city: "Ville",
    phone: "Telephone",
    doctorPhone: "Telephone du medecin",
    clinicPhone: "Telephone de la clinique sous la carte",
    latitude: "Latitude",
    longitude: "Longitude",
    mapEmbedUrl: "Lien Google Maps integre",
    mapEmbedHelp: "Collez un lien Google Maps integre, ou laissez vide pour utiliser latitude/longitude.",
    locationNote: "Note de localisation sous la carte",
    queue: "File",
    appointmentSlots: "Creneaux",
    addSlot: "Ajouter",
    doctorName: "Nom du medecin",
    specialty: "Specialite",
    waitTime: "Attente",
    addDoctor: "Ajouter un medecin",
    remove: "Supprimer",
    saveDoctor: "Ajouter",
    carePractices: "Pratiques de soin",
    carePracticesHelp: "Des habitudes simples pour soutenir la guerison et faciliter les soins.",
    practiceTitle: "Titre de la pratique",
    practiceExample: "Exemple",
    addPractice: "Ajouter une pratique",
    diseases: "Maladies",
    diseasesHelp: "Conditions courantes que les patients peuvent consulter avant ou apres une visite.",
    diseaseName: "Nom de la maladie",
    diseaseDescription: "Description et conseil",
    addDisease: "Ajouter une maladie",
  },
  rw: {
    appName: "CareFlow Patient",
    tagline: "Fata gahunda, wiyandikishe, kandi ukurikirane ubuvuzi hamwe.",
    patient: "Umurwayi",
    admin: "Umuyobozi",
    language: "Ururimi",
    theme: "Insanganyamatsiko",
    light: "Umucyo",
    dark: "Umwijima",
    step: "Intambwe",
    of: "kuri",
    symptoms: "Ibimenyetso",
    doctor: "Muganga",
    booking: "Gahunda",
    confirmed: "Byemejwe",
    location: "Aho biri",
    checkIn: "Kwiyandikisha",
    waiting: "Gutegereza",
    summary: "Incamake",
    followUp: "Gukurikirana",
    payment: "Kwishyura",
    symptomTitle: "Ni iki kikuzanye?",
    symptomHelp: "Hitamo ibimenyetso kugira ngo ikipe ikuyobore kuri muganga ukwiye.",
    extraNotes: "Ibisobanuro",
    notesPlaceholder: "Byatangiye ryari? Ufite allergie cyangwa imiti ufata?",
    findDoctors: "Shaka abaganga bahari",
    chooseDoctor: "Hitamo muganga",
    doctorHelp: "Aba baganga bahuye n'ibimenyetso byawe kandi bafite gahunda uyu munsi.",
    rating: "Amanota",
    selectTime: "Hitamo isaha",
    pickTime: "Hitamo igihe",
    timeHelp: "Hitamo isaha ikubereye uyu munsi.",
    confirmBooking: "Emeza gahunda",
    appointmentBooked: "Gahunda yawe yemejwe.",
    visitCode: "Kode yo gusura",
    viewLocation: "Reba aho ivuriro riri",
    clinicLocation: "Aho ivuriro riri",
    mapHelp: "Koresha iyi karita n'aderesi mbere yo kujya ku ivuriro.",
    openMaps: "Fungura muri Google Maps",
    startCheckIn: "Tangira kwiyandikisha",
    checkInTitle: "Kwiyandikisha",
    checkInHelp: "Emeza iby'ingenzi mbere y'uko ikipe iguhamagara.",
    insurance: "Ubwishingizi buri ku gihe",
    insuranceHelp: "Amakuru y'ubwishingizi azasangizwa reception.",
    consent: "Kwemera kuvurwa",
    consentHelp: "Byemerera ivuriro gutangira consultation.",
    joinWaiting: "Jya mu cyumba cyo gutegereza",
    waitingRoom: "Icyumba cyo gutegereza",
    waitingHelp: "Guma hafi. Umurongo uvugururwa.",
    patientsAhead: "Abarwayi bakuri imbere",
    doctorReady: "Muganga ariteguye.",
    estimate: "Igihe cyo guhamagarwa kiri munsi y'iminota 10.",
    openSummary: "Fungura incamake",
    visitSummary: "Incamake y'uruzinduko",
    summaryHelp: "Reba ibyanditswe muri dosiye yawe.",
    clinician: "Umuvuzi",
    noNotes: "Nta bisobanuro byongeweho.",
    setReminders: "Shyiraho kwibutsa imiti",
    followTitle: "Gahunda yo gukurikirana",
    followHelp: "Imiti n'intambwe zikurikira birateguye.",
    newVisit: "Tangira uruzinduko rushya",
    continueToPayment: "Komeza wishyure",
    paymentTitle: "Ishyura imiti na service",
    paymentHelp: "Hitamo uburyo bwo kwishyura consultation n'imiti y'uyu munsi.",
    serviceFee: "Ikiguzi cya service",
    medicationFee: "Imiti",
    totalDue: "Igiteranyo",
    paymentMethod: "Uburyo bwo kwishyura",
    mobileMoney: "Mobile money",
    cardPayment: "Ikarita",
    cashPayment: "Cash ku ivuriro",
    phoneOrCard: "Numero ya mobile cyangwa ikarita",
    payNow: "Ishyura",
    paymentComplete: "Kwishyura byakozwe",
    serviceRecords: "Raporo za service",
    patientName: "Umurwayi",
    qualityRating: "Amanota ya service",
    todayRecords: "Uyu munsi",
    allTimeRecords: "Igihe cyose",
    doctorActivity: "Ibikorwa bya muganga",
    servicesGiven: "Service zatanzwe",
    downloadSlip: "Kuramo urupapuro rw'ubuvuzi",
    careSlip: "Urupapuro rw'ubuvuzi",
    diagnosis: "Icyagaragaye",
    testsPerformed: "Ibipimo byakozwe",
    medicationGiven: "Imiti yatanzwe",
    pillInstructions: "Uko imiti ifatwa",
    bloodPressure: "Umuvuduko w'amaraso",
    temperature: "Ubushyuhe",
    pulse: "Umutima",
    adminLogin: "Kwinjira kwa admin",
    username: "Izina ukoresha",
    password: "Ijambo banga",
    signIn: "Injira",
    signOut: "Sohoka",
    loginHelp: "Koresha konti ya admin y'ivuriro kugira ngo uhindure dashboard.",
    invalidLogin: "Izina cyangwa ijambo banga sibyo.",
    adminTitle: "Portal y'umuyobozi",
    adminHelp: "Hindura abaganga, aho ivuriro riri, umurongo, n'amasaha.",
    clinicName: "Izina ry'ivuriro",
    address: "Aderesi",
    city: "Umujyi",
    phone: "Telefone",
    doctorPhone: "Telefone ya muganga",
    clinicPhone: "Telefone y'ivuriro munsi ya karita",
    latitude: "Latitude",
    longitude: "Longitude",
    mapEmbedUrl: "Link ya Google Maps embed",
    mapEmbedHelp: "Shyiramo link ya Google Maps embed, cyangwa ubireke ubusa ukoreshe latitude/longitude.",
    locationNote: "Ibisobanuro biri munsi ya karita",
    queue: "Umurongo",
    appointmentSlots: "Amasaha",
    addSlot: "Ongeraho",
    doctorName: "Izina rya muganga",
    specialty: "Umwihariko",
    waitTime: "Gutegereza",
    addDoctor: "Ongeraho muganga",
    remove: "Kuraho",
    saveDoctor: "Ongeraho",
    carePractices: "Imyitozo yo kwita ku buzima",
    carePracticesHelp: "Ingeso zoroshye zifasha gukira no koroshya kwiyitaho.",
    practiceTitle: "Umutwe w'imyitozo",
    practiceExample: "Urugero",
    addPractice: "Ongeraho imyitozo",
    diseases: "Indwara",
    diseasesHelp: "Indwara zisanzwe umurwayi ashobora gusoma mbere cyangwa nyuma yo gusura.",
    diseaseName: "Izina ry'indwara",
    diseaseDescription: "Ibisobanuro n'inama",
    addDisease: "Ongeraho indwara",
  },
};

const symptomOptions = [
  { id: "fever", en: "Fever", fr: "Fievre", rw: "Umuriro" },
  { id: "cough", en: "Cough", fr: "Inkorora", rw: "Inkorora" },
  { id: "headache", en: "Headache", fr: "Mal de tete", rw: "Kubabara umutwe" },
  { id: "fatigue", en: "Fatigue", fr: "Fatigue", rw: "Umunaniro" },
  { id: "throat", en: "Sore throat", fr: "Mal de gorge", rw: "Kubabara mu muhogo" },
  { id: "chest", en: "Chest tightness", fr: "Gene thoracique", rw: "Kubabara mu gatuza" },
  { id: "malaria", en: "Malaria", fr: "Paludisme", rw: "Malariya" },
  { id: "typhoid", en: "Typhoid Fever", fr: "Fievre typhoide", rw: "Tifoyide" },
  { id: "flu", en: "Influenza (Flu)", fr: "Grippe", rw: "Grippe" },
  { id: "covid", en: "COVID-19", fr: "COVID-19", rw: "COVID-19" },
  { id: "pneumonia", en: "Pneumonia", fr: "Pneumonie", rw: "Umusonga" },
  { id: "bronchitis", en: "Bronchitis", fr: "Bronchite", rw: "Bronchite" },
  { id: "asthma", en: "Asthma", fr: "Asthme", rw: "Asima" },
  { id: "tb", en: "Tuberculosis", fr: "Tuberculose", rw: "Igituntu" },
  { id: "ulcer", en: "Stomach Ulcer", fr: "Ulcere", rw: "Igisebe mu gifu" },
  { id: "gastritis", en: "Gastritis", fr: "Gastrite", rw: "Indwara yo mu gifu" },
  { id: "migraine", en: "Migraine", fr: "Migraine", rw: "Kurwara umutwe bikabije" },
  { id: "hypertension", en: "Hypertension", fr: "Hypertension", rw: "Umuvuduko w'amaraso mwinshi" },
  { id: "diabetes", en: "Diabetes", fr: "Diabete", rw: "Diyabete" },
  { id: "allergy", en: "Allergic Reaction", fr: "Allergie", rw: "Allergie" },
  { id: "sinusitis", en: "Sinusitis", fr: "Sinusite", rw: "Sinusite" },
  { id: "ear_infection", en: "Ear Infection", fr: "Infection de l'oreille", rw: "Indwara y'ugutwi" },
  { id: "kidney", en: "Kidney Infection", fr: "Infection renale", rw: "Indwara y'impyiko" },
  { id: "uti", en: "Urinary Tract Infection", fr: "Infection urinaire", rw: "Indwara y'inkari" },
  { id: "skin", en: "Skin Infection", fr: "Infection cutanee", rw: "Indwara y'uruhu" },
  { id: "anemia", en: "Anemia", fr: "Anemie", rw: "Kubura amaraso" },
];

const initialDoctors = [
  {
    id: 1,
    name: "Dr. MUNYAWERA Anaclet",
    specialty: "Family medicine",
    rating: "4.9",
    wait: "12 min",
    phone: "+250 794 703 700",
  },
  {
    id: 2,
    name: "Dr.KABAYIZA MANZI Olivier",
    specialty: "Respiratory care",
    rating: "4.8",
    wait: "18 min",
    phone: "+250 788 100 102",
  },
  {
    id: 3,
    name: "Dr. INGABIRE Fanny",
    specialty: "Internal medicine",
    rating: "4.7",
    wait: "24 min",
    phone: "+250 788 100 103",
  },

  {
    id: 3,
    name: "Dr. SANGWA INEZA Sophie",
    specialty: "Internal medicine",
    rating: "4.7",
    wait: "24 min",
    phone: "+250 788 100 104",
  },
];

const initialClinic = {
  name: "Kigali Health Center",
  address: "KN 5 Road, Nyarugenge",
  city: "Kigali",
  phone: "+250 794 703 700",
  lat: "-1.9441",
  lng: "30.0619",
  mapEmbedUrl: "",
  locationNote: "Main entrance, second floor reception. Parking is available behind the building.",
};

const initialSlots = ["09:30", "10:15", "11:00", "14:30"];

const initialCarePractices = [
  {
    id: 1,
    title: "Hydration rhythm",
    example: "Drink a glass of water after waking up, at lunch, and before evening medication.",
  },
  {
    id: 2,
    title: "Medication routine",
    example: "Keep pills beside a meal reminder so doses are taken with food when required.",
  },
  {
    id: 3,
    title: "Recovery check",
    example: "Write down temperature, pain level, and sleep quality once per day.",
  },
];

const initialDiseases = [
  {
    id: 1,
    name: "Malaria",
    description: "Watch for fever, chills, headache, and fatigue. Seek testing quickly and take medication exactly as prescribed.",
  },
  {
    id: 2,
    name: "Diabetes",
    description: "Track blood sugar, take medicine consistently, and bring recent readings to each appointment.",
  },
  {
    id: 3,
    name: "Hypertension",
    description: "Check blood pressure regularly, reduce excess salt, and report chest pain or severe headache immediately.",
  },
];

const visitResults = {
  diagnosis: "Acute upper respiratory infection with mild dehydration risk",
  tests: ["Temperature check: 38.1 C", "Blood pressure: 118/76 mmHg", "Pulse: 84 bpm", "Rapid flu screen: Negative"],
  medication: [
    { name: "Amoxicillin", dose: "500mg", instructions: "Take one capsule at 08:00 and 20:00 for 5 days." },
    { name: "Ibuprofen", dose: "200mg", instructions: "Take after food only when pain or fever is present." },
  ],
};

const paymentItems = {
  service: 12000,
  medication: 8500,
};

const initialServiceRecords = [
  {
    id: 1,
    patient: "Jean Paul Kagabo",
    doctor: "Dr. Maya Patel",
    service: "Consultation, rapid flu screen, medication plan",
    amount: 20500,
    rating: 5,
    date: "Today",
  },
  {
    id: 2,
    patient: "Aline Mutesi",
    doctor: "Dr. Leon Carter",
    service: "Respiratory review and inhaler education",
    amount: 18000,
    rating: 4,
    date: "Today",
  },
  {
    id: 3,
    patient: "Eric Ndayisaba",
    doctor: "Dr. Sofia Nguyen",
    service: "Headache assessment and follow-up plan",
    amount: 22000,
    rating: 5,
    date: "All time",
  },
  {
    id: 4,
    patient: "Marie Ishimwe",
    doctor: "Dr. Maya Patel",
    service: "General consultation and lab review",
    amount: 19500,
    rating: 4,
    date: "All time",
  },
];

function t(language, key) {
  return COPY[language][key] || COPY.en[key] || key;
}

function buildCareSlip({ language, clinic, doctor, slot, symptoms, note }) {
  const lines = [
    t(language, "careSlip"),
    "==============================",
    `${t(language, "clinicName")}: ${clinic.name}`,
    `${t(language, "address")}: ${clinic.address}, ${clinic.city}`,
    `${t(language, "phone")}: ${clinic.phone}`,
    "",
    `${t(language, "doctor")}: ${doctor?.name || "-"}`,
    `${t(language, "doctorPhone")}: ${doctor?.phone || "-"}`,
    `${t(language, "booking")}: Today, ${slot || "-"}`,
    `${t(language, "visitCode")}: CF-2048`,
    "",
    `${t(language, "symptoms")}: ${symptoms || "-"}`,
    `${t(language, "extraNotes")}: ${note || t(language, "noNotes")}`,
    "",
    `${t(language, "diagnosis")}: ${visitResults.diagnosis}`,
    "",
    `${t(language, "testsPerformed")}:`,
    ...visitResults.tests.map((test) => `- ${test}`),
    "",
    `${t(language, "medicationGiven")}:`,
    ...visitResults.medication.map((item) => `- ${item.name} ${item.dose}`),
    "",
    `${t(language, "pillInstructions")}:`,
    ...visitResults.medication.map((item) => `- ${item.instructions}`),
  ];

  return lines.join("\n");
}

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function Shell({ children, language, setLanguage, theme, setTheme, mode, setMode }) {
  return (
    <main className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-900 transition dark:bg-slate-950 dark:text-slate-100 sm:py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-teal-600 dark:text-teal-300">
                {t(language, "appName")}
              </p>
              <h1 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
                {t(language, "tagline")}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Segmented
                value={mode}
                onChange={setMode}
                options={[
                  { value: "patient", label: t(language, "patient") },
                  { value: "admin", label: t(language, "admin") },
                ]}
              />
              <select
                aria-label={t(language, "language")}
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                {LANGUAGES.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="h-10 rounded-xl border border-slate-200 px-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {theme === "light" ? t(language, "dark") : t(language, "light")}
              </button>
            </div>
          </header>
          {children}
        </div>
      </div>
    </main>
  );
}

function Segmented({ options, value, onChange }) {
  return (
    <div className="grid h-10 grid-cols-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded-lg px-3 text-sm font-bold transition ${
            value === option.value
              ? "bg-white text-teal-700 shadow-sm dark:bg-slate-950 dark:text-teal-300"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Progress({ step, steps, language }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        <span>
          {t(language, "step")} {step + 1} {t(language, "of")} {steps.length}
        </span>
        <span>{steps[step]}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-teal-600 transition-all duration-500 dark:bg-teal-400"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

function PrimaryButton({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="mt-auto rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none dark:bg-teal-500 dark:hover:bg-teal-400 dark:disabled:bg-slate-700"
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      {children}
    </div>
  );
}

function PatientApp({
  language,
  doctors,
  clinic,
  slots,
  queueCount,
  carePractices,
  diseases,
}) {
  const steps = [
    t(language, "symptoms"),
    t(language, "doctor"),
    t(language, "booking"),
    t(language, "confirmed"),
    t(language, "location"),
    t(language, "checkIn"),
    t(language, "waiting"),
    t(language, "summary"),
    t(language, "followUp"),
    t(language, "payment"),
  ];

  const [step, setStep] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [note, setNote] = useState("");
  const [doctor, setDoctor] = useState(doctors[0]);
  const [slot, setSlot] = useState(slots[0] || "");
  const [insuranceReady, setInsuranceReady] = useState(false);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (!doctor && doctors.length > 0) {
      setDoctor(doctors[0]);
    }
  }, [doctor, doctors]);

  useEffect(() => {
    if (!slots.includes(slot)) {
      setSlot(slots[0] || "");
    }
  }, [slot, slots]);

  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));
  const restart = () => {
    setStep(0);
    setSelectedSymptoms([]);
    setNote("");
    setDoctor(doctors[0]);
    setSlot(slots[0] || "");
    setInsuranceReady(false);
    setConsent(false);
  };

  const screens = [
    <SymptomScreen
      language={language}
      selectedSymptoms={selectedSymptoms}
      setSelectedSymptoms={setSelectedSymptoms}
      note={note}
      setNote={setNote}
      onNext={next}
    />,
    <DoctorScreen language={language} doctors={doctors} doctor={doctor} setDoctor={setDoctor} onNext={next} />,
    <BookingScreen language={language} slots={slots} slot={slot} setSlot={setSlot} clinic={clinic} onNext={next} />,
    <ConfirmationScreen language={language} doctor={doctor} slot={slot} onNext={next} />,
    <LocationScreen language={language} clinic={clinic} onNext={next} />,
    <CheckInScreen
      language={language}
      insuranceReady={insuranceReady}
      setInsuranceReady={setInsuranceReady}
      consent={consent}
      setConsent={setConsent}
      onNext={next}
    />,
    <WaitingScreen language={language} queueCount={queueCount} onNext={next} />,
    <SummaryScreen
      language={language}
      selectedSymptoms={selectedSymptoms}
      note={note}
      doctor={doctor}
      clinic={clinic}
      slot={slot}
      onNext={next}
    />,
    <FollowUpScreen language={language} onNext={next} />,
    <PaymentScreen language={language} onRestart={restart} />,
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,420px)_1fr]">
      <Card className="flex min-h-[760px] flex-col overflow-hidden">
        <div className="bg-slate-950 px-6 pb-6 pt-8 text-white dark:bg-black">
          <p className="text-sm font-medium text-teal-200">{t(language, "appName")}</p>
          <h2 className="mt-2 text-2xl font-bold leading-tight">{t(language, "tagline")}</h2>
        </div>
        <div className="flex flex-1 flex-col gap-6 p-6">
          <Progress step={step} steps={steps} language={language} />
          {screens[step]}
        </div>
      </Card>

      <div className="grid content-start gap-4">
        <LocationPanel language={language} clinic={clinic} />
        <CarePracticesPanel language={language} carePractices={carePractices} />
        <DiseasesPanel language={language} diseases={diseases} />
      </div>
    </div>
  );
}

function SymptomScreen({ language, selectedSymptoms, setSelectedSymptoms, note, setNote, onNext }) {
  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((current) =>
      current.includes(symptom.id)
        ? current.filter((item) => item !== symptom.id)
        : [...current, symptom.id]
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "symptomTitle")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "symptomHelp")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {symptomOptions.map((symptom) => {
          const active = selectedSymptoms.includes(symptom.id);
          return (
            <button
              key={symptom.id}
              type="button"
              onClick={() => toggleSymptom(symptom)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                active
                  ? "border-teal-600 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950 dark:text-teal-100"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              }`}
            >
              {symptom[language]}
            </button>
          );
        })}
      </div>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{t(language, "extraNotes")}</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows="4"
          placeholder={t(language, "notesPlaceholder")}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none transition focus:border-teal-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </label>

      <PrimaryButton disabled={selectedSymptoms.length === 0} onClick={onNext}>
        {t(language, "findDoctors")}
      </PrimaryButton>
    </div>
  );
}

function DoctorScreen({ language, doctors, doctor, setDoctor, onNext }) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "chooseDoctor")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "doctorHelp")}
        </p>
      </div>

      <div className="space-y-3">
        {doctors.map((option) => {
          const active = doctor?.id === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setDoctor(option)}
              className={`w-full rounded-2xl border p-4 text-left transition ${
                active
                  ? "border-teal-600 bg-teal-50 dark:border-teal-400 dark:bg-teal-950"
                  : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold">{option.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{option.specialty}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {option.phone}
                  </p>
                </div>
                <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-200">
                  {option.wait}
                </span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {t(language, "rating")} {option.rating}
              </p>
            </button>
          );
        })}
      </div>

      <PrimaryButton disabled={!doctor} onClick={onNext}>
        {t(language, "selectTime")}
      </PrimaryButton>
    </div>
  );
}

function BookingScreen({ language, slots, slot, setSlot, clinic, onNext }) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "pickTime")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "timeHelp")}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {slots.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => setSlot(time)}
            className={`rounded-2xl border px-4 py-5 text-center text-lg font-bold transition ${
              slot === time
                ? "border-teal-600 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950 dark:text-teal-100"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{t(language, "clinicLocation")}</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {clinic.name}, {clinic.city}
        </p>
      </div>

      <PrimaryButton disabled={!slot} onClick={onNext}>
        {t(language, "confirmBooking")}
      </PrimaryButton>
    </div>
  );
}

function ConfirmationScreen({ language, doctor, slot, onNext }) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="rounded-3xl bg-emerald-50 p-5 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
        <p className="text-sm font-bold uppercase tracking-wide">{t(language, "confirmed")}</p>
        <h2 className="mt-2 text-2xl font-bold">{t(language, "appointmentBooked")}</h2>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <SummaryRow label={t(language, "doctor")} value={doctor?.name || "-"} />
        <SummaryRow label={t(language, "booking")} value={`Today, ${slot}`} />
        <SummaryRow label={t(language, "visitCode")} value="CF-2048" />
      </div>

      <PrimaryButton onClick={onNext}>{t(language, "viewLocation")}</PrimaryButton>
    </div>
  );
}

function LocationScreen({ language, clinic, onNext }) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "clinicLocation")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "mapHelp")}
        </p>
      </div>
      <LocationPanel language={language} clinic={clinic} compact />
      <PrimaryButton onClick={onNext}>{t(language, "startCheckIn")}</PrimaryButton>
    </div>
  );
}

function CheckInScreen({ language, insuranceReady, setInsuranceReady, consent, setConsent, onNext }) {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "checkInTitle")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "checkInHelp")}
        </p>
      </div>

      <CheckItem
        checked={insuranceReady}
        onChange={setInsuranceReady}
        title={t(language, "insurance")}
        help={t(language, "insuranceHelp")}
      />
      <CheckItem
        checked={consent}
        onChange={setConsent}
        title={t(language, "consent")}
        help={t(language, "consentHelp")}
      />

      <PrimaryButton disabled={!insuranceReady || !consent} onClick={onNext}>
        {t(language, "joinWaiting")}
      </PrimaryButton>
    </div>
  );
}

function WaitingScreen({ language, queueCount, onNext }) {
  const [queue, setQueue] = useState(queueCount);

  useEffect(() => {
    setQueue(queueCount);
  }, [queueCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      setQueue((current) => Math.max(0, current - 1));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "waitingRoom")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "waitingHelp")}
        </p>
      </div>

      <div className="rounded-3xl bg-slate-950 p-6 text-white dark:bg-black">
        <p className="text-sm font-medium text-teal-200">{t(language, "patientsAhead")}</p>
        <p className="mt-3 text-6xl font-black">{queue}</p>
        <p className="mt-4 text-sm text-slate-300">
          {queue === 0 ? t(language, "doctorReady") : t(language, "estimate")}
        </p>
      </div>

      <PrimaryButton disabled={queue > 0} onClick={onNext}>
        {t(language, "openSummary")}
      </PrimaryButton>
    </div>
  );
}

function SummaryScreen({ language, selectedSymptoms, note, doctor, clinic, slot, onNext }) {
  const symptomLabels = selectedSymptoms
    .map((id) => symptomOptions.find((symptom) => symptom.id === id)?.[language])
    .filter(Boolean);
  const symptomText = symptomLabels.join(", ");

  const downloadSlip = () => {
    downloadTextFile(
      "careflow-visit-slip.txt",
      buildCareSlip({
        language,
        clinic,
        doctor,
        slot,
        symptoms: symptomText,
        note,
      })
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "visitSummary")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "summaryHelp")}
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <SummaryBlock title={t(language, "clinician")} body={doctor?.name || "-"} />
        <SummaryBlock title={t(language, "doctorPhone")} body={doctor?.phone || "-"} />
        <SummaryBlock title={t(language, "symptoms")} body={symptomText} />
        <SummaryBlock title={t(language, "extraNotes")} body={note || t(language, "noNotes")} />
        <SummaryBlock title={t(language, "diagnosis")} body={visitResults.diagnosis} />
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">{t(language, "testsPerformed")}</h3>
        <div className="grid gap-2">
          {visitResults.tests.map((test) => (
            <p key={test} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-300">
              {test}
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">{t(language, "medicationGiven")}</h3>
        {visitResults.medication.map((item) => (
          <article key={item.name} className="rounded-xl bg-teal-50 p-3 dark:bg-teal-950">
            <p className="text-sm font-bold text-teal-900 dark:text-teal-100">
              {item.name} {item.dose}
            </p>
            <p className="mt-1 text-sm text-teal-800 dark:text-teal-200">{item.instructions}</p>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={downloadSlip}
        className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        {t(language, "downloadSlip")}
      </button>

      <PrimaryButton onClick={onNext}>{t(language, "setReminders")}</PrimaryButton>
    </div>
  );
}

function FollowUpScreen({ language, onNext }) {
  const medications = useMemo(
    () => [
      { name: "Amoxicillin", schedule: "08:00 and 20:00", days: 5 },
      { name: "Ibuprofen", schedule: "As needed with food", days: 2 },
    ],
    []
  );

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "followTitle")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "followHelp")}
        </p>
      </div>

      <div className="space-y-3">
        {medications.map((medication) => (
          <article key={medication.name} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold">{medication.name}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{medication.schedule}</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
                {medication.days} days
              </span>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="mt-auto rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        {t(language, "continueToPayment")}
      </button>
    </div>
  );
}

function PaymentScreen({ language, onRestart }) {
  const [method, setMethod] = useState("mobile");
  const [reference, setReference] = useState("");
  const [paid, setPaid] = useState(false);
  const total = paymentItems.service + paymentItems.medication;
  const methods = [
    { id: "mobile", label: t(language, "mobileMoney") },
    { id: "card", label: t(language, "cardPayment") },
    { id: "cash", label: t(language, "cashPayment") },
  ];

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{t(language, "paymentTitle")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "paymentHelp")}
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
        <SummaryRow label={t(language, "serviceFee")} value={`${paymentItems.service.toLocaleString()} RWF`} />
        <SummaryRow label={t(language, "medicationFee")} value={`${paymentItems.medication.toLocaleString()} RWF`} />
        <div className="border-t border-slate-200 pt-3 dark:border-slate-800">
          <SummaryRow label={t(language, "totalDue")} value={`${total.toLocaleString()} RWF`} />
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{t(language, "paymentMethod")}</p>
        <div className="mt-3 grid gap-2">
          {methods.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setMethod(option.id)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                method === option.id
                  ? "border-teal-600 bg-teal-50 text-teal-800 dark:border-teal-400 dark:bg-teal-950 dark:text-teal-100"
                  : "border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {method !== "cash" && (
        <TextField
          label={t(language, "phoneOrCard")}
          value={reference}
          onChange={setReference}
        />
      )}

      {paid && (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-100">
          {t(language, "paymentComplete")}
        </p>
      )}

      <button
        type="button"
        onClick={() => setPaid(true)}
        className="rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 dark:bg-teal-500"
      >
        {t(language, "payNow")}
      </button>
      <button
        type="button"
        onClick={onRestart}
        className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        {t(language, "newVisit")}
      </button>
    </div>
  );
}

function LocationPanel({ language, clinic, compact = false }) {
  const mapQuery = clinic.lat && clinic.lng
    ? `${clinic.lat},${clinic.lng}`
    : `${clinic.name} ${clinic.address} ${clinic.city}`;
  const encodedQuery = encodeURIComponent(mapQuery);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  const embedUrl = clinic.mapEmbedUrl?.trim()
    ? clinic.mapEmbedUrl.trim()
    : `https://maps.google.com/maps?q=${encodedQuery}&z=15&output=embed`;

  return (
    <Card className={compact ? "overflow-hidden" : "overflow-hidden p-0"}>
      <iframe
        title={`${clinic.name} map`}
        src={embedUrl}
        className="h-64 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-300">
          {t(language, "clinicLocation")}
        </p>
        <h3 className="mt-2 text-xl font-black">{clinic.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {clinic.address}, {clinic.city}
        </p>
        <p className="mt-2 rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-600 dark:bg-slate-950 dark:text-slate-300">
          {clinic.locationNote}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {t(language, "clinicPhone")}: {clinic.phone}
        </p>
        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
        >
          {t(language, "openMaps")}
        </a>
      </div>
    </Card>
  );
}

function CarePracticesPanel({ language, carePractices }) {
  return (
    <Card className="p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-teal-600 dark:text-teal-300">
        {t(language, "carePractices")}
      </p>
      <h3 className="mt-2 text-xl font-black">{t(language, "carePracticesHelp")}</h3>
      <div className="mt-4 grid gap-3">
        {carePractices.map((practice) => (
          <article
            key={practice.id}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
          >
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{practice.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {practice.example}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}

function DiseasesPanel({ language, diseases }) {
  return (
    <Card className="p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-300">
        {t(language, "diseases")}
      </p>
      <h3 className="mt-2 text-xl font-black">{t(language, "diseasesHelp")}</h3>
      <div className="mt-4 grid gap-3">
        {diseases.map((disease) => (
          <article
            key={disease.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
          >
            <h4 className="font-bold text-slate-900 dark:text-slate-100">{disease.name}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {disease.description}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}

function AdminPortal({
  language,
  doctors,
  setDoctors,
  clinic,
  setClinic,
  slots,
  setSlots,
  queueCount,
  setQueueCount,
  carePractices,
  setCarePractices,
  diseases,
  setDiseases,
  serviceRecords,
  onSignOut,
}) {
  const [doctorForm, setDoctorForm] = useState({
    name: "",
    specialty: "",
    phone: "",
    wait: "15 min",
    rating: "4.8",
  });
  const [newSlot, setNewSlot] = useState("");
  const [practiceForm, setPracticeForm] = useState({ title: "", example: "" });
  const [diseaseForm, setDiseaseForm] = useState({ name: "", description: "" });

  const updateClinic = (field, value) => {
    setClinic((current) => ({ ...current, [field]: value }));
  };

  const addDoctor = () => {
    if (!doctorForm.name.trim() || !doctorForm.specialty.trim()) return;
    setDoctors((current) => [
      ...current,
      {
        ...doctorForm,
        id: Date.now(),
        name: doctorForm.name.trim(),
        specialty: doctorForm.specialty.trim(),
        phone: doctorForm.phone.trim() || "+250 788 000 000",
      },
    ]);
    setDoctorForm({ name: "", specialty: "", phone: "", wait: "15 min", rating: "4.8" });
  };

  const addSlot = () => {
    if (!newSlot.trim()) return;
    setSlots((current) => Array.from(new Set([...current, newSlot.trim()])));
    setNewSlot("");
  };

  const addPractice = () => {
    if (!practiceForm.title.trim() || !practiceForm.example.trim()) return;
    setCarePractices((current) => [
      ...current,
      {
        id: Date.now(),
        title: practiceForm.title.trim(),
        example: practiceForm.example.trim(),
      },
    ]);
    setPracticeForm({ title: "", example: "" });
  };

  const addDisease = () => {
    if (!diseaseForm.name.trim() || !diseaseForm.description.trim()) return;
    setDiseases((current) => [
      ...current,
      {
        id: Date.now(),
        name: diseaseForm.name.trim(),
        description: diseaseForm.description.trim(),
      },
    ]);
    setDiseaseForm({ name: "", description: "" });
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
      <div className="grid gap-4">
        <Card className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-black">{t(language, "adminTitle")}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {t(language, "adminHelp")}
              </p>
            </div>
            <button
              type="button"
              onClick={onSignOut}
              className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {t(language, "signOut")}
            </button>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="text-lg font-black">{t(language, "clinicLocation")}</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <TextField label={t(language, "clinicName")} value={clinic.name} onChange={(value) => updateClinic("name", value)} />
            <TextField label={t(language, "city")} value={clinic.city} onChange={(value) => updateClinic("city", value)} />
            <TextField label={t(language, "address")} value={clinic.address} onChange={(value) => updateClinic("address", value)} />
            <TextField label={t(language, "clinicPhone")} value={clinic.phone} onChange={(value) => updateClinic("phone", value)} />
            <TextField label={t(language, "latitude")} value={clinic.lat} onChange={(value) => updateClinic("lat", value)} />
            <TextField label={t(language, "longitude")} value={clinic.lng} onChange={(value) => updateClinic("lng", value)} />
          </div>
          <div className="mt-3">
            <TextField
              label={t(language, "mapEmbedUrl")}
              value={clinic.mapEmbedUrl}
              onChange={(value) => updateClinic("mapEmbedUrl", value)}
            />
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {t(language, "mapEmbedHelp")}
            </p>
          </div>
          <div className="mt-3">
            <TextField
              label={t(language, "locationNote")}
              value={clinic.locationNote}
              onChange={(value) => updateClinic("locationNote", value)}
            />
          </div>
        </Card>

        <ServiceRecordsPanel language={language} doctors={doctors} serviceRecords={serviceRecords} />

        <Card className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-black">{t(language, "addDoctor")}</h3>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-teal-950 dark:text-teal-200">
              {doctors.length} {t(language, "doctor")}
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <TextField
              label={t(language, "doctorName")}
              value={doctorForm.name}
              onChange={(value) => setDoctorForm((current) => ({ ...current, name: value }))}
            />
            <TextField
              label={t(language, "specialty")}
              value={doctorForm.specialty}
              onChange={(value) => setDoctorForm((current) => ({ ...current, specialty: value }))}
            />
            <TextField
              label={t(language, "doctorPhone")}
              value={doctorForm.phone}
              onChange={(value) => setDoctorForm((current) => ({ ...current, phone: value }))}
            />
            <TextField
              label={t(language, "waitTime")}
              value={doctorForm.wait}
              onChange={(value) => setDoctorForm((current) => ({ ...current, wait: value }))}
            />
            <TextField
              label={t(language, "rating")}
              value={doctorForm.rating}
              onChange={(value) => setDoctorForm((current) => ({ ...current, rating: value }))}
            />
          </div>
          <button
            type="button"
            onClick={addDoctor}
            className="mt-4 rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 dark:bg-teal-500"
          >
            {t(language, "saveDoctor")}
          </button>

          <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-bold">{doctor.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {doctor.specialty} - {doctor.wait}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {doctor.phone}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDoctors((current) => current.filter((item) => item.id !== doctor.id))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {t(language, "remove")}
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-black">{t(language, "carePractices")}</h3>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200">
              {carePractices.length}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t(language, "carePracticesHelp")}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <TextField
              label={t(language, "practiceTitle")}
              value={practiceForm.title}
              onChange={(value) => setPracticeForm((current) => ({ ...current, title: value }))}
            />
            <TextField
              label={t(language, "practiceExample")}
              value={practiceForm.example}
              onChange={(value) => setPracticeForm((current) => ({ ...current, example: value }))}
            />
          </div>
          <button
            type="button"
            onClick={addPractice}
            className="mt-4 rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 dark:bg-teal-500"
          >
            {t(language, "addPractice")}
          </button>

          <div className="mt-5 grid gap-3">
            {carePractices.map((practice) => (
              <article
                key={practice.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <div>
                  <p className="font-bold">{practice.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {practice.example}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCarePractices((current) => current.filter((item) => item.id !== practice.id))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {t(language, "remove")}
                </button>
              </article>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-black">{t(language, "diseases")}</h3>
            <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 dark:bg-rose-950 dark:text-rose-200">
              {diseases.length}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t(language, "diseasesHelp")}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <TextField
              label={t(language, "diseaseName")}
              value={diseaseForm.name}
              onChange={(value) => setDiseaseForm((current) => ({ ...current, name: value }))}
            />
            <TextField
              label={t(language, "diseaseDescription")}
              value={diseaseForm.description}
              onChange={(value) => setDiseaseForm((current) => ({ ...current, description: value }))}
            />
          </div>
          <button
            type="button"
            onClick={addDisease}
            className="mt-4 rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 dark:bg-teal-500"
          >
            {t(language, "addDisease")}
          </button>

          <div className="mt-5 grid gap-3">
            {diseases.map((disease) => (
              <article
                key={disease.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <div>
                  <p className="font-bold">{disease.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {disease.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDiseases((current) => current.filter((item) => item.id !== disease.id))}
                  className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {t(language, "remove")}
                </button>
              </article>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid content-start gap-4">
        <LocationPanel language={language} clinic={clinic} />
        <Card className="p-5">
          <h3 className="text-lg font-black">{t(language, "appointmentSlots")}</h3>
          <div className="mt-4 flex gap-2">
            <input
              value={newSlot}
              onChange={(event) => setNewSlot(event.target.value)}
              placeholder="15:45"
              className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500 dark:border-slate-800 dark:bg-slate-950"
            />
            <button
              type="button"
              onClick={addSlot}
              className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white dark:bg-white dark:text-slate-950"
            >
              {t(language, "addSlot")}
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSlots((current) => current.filter((item) => item !== slot))}
                className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {slot}
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <label className="text-sm font-bold">{t(language, "queue")}</label>
          <input
            type="range"
            min="0"
            max="8"
            value={queueCount}
            onChange={(event) => setQueueCount(Number(event.target.value))}
            className="mt-4 w-full accent-teal-600"
          />
          <p className="mt-2 text-4xl font-black text-teal-600 dark:text-teal-300">{queueCount}</p>
        </Card>
      </div>
    </div>
  );
}

function TextField({ label, value, onChange }) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
      />
    </label>
  );
}

function ServiceRecordsPanel({ language, doctors, serviceRecords }) {
  const todayRecords = serviceRecords.filter((record) => record.date === "Today");
  const averageRating =
    serviceRecords.reduce((sum, record) => sum + record.rating, 0) / serviceRecords.length;

  const doctorStats = doctors.map((doctor) => {
    const doctorRecords = serviceRecords.filter((record) => record.doctor === doctor.name);
    return {
      name: doctor.name,
      today: doctorRecords.filter((record) => record.date === "Today").length,
      allTime: doctorRecords.length,
    };
  });

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-black">{t(language, "serviceRecords")}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {t(language, "doctorActivity")}
          </p>
        </div>
        <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-black text-amber-700 dark:bg-amber-950 dark:text-amber-200">
          {renderStars(Math.round(averageRating))} {averageRating.toFixed(1)}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <ReportMetric label={t(language, "todayRecords")} value={todayRecords.length} />
        <ReportMetric label={t(language, "allTimeRecords")} value={serviceRecords.length} />
        <ReportMetric label={t(language, "qualityRating")} value={`${averageRating.toFixed(1)} / 5`} />
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        {serviceRecords.map((record) => (
          <article key={record.id} className="border-b border-slate-200 p-4 last:border-0 dark:border-slate-800">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-bold">{record.patient}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{record.service}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {record.doctor} - {record.date}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm font-black text-teal-700 dark:text-teal-300">
                  {record.amount.toLocaleString()} RWF
                </p>
                <p className="text-sm text-amber-500">{renderStars(record.rating)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5">
        <h4 className="text-sm font-black">{t(language, "servicesGiven")}</h4>
        <div className="mt-3 grid gap-2">
          {doctorStats.map((doctor) => (
            <div
              key={doctor.name}
              className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3 text-sm dark:bg-slate-950"
            >
              <span className="font-bold">{doctor.name}</span>
              <span className="text-slate-600 dark:text-slate-300">
                {t(language, "todayRecords")}: {doctor.today} | {t(language, "allTimeRecords")}: {doctor.allTime}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function ReportMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-black">{value}</p>
    </div>
  );
}

function renderStars(count) {
  return "★★★★★".slice(0, count) + "☆☆☆☆☆".slice(0, 5 - count);
}

function AdminLogin({ language, onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (credentials.username === "admin" && credentials.password === "admin") {
      setError("");
      onLogin();
      return;
    }
    setError(t(language, "invalidLogin"));
  };

  return (
    <div className="grid min-h-[520px] place-items-center">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-2xl font-black">{t(language, "adminLogin")}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {t(language, "loginHelp")}
        </p>

        <form className="mt-6 grid gap-4" onSubmit={submit}>
          <TextField
            label={t(language, "username")}
            value={credentials.username}
            onChange={(value) => setCredentials((current) => ({ ...current, username: value }))}
          />
          <label className="space-y-2">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{t(language, "password")}</span>
            <input
              type="password"
              value={credentials.password}
              onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>

          {error && (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 dark:bg-red-950 dark:text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700 dark:bg-teal-500"
          >
            {t(language, "signIn")}
          </button>
        </form>
      </Card>
    </div>
  );
}

function CheckItem({ checked, onChange, title, help }) {
  return (
    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 rounded border-slate-300 text-teal-600"
      />
      <span>
        <span className="block text-sm font-bold">{title}</span>
        <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">{help}</span>
      </span>
    </label>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-slate-500 dark:text-slate-400">{label}</span>
      <span className="text-right font-semibold text-slate-800 dark:text-slate-100">{value}</span>
    </div>
  );
}

function SummaryBlock({ title, body }) {
  return (
    <section>
      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{body}</p>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("patient");
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [doctors, setDoctors] = useState(initialDoctors);
  const [clinic, setClinic] = useState(initialClinic);
  const [slots, setSlots] = useState(initialSlots);
  const [queueCount, setQueueCount] = useState(3);
  const [carePractices, setCarePractices] = useState(initialCarePractices);
  const [diseases, setDiseases] = useState(initialDiseases);
  const [serviceRecords] = useState(initialServiceRecords);

  return (
    <Shell
      language={language}
      setLanguage={setLanguage}
      theme={theme}
      setTheme={setTheme}
      mode={mode}
      setMode={setMode}
    >
      {mode === "patient" ? (
        <PatientApp
          language={language}
          doctors={doctors}
          clinic={clinic}
          slots={slots}
          queueCount={queueCount}
          carePractices={carePractices}
          diseases={diseases}
        />
      ) : adminAuthenticated ? (
        <AdminPortal
          language={language}
          doctors={doctors}
          setDoctors={setDoctors}
          clinic={clinic}
          setClinic={setClinic}
          slots={slots}
          setSlots={setSlots}
          queueCount={queueCount}
          setQueueCount={setQueueCount}
          carePractices={carePractices}
          setCarePractices={setCarePractices}
          diseases={diseases}
          setDiseases={setDiseases}
          serviceRecords={serviceRecords}
          onSignOut={() => setAdminAuthenticated(false)}
        />
      ) : (
        <AdminLogin language={language} onLogin={() => setAdminAuthenticated(true)} />
      )}
    </Shell>
  );
}
