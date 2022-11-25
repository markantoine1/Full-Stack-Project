import logo from '../../assets/img/logo.svg'
import './styles.css'


function App() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/mark-antoine/"> M̲a̲r̲k̲ ̲A̲n̲t̲o̲i̲n̲e̲</a>
            </p>
        </div>
    </header>
  )
}
export default App