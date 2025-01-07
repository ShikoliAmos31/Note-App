
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotesDetail from './pages/NotesDetail'
import AddNotes from './pages/AddNotes'
import MainLayout from './layouts/MainLayout'
import EditNote from './pages/EditNote'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/add-notes" element={<AddNotes />} />
    <Route path="/edit-note" element={<EditNote />} />
    <Route path="/notes-detail" element={<NotesDetail />} />
  </Route> 

  ))
 
  return <RouterProvider router={router} />
}

export default App