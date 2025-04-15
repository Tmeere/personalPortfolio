import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './divider.css';

const Divider = ({ id }) => {
    return (
        <div id={id} className="navbar-divider">
          <br></br>
        </div>
    );
};

export default Divider;