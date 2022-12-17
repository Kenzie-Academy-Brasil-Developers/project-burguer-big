import { Route, Routes} from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesComponent = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    );
  };
  