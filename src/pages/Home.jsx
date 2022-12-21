import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <h1 className="titulo">Jr.Full Stack Developer</h1>
        <h2>Soy Esther</h2>
        <h4>
          Codeo y Diseño paginas WEB.<br></br>Me encanta lo que hago y disfruto
          investigando nuevas técnologías. <br></br>En el boton de abajo puedes decargar mi Cv y ver mi trayectoria laboral y mis estudios. 
          Estoy preparada para un nuevo reto. <br>

          </br>Let´s Go! 
        </h4>
        <div className="mashero">
      <h4> Aparte del mundo del desarrollo, me gusta el Marketing Digital y tengo un Programa superior de Adobe Campaing, Analytics y Target. </h4>
      </div>
        <div className="finalhome">
        <img className="imgmac" src="mac.png" alt="foto" />
      </div>
        <button className="btncv">
            <a href={"estherv.png"} target="_blank" rel="noopener noreferrer">CV PDF</a>
        </button>
      </div>
      <div className="containerimagen">
        <img className="avatar" src="avataaars.png" alt="foto" />
      </div>
      <div className="allh">
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
      </div>
     
   

    

      <div className="iconos">
     
      <a href="https://www.instagram.com/especialistasweb/"><img  src="logoinsta.png" alt="foto" /></a>
      <a href="https://www.linkedin.com/in/esthervazquezcid/"><img  src="logolinkedin.png" alt="foto"/></a>
        </div>
     
    </div>
    
  );
};

export default Home;
