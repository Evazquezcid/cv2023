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
      <img className="img" src="bootstrap.png" alt="foto" />
      
      </div>
      <div className="mashero">
      <h4> Aparte del mundo del desarrollo, me gusta el Marketing Digital y tengo un Programa superios de Adobe Campaing, Analytics y Target. </h4>
      </div>
   

     <div className="finalhome">
        <img className="img" src="mac.png" alt="foto" />
     
    
      </div>
     
    </div>
    
  );
};

export default Home;
