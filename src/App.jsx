import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{
        <ul>
          <li>
            <a href="/blue">Blue</a>
          </li>
          <li>
            <a href="/red">Red</a>
          </li>
          <li>
            <a href="/pink">Home</a>
          </li>
        </ul>
        }
        </div>
      <div id="main-section">{
        <Routes>
        <Route path="/blue" element={<h1 style={{ backgroundColor: 'blue' }}>Blue</h1>} />
        <Route path="/red" element={<h1 style={{ backgroundColor: 'red' }}>Red</h1>} />
      </Routes>
      }
      </div>
    </div>
    </>
  )
}

export default App
