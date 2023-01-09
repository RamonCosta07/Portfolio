import React from "react";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Projetos focados em front-end</p>
      <p>Dos quais estão inclusos:</p>
      <p>*Consumindo API de dados de Pokémon</p>
      <p>*Consumindo API de busca de dados do GitHub</p>
      <p>*Jogo da Velha</p>
      <p>*Jogo da Memória</p>
      <p>*Jogo da Forca</p>
      <p>*Entre outros</p>
      <a
        target="_blank"
        href="https://github.com/RamonCosta07?tab=repositories"
        className="btn"
      >
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;
