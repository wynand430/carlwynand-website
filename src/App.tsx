import { Route, Routes } from "react-router-dom";
import { SiteFrame } from "./components/SiteFrame";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <SiteFrame>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
    </SiteFrame>
  );
}
