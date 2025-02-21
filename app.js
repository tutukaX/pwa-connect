document.addEventListener('DOMContentLoaded', () => {
    const professionalsList = document.getElementById('professionals-list');
  
    // Datos de ejemplo (puedes reemplazar con una API real)
    const professionals = [
      { name: 'Dr. Juan Pérez', specialty: 'Psicólogo', phone: '1234567890' },
      { name: 'Dra. Ana López', specialty: 'Nutricionista', phone: '0987654321' },
      { name: 'Dr. Carlos Gómez', specialty: 'Médico General', phone: '1122334455' },
    ];
  
    professionals.forEach(professional => {
      const professionalDiv = document.createElement('div');
      professionalDiv.className = 'professional';
  
      professionalDiv.innerHTML = `
        <h2>${professional.name}</h2>
        <p>Especialidad: ${professional.specialty}</p>
        <a href="https://wa.me/${professional.phone}" target="_blank">Contactar por WhatsApp</a>
      `;
  
      professionalsList.appendChild(professionalDiv);
    });
  });