import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Acceuil from "./Pages/Acceuil/Acceuil";
// LOGIN ---------------------------------------------------------------------------------
import Login from "./Pages/Login/Login";
import RoleLogin from "./Pages/Login/Role-login/Role-login";
import VolunteerLogin from "./Pages/Login/Volunteer-login/Volunteer-login";
import TimePsycho from "./Pages/Login/Psychologist-login/Time-psycho/Time-psycho";
import AgePsycho from "./Pages/Login/Psychologist-login/Age-psycho/Age-psycho";
import TherapyPsycho from "./Pages/Login/Psychologist-login/Therapy-psycho/Therapy-psycho";
import WeekPsycho from "./Pages/Login/Psychologist-login/Week-psycho/Week-psycho";
import FinishFormLogin from "./Pages/Login/Finish-Form-login/Finish-Form-login";
import CheckEmailLogin from "./Pages/Login/Check-Email-login/Check-Email-login";
import ResultLogin from "./Pages/Login/Result-login/Result-login";
// ADMIN --------------------------------------------------------------------------------
import Diary from './Pages/Admin/Diary/Diary';
import Calendar from './Pages/Admin/Calendar/Calendar';
import Patients from './Pages/Admin/Patients/Patients';
import Chat from './Pages/Admin/Chat/Chat';
import Event from './Pages/Admin/Event/Event';
import PageEvent from './Pages/Admin/Event/Page-Event/Page-Event';
import Resource from './Pages/Admin/Resource/Resource';
import PageResource from './Pages/Admin/Resource/Page-Resource/Page-Resource';
import Count from './Pages/Admin/Count/Count';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* LOGIN */}
        <Route exact path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RoleLogin />} />
        <Route path="/volunteer" element={<VolunteerLogin />} />
        <Route path="/psycho-one" element={<TimePsycho />} />
        <Route path="/psycho-two" element={<AgePsycho />} />
        <Route path="/psycho-tree" element={<TherapyPsycho />} />
        <Route path="/psycho-four" element={<WeekPsycho />} />
        <Route path="/finish-form" element={<FinishFormLogin />} />
        <Route path="/email-verification" element={<CheckEmailLogin />} />
        <Route path="/result-login" element={<ResultLogin />} />
        {/* END LOGIN */}
        {/* ------------------------------------------------------------ */}
        {/* ADMNIN */}
        <Route path="/diary" element={<ProtectedRoute element={Diary} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/event" element={<Event />} />
        <Route path="/page-event" element={<PageEvent />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/page-resource" element={<PageResource />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </Router>
  );
}

export default App;
