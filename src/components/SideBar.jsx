import Foto from "../img/Ramon.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const SideBar = () => {
  return (
    <aside id="side-bar">
      <img src={Foto} alt="Foto de perfil" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="../../public/curriculo.pdf" download className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default SideBar;
