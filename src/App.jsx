
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/footer";
import HomePage from "./pages/Homepage.jsx";
import Profile from "./pages/profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";


import UniversityDocuments from "./pages/UniversityDocuments.jsx";
// import UniversityDashboard from "./pages/UniversityDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Footer />
            </>
          }
        />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/:role" element={<Signup />} />

        {/* Admin */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Student */}
        <Route
          path="/homepage"
          element={
            <ProtectedRoute role="student">
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* University Documents Page */}
<Route path="/university/documents" element={<UniversityDocuments />} />

        {/* University Dashboard */}
        {/* <Route
          path="/university/dashboard"
          element={
            <ProtectedRoute role="university">
              <UniversityDashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

