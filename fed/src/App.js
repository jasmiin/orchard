import './App.css';
import { One } from "./components/One";
import { Two } from "./components/Two";
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <One/>
        <Two/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
