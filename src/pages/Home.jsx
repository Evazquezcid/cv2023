import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1 className="titulo">Junior Full Stack Developer</h1>
        <h2>Soy Esther</h2>
        <h4>
          Codeo y Diseño paginas WEB.<br></br>Me encanta lo que hago y disfruto
          investigando nuevas técnologías. 
        </h4>
      </div>
      <div className="containerimagen">
        <img className="img" src="avataaars.png" alt="foto" />
      </div>
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
      
      </div>
      <div className="masinfo">
        <p>lFULL STACK JUNIOR DEVELOPER APASIONADA POR LAS NUEVAS TECNOLOGÍAS. <br></br>ESPECIALIZADA EN FRONT END, TECNOLOGÍAS COMO REACT, HTML, CSS Y JAVASCRIPT.
<br></br>CAPACIDAD DE LIDERAZGO, GESTIÓN, FORMACIÓN Y DESARROLLO DE EQUIPOS.
<br></br>ALTA CAPACIDAD DE APRENDIZAJE AL VUELO, ADAPTACIÓN AL CAMBIO, HABILIDAD ORGANIZATIVA Y TRABAJO EN EQUIPO. <br></br>SIEMPRE ESTOY EN CONSTANTE APRENDIZAJE Y FORMÁNDOME EN NUEVAS TECNOLOGÍAS.
<br></br>ME CONSIDERO UNA PERSONA MUY SOCIABLE Y CON MUCHAS GANAS DE APRENDER Y APORTAR MIS CONOCIMIENTOS EN EL SECTOR WEB DEVELOPER.</p>
     <div className="finalhome">
        <img className="img" src="mac.png" alt="foto" />
     </div>   
    
      </div>
     
    </div>
    
  );
};

export default Home;
