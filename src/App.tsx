import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Navbar from './components/appbar/Navbar';
import About from './pages/about/About';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';

function App() {
  
  const theme = useTheme()
 
  return (
   <div style={{paddingTop: "5rem"}}>
     <ThemeProvider theme={theme}>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
     </ThemeProvider>
   </div>
  );
}

export default App;
