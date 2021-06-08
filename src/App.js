import Header from "./components/Header.jsx";
import Prototypes from "./components/Prototypes.jsx";
import Orders from "./components/Orders.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Prototypes/>
        <Orders/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
