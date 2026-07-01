import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Services        from './components/Services'
import FeatureShowcase from './components/FeatureShowcase'
import Process         from './components/Process'
import AIAgents        from './components/AIAgents'
import Portfolio       from './components/Portfolio'
import About           from './components/About'
import Testimonials    from './components/Testimonials'
import Pricing         from './components/Pricing'
import FAQ             from './components/FAQ'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeatureShowcase />
        <Process />
        <AIAgents />
        <Portfolio />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
