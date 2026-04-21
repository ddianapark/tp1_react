import './App.css'
import Form from './components/Form.jsx'
import Lista from './components/Lista.jsx'
import Subtitulo from './components/Subtitulo.jsx'
import { useEffect, useState } from 'react'

const initialCitas = [
  { id: 0, nombre: "Nina", propietario: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" },
  { id: 1, nombre: "Sifon", propietario: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho" }
]

function App() {
  const [citas, setCitas] = useState(citas => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : initialCitas;
  });
  const [nextId, setNextId] = useState(0);
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const addCita = (cita) => {
    const nuevaCita = { ...cita, id: nextId };
    setCitas([...citas, nuevaCita]);
    setNextId(nextId + 1);
    
    useEffect(() => {
      const citasGuardadas = localStorage.getItem('citas');
      if (citasGuardadas) {
        setCitas(JSON.parse(citasGuardadas));
      }
      localStorage.setItem('citas', JSON.stringify(citasGuardadas));
    }, [citas]);
  };

  const deleteCita = (id) => {
    const nuevasCitas = [...citas];
    const index = nuevasCitas.findIndex(cita => cita.id === id);
    if (index !== -1) {
      nuevasCitas.splice(index, 1);
      setCitas(nuevasCitas);
    }
    useEffect(() => {
      const citasGuardadas = localStorage.getItem('citas');
      if (citasGuardadas) {
        setCitas(JSON.parse(citasGuardadas));
      }
      localStorage.setItem('citas', JSON.stringify(citasGuardadas));
    }, [citas]);
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo texto="Crear Mi Cita"/>
            <Form onAddCita={addCita} />
          </div>
          <div class="one-half column">
            <Subtitulo texto="Administra tus Citas"/>
            <Lista citas={citas} onEliminar={deleteCita} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App