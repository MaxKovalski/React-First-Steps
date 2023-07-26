import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import Settings from "./components/setting";
import Settings2 from "./components/settings2";
import Users from "./components/Users";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings2" element={<Settings2 />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default Router;
