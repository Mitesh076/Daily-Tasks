import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
