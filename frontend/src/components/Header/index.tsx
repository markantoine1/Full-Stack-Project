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
              (O conteúdo não está mais disponível devido a descontinuação do plano gratuito por parte do Heroku, estou trabalhando para hospedar em outro local. Enquanto isso, pode ser acessado o código fonte e imagens da aplicação funcionando.)
              <br/>
              Demonstração do site, enquanto a hospedagem funcionava: <a href="https://prnt.sc/j4_saIDO3YBZ" target={'_blank'}><b>Clique aqui</b></a>
              <br/>
              Demonstração de notificação: <a href="https://prnt.sc/gBLkk40_Yq9c" target={'_blank'}><b>Clique aqui</b></a>
            </p>
        </div>
    </header>
  )
}
export default App