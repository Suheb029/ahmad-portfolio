import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { WhyChooseMe } from './components/sections/WhyChooseMe'
import { WorkProcess } from './components/sections/WorkProcess'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0B0D17', color: '#F9FAFB' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <WhyChooseMe />
        <WorkProcess />
        <About />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#9CA3AF' }}>
        <p>© 2026 Ahmad. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
