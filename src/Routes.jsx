import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EducatePage from "./pages/EducatePage";
import TakeActionPage from "./TakeActionPages/TakeActionPage";
import PledgePage from "./pages/PledgePage";
import FirstQuiz from "./TakeActionPages/FirstQuiz";
import SecondQuiz from "./TakeActionPages/SecondQuiz";
import ThirdQuiz from "./TakeActionPages/ThirdQuiz";
import FourthQuiz from "./TakeActionPages/FourthQuiz";
import FifthQuiz from "./TakeActionPages/FifthQuiz";
import LastQuiz from "./TakeActionPages/LastQuiz";

const routes = [
  {
    path: "/",
    component: <HomePage />
  },
  {
    path: "/EducatePage",
    component: <EducatePage />
  },
  {
    path: "/TakeActionPage",
    component: <TakeActionPage />
  },
  {
    path: "/PledgePage",
    component: <PledgePage />
  },
  {
    path: "/FirstQuiz",
    component: <FirstQuiz />
  },
  {
    path: "/SecondQuiz",
    component: <SecondQuiz />
  },
  {
    path: "/ThirdQuiz",
    component: <ThirdQuiz />
  },
  {
    path: "/FourthQuiz",
    component: <FourthQuiz />
  },
  {
    path: "/FifthQuiz",
    component: <FifthQuiz />
  },
  {
    path: "/LastQuiz",
    component: <LastQuiz />
  }
];

const RouteSwitch = () => {
  return (
    <Routes>
      {routes.map((e) => {
        return <Route path={e.path} element={e.component} />;
      })}
    </Routes>
  );
};

export default RouteSwitch;
