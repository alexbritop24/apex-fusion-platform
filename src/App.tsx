import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const SystemsForServiceBusinesses = lazy(
  () => import("./pages/SystemsForServiceBusinesses")
);

const SystemsAudit = lazy(() => import("./pages/SystemsAudit"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign"));
const AutomationForLocalBusiness = lazy(
  () => import("./pages/AutomationForLocalBusiness")
);
const CustomSoftwareDevelopment = lazy(
  () => import("./pages/CustomSoftwareDevelopment")
);

const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route
            path="/systems-for-service-businesses"
            element={<SystemsForServiceBusinesses />}
          />

          <Route path="/systems-audit" element={<SystemsAudit />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route
            path="/automation-for-local-business"
            element={<AutomationForLocalBusiness />}
          />
          <Route
            path="/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />

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