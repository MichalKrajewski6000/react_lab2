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

function App() {
  return (
    <div className="App">
      <Router>
        <SiderMenu />
        <Routes>
          <Route exact path="/home" Component={Container} />
          <Route exact path="/about" Component={About} />
          {/* <Route exact path="/contact" Component={Layout} /> */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
      <ChatBox />
    </div>
  );
}

export default App;
