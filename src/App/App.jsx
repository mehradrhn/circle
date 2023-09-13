import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CoursesDetailsMain from '../Screens/CoursesDetailsMain/CoursesDetailsMain';
import ArticlesDetailsSC from '../Screens/ArticlesDetailsSC/ArticlesDetailsSC';
import Error404SC from '../Screens/Error404SC/Error404SC';
import Forget from '../Screens/Forget/Forget';
import Login from '../Screens/Login/Login';
import PanelFirst from '../Screens/PanelFirst/PanelFirst';
import PanelSecond from '../Screens/PanelSecond/PanelSecond';
import PanelThird from '../Screens/PanelThird/PanelThird';
import ArticlesPage from '../Screens/ArticlesPage/ArticlesPage';
import Register from '../Screens/Register/Register';
import MainCourses from '../Screens/MainCourses/MainCourses';
import Landing from '../Screens/Landing/Landing';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Course" element={<MainCourses />} />
        <Route path="/Articles" element={<ArticlesPage />} />
        <Route path="/CDetails" element={<CoursesDetailsMain />} />
        <Route path="/ADetails" element={<ArticlesDetailsSC />} />
        <Route path="/Panel1" element={<PanelFirst />} />
        <Route path="/Panel2" element={<PanelSecond />} />
        <Route path="/Panel3" element={<PanelThird />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Error404SC />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

