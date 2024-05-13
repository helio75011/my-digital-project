import Acceuil from "./Pages/Acceuil/Acceuil";
import Login from "./Pages/Login/Login";
import RoleLogin from "./Pages/Login/Role-login/Role-login";
import VolunteerLogin from "./Pages/Login/Volunteer-login/Volunteer-login";
import TimePsycho from "./Pages/Login/Psychologist-login/Time-psycho/Time-psycho";
import AgePsycho from "./Pages/Login/Psychologist-login/Age-psycho/Age-psycho";
import TherapyPsycho from "./Pages/Login/Psychologist-login/Therapy-psycho/Therapy-psycho";
import WeekPsycho from "./Pages/Login/Psychologist-login/Week-psycho/Week-psycho";
import FinishFormLogin from "./Pages/Login/Finish-Form-login/Finish-Form-login";
import CheckEmailLogin from "./Pages/Login/Check-Email-login/Check-Email-login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
