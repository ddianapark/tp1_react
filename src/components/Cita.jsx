export default function Cita({ nombre, propietario, fecha, hora, sintomas }) {
    return (
        <div className="cita">
            <p>Mascota: <span>{nombre}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}