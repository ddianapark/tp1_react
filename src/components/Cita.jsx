import './Cita.css'

export default function Cita({ cita: { id, nombre, propietario, fecha, hora, sintomas }, onEliminar }){
    const handleEliminar = () => {
        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta cita?');
        if (confirmacion) {
            onEliminar(id);
        }
    }
    
    return (
        <div className="cita">
            <p>Mascota: <span>{nombre}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button eliminar u-full-width" id='buttonElim' onClick={handleEliminar}>Eliminar ×</button>
        </div>
    )
}
