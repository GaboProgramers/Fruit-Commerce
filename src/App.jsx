import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import SectionAbarrotes from './components/sectionDesplegables/SectionAbarrotes'
import SectionFrutas from './components/sectionDesplegables/SectionFrutas'
import SectionVerduras from './components/sectionDesplegables/SectionVerduras'

function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <SectionFrutas />
      <SectionVerduras />
      <SectionAbarrotes />
      <Footer />
    </div>
  )
}

export default App
