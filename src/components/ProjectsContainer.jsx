import React from "react";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Projetos focados em front-end</p>
      <p>Dos quais estão inclusos:</p>
      <p>*Rede Social de postagens</p>
      <p>*Chat App semelhante ao WhatsApp</p>
      <p>*Consumindo API de dados de Pokémon</p>
      <p>*Consumindo API de busca de dados do GitHub</p>
      <p>*Jogo da Velha</p>
      <p>*Jogo da Memória</p>
      <p>*Jogo da Forca</p>
      <p>*Entre outros</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <a
          target="_blank"
          href="https://social-vibe-git-main-ramoncosta07.vercel.app/"
          className="btn"
        >
          Rede Social Responsivo
        </a>
        <a
          target="_blank"
          href="https://chat-app-psi-six.vercel.app/"
          className="btn"
        >
          Chat App
        </a>
        <a
          target="_blank"
          href="https://github.com/RamonCosta07?tab=repositories"
          className="btn"
        >
          Ver Outros Projetos
        </a>
      </div>
    </section>
  );
};

export default ProjectsContainer;
