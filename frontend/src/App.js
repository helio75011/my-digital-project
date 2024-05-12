import Acceuil from "./Pages/Acceuil/Acceuil";
import Login from "./Pages/Login/Login";
import RoleLogin from "./Pages/Login/Role-login/Role-login";
import VolunteerLogin from "./Pages/Login/Volunteer-login/Volunteer-login";
import TimePsycho from "./Pages/Login/Psychologist-login/Time-psycho/Time-psycho";
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
      </Routes>
    </Router>
  );
}

export default App;
