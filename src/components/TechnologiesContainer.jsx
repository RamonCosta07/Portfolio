import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import "../styles/components/TechnologiesContainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, know: 'Conhecimento em HTML Semântico, divs, classes, tags, importações' },
  { id: "css", name: "CSS3", icon: <DiCss3 />, know: 'Conhecimento em responsividade com media querys, Styled Components, SASS, grid, flexbox, seletores' },
  { id: "js", name: "Javascript", icon: <DiJsBadge />, know: 'Conhecimento em functions, function anônima, arrow function, assincronismo com await e promisses, funções especiais como map; filter e reducer, consumir API, manipulação da DOM' },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, know: 'Conhecimento em modais, Scrollspy, grid, entre outros componentes do framework' },
  { id: "react", name: "ReactJS", icon: <DiReact />, know: 'Conhecimento em components, Hooks (tais como useState, useEffect, useCallback, useMemo, useRef e até mesmo criar os próprios hooks com customm hooks), react router dom, context API' },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript />, know: 'Conhecimento em tipagem, interfaces, tipos, tipagem estática' },
  { id: "git", name: "Git", icon: <DiGit />, know: 'Conhecimento em versionamento de código, pull, push, delete, branchs' },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, know: 'Conhecimento em CRUD, InnerJoin' },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technologie-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologie-info">
              <h3>{tech.name}</h3>
              <p>{tech.know}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
