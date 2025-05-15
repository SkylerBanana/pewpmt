import Upload from "./pages/Upload";
import Download from "./pages/Download";
import {
  MemoryRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

function Nav() {
  const location = useLocation();

  const NavRoutes = ["/upload", "/download"];
  const HideNav = NavRoutes.includes(location.pathname);

  if (HideNav) return null;

  return (
    <nav>
      <NavLink to="/upload">
        <button>Upload</button>
      </NavLink>
    </nav>
  );
}
function App() {
  return (
    <MemoryRouter>
      <Nav />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
