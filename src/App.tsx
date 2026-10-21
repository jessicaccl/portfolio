import { Career } from './components/Career'
import { Cases } from './components/Cases'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowIWork } from './components/HowIWork'
import { ImpactNumbers } from './components/ImpactNumbers'

function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <ImpactNumbers />
        <Cases />
        <HowIWork />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
