import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider  } from '@mui/material/styles';


import { About, Home, Projects } from './components';
import './index.css'
import { theme } from './Theme/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }>
      <Router>
        <Routes>
          <Route path='/' element={<Home title= {"Morgan McIntosh"}/>} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
