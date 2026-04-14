import './Form.css'
import { useState } from 'react'

export default function Form ({ onAddCita }){
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
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

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} required></input>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={(e) => setPropietario(e.target.value)} required></input>
            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)} required></input>
            <label>hora</label>
            <input type="time" name="hora" class="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)} required></input>
            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)} required></textarea>
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}