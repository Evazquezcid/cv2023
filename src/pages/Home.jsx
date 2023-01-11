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
         <strong>Codeo y Diseño paginas WEB.</strong> <br></br>Me encanta lo que hago y disfruto
          investigando nuevas técnologías. Empecé en el mundo del desarrollo hace un año y actualmente hago pequeños trabajos Freelance mientras me sigo formando.
          También estoy en proceso de creación de una Agencia de Desarrolo Web para autónomos y pequeñas empresas. Me gusta todo lo relacionado con el diseño y la maquetación. 
          
        </h4>
        <h4>
        Tienes un botón para poder descargar mi CV en formato PDF. <br></br>Estoy lista para un nuevo reto! 
        </h4>
      <h4> Aparte del mundo del desarrollo, me gusta el Marketing Digital y tengo un Programa superior de Adobe Campaing, Analytics y Target. </h4>
      <h4>Let´s Go!  🚀</h4>
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
      <img className="img" src="wordpress.png" alt="foto" />
      </div>
      </div>
       
        <button className="btncv">
            <a href={"estherv.png"} target="_blank" rel="noopener noreferrer">CV PDF</a>
        </button>
      </div>
      
     
     
   

    

      <div className="iconos">
     
      <a href="https://www.instagram.com/especialistasweb/"><img  src="instagram.png" alt="foto" /></a>
      <a href="https://www.linkedin.com/in/esthervazquezcid/"><img  src="linki.png" alt="foto"/></a>
        </div>
     
    </div>
    
  );
};

export default Home;
