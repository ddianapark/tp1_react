import Cita from './Cita.jsx'
import './Lista.css'

export default function Lista({ citas, onEliminar }) {
  return (
    <ul>
      <li>{citas.map(cita => (<Cita key={cita.id} cita={cita} onEliminar={onEliminar} />))}</li>
    </ul>
  );
}