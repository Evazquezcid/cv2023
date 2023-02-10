import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <div className="containerimagen">
          <img className="avatar" src="banner.png" alt="foto" />
        </div>

        <div className="mashero">
          <h4>
            Codeo y Diseño paginas WEB.<br></br>Me encanta lo que hago y
            disfruto investigando nuevas técnologías. Empecé en el mundo del
            desarrollo hace casi un año y actualmente hago pequeños trabajos
            Freelance mientras me sigo formando. Me gusta todo lo relacionado
            con el diseño y la maquetación y acabo de finalizar un curso "Master
            en Css:<strong>"Master
            en Css:Responsive, SASS, Flesbox , Grid y Bootstrap" .</strong> 
            <h4>
              {" "}
              Capacidad de liderazgo, gestión, formación y desarrollo de
              equipos. Alta capacidad de aprendizaje al vuelo, adaptación al
              cambio, habilidad organizativa y trabajo en equipo. Siempre estoy
              en constante aprendizaje y formándome en nuevas tecnologías.
            </h4>
           <h4> Me considero una persona muy sociable y con muchas ganas de aprender
            y aportar mis conocimientos en el sector Web Developer.</h4>
          </h4>
         
          <h4>
            {" "}
            Aparte del mundo del desarrollo, me gusta el Marketing Digital y
            tengo un <strong>Programa superior de Adobe Campaing, Analytics y Target.</strong>{" "}
          </h4>
         
          <h4>
           Desde este  botón puedes descargar tambien mi CV en PDF. <br></br>
           </h4>
        </div>

        <button className="btncv">
          <a href={"EstherVazquezCid.pdf"} target="_blank" rel="noopener noreferrer">
            CV PDF
          </a>
        </button>
        <div className="allh">
        <h4 className="tools">Tools</h4>
          <div className="herramientas">
          
            <img className="img" src="react.png" alt="foto" />
            <img className="img" src="javascrip.png" alt="foto" />
            <img className="img" src="html.png" alt="foto" />
            <img className="img" src="sass.png" alt="foto" />
            <img className="img" src="node.png" alt="foto" />
          </div>
          <div className="herramientas2">
            <img className="img" src="php.png" alt="foto" />
            <img className="img" src="git.png" alt="foto" />
            <img className="img" src="bootstrap.png" alt="foto" />
            <img className="img" src="wordpress.png" alt="foto" />
            
          </div>
          <div className="herramientas3">
          <img className="img" src="adobe_target-logo.webp" alt="foto" />
            <img className="img" src="adobe_campaign.webp" alt="foto" />
          </div>
        </div>

        
      </div>

      <div className="iconos">
        <a href="https://www.instagram.com/especialistasweb/">
          <img src="instagram.png" alt="foto" />
        </a>
        <a href="https://www.linkedin.com/in/esthervazquezcid/">
          <img src="linki.png" alt="foto" />
        </a>
      </div>
    </div>
  );
};

export default Home;
