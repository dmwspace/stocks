import { useState } from 'react'
import './styles.css'
import stocks from "./stockdata";
import Header from "./Header/Header"
import Mainpage from "./Mainpage/Mainpage"

function App() {
  return (
    <div>
      <Header />
      <Mainpage />
    </div>
  );
}

export default App
