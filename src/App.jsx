import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactCard from './components/ContactCard';

const App = () => (
  <body>
      <div className="bg-primary w-full overflow-hidden">
    <Header />
    <Hero />
    <Projects />
    <ContactCard />
    <Footer />
  </div >
  </body>
)

export default App