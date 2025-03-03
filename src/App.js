import "./App.css";
import { Landing } from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { Avatar } from "./pages/avatar";
import { AvatarA } from "./pages/avatar/avatarA";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/avatar"} element={<Avatar />} />
        <Route path={"/avatarA"} element={<AvatarA />} />
      </Routes>
    </BrowserRouter>
  );
};
