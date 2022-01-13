import logo from './logo.svg';
import './App.css';
import Zipcode from './Zipcode';
import Header from './Header';
import Footer from "./Footer"

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Zipcode />
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
