import { useState } from 'react'
import './App.css'

function Formulario({ onAddCita }){
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && fecha && hora && sintomas) {
      onAddCita({ nombre, fecha, hora, sintomas });
      setNombre('');
      setFecha('');
      setHora('');
      setSintomas('');
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
      <textarea maxWidth="300px" value={sintomas} onChange={(e) => setSintomas(e.target.value)} required></textarea>
      <button type='submit'>Agregar Cita</button>
    </form>
  );
}

function Lista({ citas }){
  return(
    <ul>
      {citas.map((cita, index) => (
        <li key={index}><Cita cita={cita} /></li>
      ))}
    </ul>
  );
}

function Cita({ cita }){
  return(
    <div className="cita">
      <p><strong>Paciente:</strong> {cita.nombre}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Síntomas:</strong> {cita.sintomas}</p>
    </div>
  );
}

const initialCitas = [
  { nombre: 'Juan Pérez', fecha: '2026-03-27', hora: '10:00', sintomas: 'Dolor de cabeza' },
  { nombre: 'María García', fecha: '2026-03-28', hora: '14:00', sintomas: 'Fiebre' },
  { nombre: 'Carlos López', fecha: '2026-03-29', hora: '16:00', sintomas: 'Tos' }
];

function App() {
  const [citas, setCitas] = useState(initialCitas);

  const addCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <>
      <section id="center">
        <h1>Administrador de Citas</h1>
        <section id='main'>
          <Formulario onAddCita={addCita} />
          <Lista citas={citas} />
        </section>
      </section>
    </>
  )
}

export default App
