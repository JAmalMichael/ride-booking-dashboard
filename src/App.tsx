import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import BookingSummary from "./pages/BookingSummary"
import Home from "./pages/Home"

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/summary" element={<BookingSummary />}/>
      </Routes>
      
    </Router>
  )
}

export default App
