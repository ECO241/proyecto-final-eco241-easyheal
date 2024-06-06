window.onload = () => {
  
  };
    document.getElementById('back').addEventListener('click', () => {
      window.history.back();
    });
    
    document.getElementById('siguiente').addEventListener('click', () => {
      window.location.href = 'http://localhost:3000/historialpaciente?paciente=Lucia_Villa&id=288e1278-a373-4066-977c-517aba1dc005';
    });
  