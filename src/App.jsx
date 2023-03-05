import Footer from './components/Footer';
import Hero from './components/Hero';
import Content from './components/Content';

const App = () => (
    <div class="min-h-screen w-full overflow-hidden bg-primary">
      <Hero />
      <Content />
      <div class="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
)

export default App