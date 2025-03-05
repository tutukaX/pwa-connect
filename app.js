// Obtener referencias a los elementos del DOM
const homeScreen = document.getElementById('home-screen');
const profesionalScreen = document.getElementById('profesional-screen');
const pacienteScreen = document.getElementById('paciente-screen');

const profesionalBtn = document.getElementById('profesional-btn');
const pacienteBtn = document.getElementById('paciente-btn');

const backProfesionalBtn = document.getElementById('back-profesional-btn');
const backPacienteBtn = document.getElementById('back-paciente-btn');

// Mostrar pantalla de profesionales
profesionalBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');
    profesionalScreen.classList.remove('hidden');
});

// Mostrar pantalla de pacientes
pacienteBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');
    pacienteScreen.classList.remove('hidden');
});

// Volver a la pantalla de inicio desde profesionales
backProfesionalBtn.addEventListener('click', () => {
    profesionalScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
});

// Volver a la pantalla de inicio desde pacientes
backPacienteBtn.addEventListener('click', () => {
    pacienteScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
});

// Lógica para el botón "Omitir y Buscar Profesionales"
const omitirPacienteBtn = document.getElementById('omitir-paciente-btn');
omitirPacienteBtn.addEventListener('click', () => {
    alert('Redirigiendo a la búsqueda de profesionales...');
    // Aquí puedes redirigir a otra página o mostrar una lista de profesionales
});
