import { useState } from "react";
import IconButton from "./icon_button";
import "../styles/navigator.css";

const Navigator = () => {
  const [icon, setIcon] = useState("home");

  const handleClick = (icon) => {
    setIcon(icon);
  };

  return (
    <section className="fixed-bottom pb-3 pt-2">
      <IconButton
        icon="home"
        active={icon}
        labelActive="Home"
        onClick={() => handleClick("home")}
      />
      <IconButton
        icon="search"
        active={icon}
        labelActive="Search"
        onClick={() => handleClick("search")}
      />
      <IconButton
        icon="add_circle_outline"
        active={icon}
        labelActive="Historia"
        onClick={() => handleClick("add_circle_outline")}
      />
      <IconButton
        icon="slideshow"
        active={icon}
        labelActive="Videos"
        onClick={() => handleClick("slideshow")}
      />
      <IconButton
        icon="person"
        active={icon}
        labelActive="Perfil"
        onClick={() => handleClick("person")}
      />
    </section>
  );
};

export default Navigator;
