import "./App.css";
import { Landing } from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { Avatar } from "./pages/avatar";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/avatar"} element={<Avatar />} />
      </Routes>
    </BrowserRouter>
  );
};
