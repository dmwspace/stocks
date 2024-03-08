import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Dashboard from "../Dashboard/Dashboard"
import About from "../About/About"

export default function Mainpage() {

  return (
    <main>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stocks" element={<Dashboard />} />
        </Routes>
    </main>
  )
}

