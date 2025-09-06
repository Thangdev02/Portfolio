import "./i18n"

import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      </Routes>
    </Router>
  )
}

export default App
