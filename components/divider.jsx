import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Divider = ({ color = '#0A0A0A' }) => {
  return <hr className="my-0" style={{ backgroundColor: color, height: '50px', border: 'none' }} />;
};

export default Divider;