import Header from "./components/Header.jsx";
import Prototypes from "./components/Prototypes.jsx";
import Orders from "./components/Orders.jsx";
import Footer from "./components/Footer.jsx";
import AppStateProvider from "./providers/AppStateProvider.jsx";

function App() {
  return (
    <AppStateProvider>
      <Header/>
      <div className="container">
        <Prototypes/>
        <Orders/>
        <Footer/>
      </div>
    </AppStateProvider>
  );
}

export default App;
