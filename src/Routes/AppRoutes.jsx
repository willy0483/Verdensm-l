import { Routes, Route} from "react-router-dom";

import { EducationPage } from "../Pages/EducationPage/EducationPage";
import { ContactPage } from "../Pages/ContactPage/ContactPage";
import { FaqPage } from "../Pages/FaqPage/FaqPage";
import { OwngoalPage } from "../Pages/OwngoalPage/OwngoalPage";
import { WorldGoals } from "../Pages/WorldGoalsPage/WorldGoalsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WorldGoals />} />
      <Route path="/Education" element={<EducationPage/>} />
      <Route path="/Owngoal" element={<OwngoalPage/>} />
      <Route path="/Faq" element={<FaqPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
}