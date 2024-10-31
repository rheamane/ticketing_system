import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import TicketSubmit from './pages/IssueSubmissionForm/IssueSubmissionForm';
import TicketInfo from './pages/TicketInfo/TicketInfo';
import AdminDash from './pages/AdminDash';
import NavBarLayout from './components/NavBarLayout/NavBarLayout'
import TicketQueue from './pages/TicketQueue';
import StudentDash from './pages/StudentDash/StudentDash';
import InstructorDash from './pages/InstructorDash/InstructorDash';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Unauthorized from './pages/Unauthorized/Unauthorized';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/*Verify that user is logged in before rendering any of these routes*/}
      <Route element={<ProtectedRoute element={<NavBarLayout />} authorizedRoles={['admin', 'student', 'TA']} />}> 
        <Route path="/ticketinfo" element={<TicketInfo />} />
        <Route path="/ticketsubmit" element={<TicketSubmit />} />
        <Route path="/ticketqueue" element={<TicketQueue />} />

        {/*Verify the correct user type for dashboards*/}
        <Route path="/admindash" element={<ProtectedRoute element={<AdminDash />} authorizedRoles={['admin']} />}  />
        <Route path="/studentdash" element={<ProtectedRoute element={<StudentDash />} authorizedRoles={['student']} />} />
        <Route path="/instructordash" element={<ProtectedRoute element={<InstructorDash />} authorizedRoles={['TA']} />} />
      </Route>

      {/*Default to login page for unrecognized routes*/}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
