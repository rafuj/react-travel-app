import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import ClientsSay from "./components/ClientsSay";
import Counter from "./components/Counter";
import TopDestinations from "./components/TopDestinations";
import TourPackages from "./components/TourPackages";
import "./firebase";
import Layout from "./Layout";
function App() {
  return (
    <Layout>
      <About />
      <TopDestinations />
      <TourPackages />
      <ClientsSay />
      <Counter />
    </Layout>
  );
}

export default App;
