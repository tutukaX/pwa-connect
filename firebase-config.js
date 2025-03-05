// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANdtIU1d5BW3VoS2-qstDDonoCA1owBtk",
  authDomain: "pruebapsico-f33f3.firebaseapp.com",
  projectId: "pruebapsico-f33f3",
  storageBucket: "pruebapsico-f33f3.firebasestorage.app",
  messagingSenderId: "917284850089",
  appId: "1:917284850089:web:c31bb13c5047376b7d9cb8",
  measurementId: "G-HJCL31N5FZ"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencias globales
const auth = firebase.auth();
const db = firebase.firestore();
