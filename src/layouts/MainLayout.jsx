
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line react/prop-types
const MainLayout = ({searchText, handleSearchText}) => {
  return (
    <>
     <NavBar searchText={searchText} handleSearchText={handleSearchText}/>
     <ToastContainer />
     <Outlet/>
    </>
  )
}

export default MainLayout