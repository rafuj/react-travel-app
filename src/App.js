import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import ClientsSay from "./components/ClientsSay";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sponsor from "./components/Sponsor";
import TopDestinations from "./components/TopDestinations";
import TourPackages from "./components/TourPackages";
import { AuthProvider } from "./contexts/AuthContext";
import "./firebase";
import Layout from "./Layout";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <About />
                  <TopDestinations />
                  <TourPackages />
                  <ClientsSay />
                  <Counter />
                  <Sponsor />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Hero pageTitle="Login Now" pathName="Login" />
                  <Login />
                </>
              }
            />
            <Route
              path="/registration"
              element={
                <>
                  <Hero pageTitle="Create New Account" pathName="Create New" />
                  <SignUp />
                </>
              }
            />
            <Route
              path="/dashboard"
              element={
                <>
                  <Hero pageTitle="Dashboard" pathName="Dashboard" />
                  <Dashboard />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Hero pageTitle="About Us" pathName="About" />
                  <About />
                  <Counter />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                  <ClientsSay />
                </>
              }
            />
            <Route
              path="/packages"
              element={
                <>
                  <Hero
                    pageTitle="Find Best Tour Packages"
                    pathName="Packages"
                  />
                  <TopDestinations />
                  <TourPackages />
                  <Counter />
                </>
              }
            />
            <Route
              path="/clients"
              element={
                <>
                  <Hero
                    pageTitle="Our Happy Clients Say"
                    pathName="Clients Say"
                  />
                  <ClientsSay />
                  <Counter />
                </>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
