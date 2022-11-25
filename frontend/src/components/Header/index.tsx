import logo from '../../assets/img/logo.svg'
import './styles.css'


function App() {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por Mark Antoine
              <br/>
              Demonstração de notificação: <a href="https://prnt.sc/gBLkk40_Yq9c" target={'_blank'}><b>Clique aqui</b></a>
              <br />
              <a id='media' href="https://www.linkedin.com/in/mark-antoine/" target={'_blank'}><b>Linkedin</b> </a>
              <a id='media' href="https://github.com/markantoine1" target={'_blank'}><b>Github</b></a>
            </p>
        </div>
    </header>
  )
}
export default App