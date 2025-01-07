import "./NotesDetail.css"
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
//import Modal from "../components/Modal";

const NotesDetail = () => {
  return (
    <>
    <div className="note-container">
    <h3 className="title">PRO163 TECH </h3>
    <span className="d-flex justify-content-center">
    <p className="note-date font-12 text-muted me-5"> created: 20 December 2024</p>
    <p className="note-date font-12 text-muted me-5">last updated: 11 February 2025</p>
    </span>
    <span className="button-group">
      <Link to="/edit-note"><button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
      </Link>
      <button className="btn btn-danger"><BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="description">
    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born,
    and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
    the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
    but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
    Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,
    but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
    To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
    But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
    or one who avoids a pain that produces no resultant pleasure?
    </p>

  </div>
  {/*<Modal />*/}
  </>
  );
};

export default NotesDetail
