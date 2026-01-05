import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";


// Lazy Pages
const Home = lazy(() => import("./pages/Home"));
const AboutUS = lazy(() => import("./pages/About"));
const Ourwork = lazy(() => import("./pages/OurWork"));
const Contact = lazy(() => import("./pages/contact"));
const ConsultUs = lazy(() => import("./pages/Consultus"));
const Partners = lazy (()=> import ("./pages/partners") );
const Social = lazy (()=> import ("./pages/Social") );
function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden bg-[#272727] ">
        <Navbar />

        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
              <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Vision" element={<AboutUS />} />
            <Route path="/Mission" element={<Ourwork />} />
            <Route path="/Services" linked element={<Contact />} />
            <Route path="/consult-us" element={<ConsultUs />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Social" element={<Social />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
