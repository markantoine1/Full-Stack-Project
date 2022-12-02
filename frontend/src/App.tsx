import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
              <SalesCard/>
          </div>
        </section>
        <a id='media' href="https://www.linkedin.com/in/mark-antoine/" target={'_blank'}><b>Linkedin</b> </a>
        <a id='media' href="https://github.com/markantoine1" target={'_blank'}><b>Github</b></a>
      </main>
    </>
  )
}
export default App