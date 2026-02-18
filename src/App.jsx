import Navbar from './components/Navbar'
import TitleSection from './components/TitleSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <TitleSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="app-footer">
        © {new Date().getFullYear()} BuildRight Construction. All rights reserved.
      </footer>
    </div>
  )
}
