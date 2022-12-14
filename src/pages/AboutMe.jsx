import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <div className="containeraboutme">
     <h1>Projects</h1>
      <div className="cointainertarjetas">
      <ul class="cards">
  <li>
    <a href="https://studiosoho.vercel.app/" class="card">
      <img src="logocutre2.png" class="card__image" alt="soho" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="avataaars.png" alt="me" />
          <div class="card__header-text">
            <h3 class="card__title">SOHO TATTOO ESTUDIO</h3>            
            <span class="card__status">REACT,JS,CSS</span>
          </div>
        </div>
        <p class="card__description">Proyecto real EN PROCESO para un Estudio de tatuajes en Málaga. Utilizando React, MailJs.  </p>
        
      </div>
    </a>      
  </li>
  <li>
    <a href="https://api-rick-morty-mu.vercel.app/ " class="card">
      <img src="pegatina.png" class="card__image" alt="ricky" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="avataaars.png" alt="me" />
          <div class="card__header-text">
            <h3 class="card__title">RICKY & MORTY -API-</h3>
            <span class="card__status">REACT,JS,CSS.</span>
          </div>
        </div>
        <p class="card__description">Traigo de la APi publica los datos y genero unas tarjetas principales que nos llevan a unas más de talladas.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://netflix-copy-self.vercel.app/" class="card">
      <img src="ne.png" class="card__image" alt="netflix" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="avataaars.png" alt="me" />
          <div class="card__header-text">
            <h3 class="card__title">NETFLIX REPLICA</h3>
            {/* <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>             */}
            <span class="card__status">ANGULAR,HTML,JAVASCRIP,CSS.</span>
          </div>
        </div>
        <p class="card__description">Manejo Angular en estre proyecto simulando la pagina de Netflix para practicar la re-utilización de componentes.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://piedrapapelotijera.vercel.app/" class="card">
      <img src="piedrita.png" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="avataaars.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">PIEDRA,PAPEL O TIJERA</h3>
            <span class="card__status">JAVASCRIP</span>
          </div>          
        </div>
        <p class="card__description">Practicando Javascrips y sus eventos. Si lo puebras no podrás parar. </p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://carritocompra-nine.vercel.app/ " class="card">
      <img src="toy.png" class="card__image" alt="tienda" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="avataaars.png" alt="me" />
          <div class="card__header-text">
            <h3 class="card__title">TOYLAND</h3>
            <span class="card__status">JAVASCRIP Y BOOTSTRAP</span>
          </div>
        </div>
        <p class="card__description">Creo un carro de la compra donde poder editarlo o eliminar productos. Utilizo Bootstrap para la maquetacíon.</p>
      </div>
    </a>
  </li>
  <li>
    <a href="https://cronometro-react-one.vercel.app/ " class="card">
      <img src="horas.png" class="card__image" alt="reloj" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="avataaars.png" alt="me" />
          <div class="card__header-text">
            <h3 class="card__title">CRONOMETRO, CUENTA ATRÁS, HORA </h3>
            <span class="card__status">REACT,CSS.</span>
          </div>
        </div>
        <p class="card__description">Traigo de la APi publica los datos y genero unas tarjetas principales que nos llevan a unas más de talladas.</p>
      </div>
    </a>
  </li>    
</ul>
</div>
    </div>
  );
};

export default AboutMe;
