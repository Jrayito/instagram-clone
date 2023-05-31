import instagramLogo from "../assets/logo_white.png";
import "../styles/nav.css";

const Nav = () => {
  return (
    <section className="sticky-top p-2">
      <div className="container-img">
        <img src={instagramLogo} alt="Instagram logo clone" className="logo" />
      </div>
      <button className="material-icons mx-2">favorite_border</button>
      <button className="material-icons mx-2">question_answer</button>
    </section>
  );
};

export default Nav;
