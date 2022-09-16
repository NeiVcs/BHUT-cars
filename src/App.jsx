import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {

  return (
    <div id="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
  
}
