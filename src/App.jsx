import './App.css'
import Cita from './components/Cita.jsx'
import Form from './components/Form.jsx'
import Subtitulo from './components/Subtitulo.jsx'

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo texto="Crear Mi Cita"/>
            <Form/>
          </div>
          <div class="one-half column">
            <Subtitulo texto="Administra tus Citas"/>
            <Cita nombre="Nina" propietario="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
            <Cita nombre="Sifon" propietario="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
            <Cita nombre="Floki" propietario="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
