//import NoteCard from './NoteCard'
//import Loader from './Loader'

//const NoteCardContainer = ({notes, loading}) => {
  //return (
   // <div className="container">
    //<div className="note-has-grid row">

      //{ loading && <Loader loading={loading} /> }

    //{ notes.map(note => <NoteCard key={note.id} note={note} />)}

      
      
      
    //</div>
   // </div>
  //)
//}

//export default NoteCardContainer;






import NoteCard from './NoteCard';
import Loader from './Loader';

const NoteCardContainer = ({ notes, loading }) => {
  // Ensure notes is always an array
  const safeNotes = Array.isArray(notes) ? notes : [];

  return (
    <div className="container">
      <div className="note-has-grid row">
        {loading && <Loader loading={loading} />}
        {safeNotes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteCardContainer;
