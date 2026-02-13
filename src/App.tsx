import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const SystemsForServiceBusinesses = lazy(
  () => import("./pages/SystemsForServiceBusinesses")
);
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen bg-black" />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/systems-for-service-businesses" element={<SystemsForServiceBusinesses />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Analytics />
    </>
  );
}

export default App;