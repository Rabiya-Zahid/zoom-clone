import logo from './logo.svg';
import './App.css';
import  {Route,BrowserRouter  as  Router ,Routes} from  "react-router-dom";
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComp from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route  path='/'  element={<LandingPage />}></Route>
          <Route  path='/auth'  element={<Authentication></Authentication>}></Route>
          <Route  path='/home'  element={<HomeComponent></HomeComponent>}></Route>
          <Route  path='/history' element={<History></History>}></Route>
          <Route  path='/:url' element={<VideoMeetComp></VideoMeetComp>} ></Route>

        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
