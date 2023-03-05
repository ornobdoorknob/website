import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';

const App = () => (
  <body>
    <div class="min-h-screen bg-primary w-full overflow-hidden">
      <Header />
      <Hero />
      <Projects />
      <div class="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  </body>
)

export default App