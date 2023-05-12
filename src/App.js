import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SiderMenu from "./components/SiderMenu";
import Container from "./components/Container";
import About from "./components/About";

import ChatBox from "./components/ChatBlock";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const user = sessionStorage.getItem("uid");

  return (
    <div className="App">
      <Router>
        <SiderMenu />
        <Routes>
          <Route exact path="/login" Component={LoginPage} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute user={user}>
                <Container />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <PrivateRoute user={user}>
                <About />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
      <ChatBox />
    </div>
  );
}

export default App;
