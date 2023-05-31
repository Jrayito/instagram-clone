import instagramLogo from "../assets/logo_white.png";
import "../styles/nav.css";
import IconButton from "./icon_button";

const Nav = () => {
  return (
    <section className="fixed-top p-2">
      <div className="container-img">
        <img src={instagramLogo} alt="Instagram logo clone" className="logo" />
      </div>
      {/* faltaria pasar la función a ejecutar */}
      <IconButton icon="favorite_border" />
      <IconButton icon="question_answer" />
    </section>
  );
};

export default Nav;
