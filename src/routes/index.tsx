import { Routes, Route } from 'react-router';
import App from '../App';
import About from "../pages/About.tsx";

const DashboardRoutes = () => {
  return (
      <Routes>
        <Route
          index
          element={<App />}
        />
          <Route path="about" element={<About />} />
      </Routes>
  );
};

export default DashboardRoutes;
