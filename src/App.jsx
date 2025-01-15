import { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotesDetail from './pages/NotesDetail'
import AddNotes from './pages/AddNotes'
import MainLayout from './layouts/MainLayout'
import EditNote from './pages/EditNote'
import { toast } from 'react-toastify'

const App = () => {

  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("")
  const [filterText, setFilterText] = useState("");


  const handleFilterText = (val) => {
    setFilterText(val);
  };

  const handleSearchText = (val) => {
    setSearchText(val);
  }


  const filteredNotes =
   filterText === "BUSINESS"
     ? notes.filter(note => note.category=="BUSINESS")
     : filterText === "PERSONAL" ? notes.filter(note => note.category=="PERSONAL")
     : filterText === "IMPORTANT" ? notes.filter(note => note.category=="IMPORTANT")
     : notes;


     useEffect(() => {
      if(searchText.length < 3 ) return;
      axios.get(`http://127.0.0.1:8004/notes-search/?search=${searchText}`)
      .then(res => {
        console.log(res.data);
        setNotes(res.data)
      })
      .catch(err => console.log(err.message));
     }, [searchText]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("127.0.0.1:8004/notes/")
    .then(res => {
      console.log(res.data);
      setNotes(res.data);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err.message);
    });
  }, []);


  const addNote = (data) => {
    axios.post("127.0.0.1:8004/notes/", data)
    .then(res => {
      setNotes([...notes, data])
      toast.success("A new note has been added")
      console.log(res.data)
    })

    .catch(err => {
      console.log(console.log(err.message))
    })
  }

  
  const updatedNote = (data, slug) => {
    axios.put(`http://127.0.0.1:8004/notes/${slug}/`, data)
    .then(res => {
      console.log(res.data);
      toast.success("Note has been updated succesfully")
    })

    .catch(err => console.log(err.message));

  };

  const deleteNote = (slug) => {
    axios.delete(`http://127.0.0.1:8004/notes/${slug}`)
    
    .catch(err => console.log(err.message));
  };


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout searchText={searchText} handleSearchText={handleSearchText}/>}>
    <Route index element={<HomePage notes={filteredNotes} loading={isLoading} handleFilterText={handleFilterText}/>} />
    <Route path="/add-notes" element={<AddNotes addNote={addNote}/>} />
    <Route path="/edit-note/:slug" element={<EditNote updatedNote={updatedNote} />} />
    <Route path="/notes/:slug" element={<NotesDetail deleteNote={deleteNote} />} />
  </Route> 

  ))
 
  return <RouterProvider router={router} />
}

export default App