import "../styles/icon_button.css";
const IconButton = ({ icon, onClick, active, labelActive }) => {
  return (
    <button className="mx-2" onClick={onClick}>
      <i className="material-icons">{icon}</i>
      {active === icon ? (
        <span className="span-button">{labelActive}</span>
      ) : (
        <span></span>
      )}
    </button>
  );
};

export default IconButton;
