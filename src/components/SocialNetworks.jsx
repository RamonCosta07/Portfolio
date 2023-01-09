import "../styles/components/socialNetworks.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ramon-costa-nascimento-239137137/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/RamonCosta07/",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ramon_costa007/",
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="social-btn"
          id={social.name}
          target="_blank"
        >
          {social.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
