import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Services  from './components/Services'
// Additional components imported as each phase is completed

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* Section anchors — keep nav scroll targets alive until real sections arrive */}
        <div id="process"  style={{ height: '100px' }} />
        <div id="projects" style={{ height: '100px' }} />
        <div id="about"    style={{ height: '100px' }} />
        <div id="contact"  style={{ height: '100px' }} />
      </main>
    </div>
  )
}

export default App
