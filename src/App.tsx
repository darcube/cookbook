import { useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';

import { Route, Routes } from 'react-router-dom';
import Main from './containers/Main'

function App() {
  return (
    
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/team" element={<Team />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
