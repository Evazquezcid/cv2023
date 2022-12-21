import React from 'react'
import "./Contact.css";

const Conctact = () => {
  return (

  <div className='hero'>
  <div className='header'>
 <h1> About Me</h1>
 <p>Si has llegado hasta aqui me gustaria que me conocieras un poco más allá de la programación y poder compartirte mis pasiones</p>
  </div>
    <><div className="row1-container">
      <div className="box box-down cyan">
        <h2>Leer</h2>
        <p>Cualquier cosa que me haga crecer y pensar, que vaya un paso más allá.</p>
        <img src="leer.jpg" alt="leer" />
      </div>

      <div className="box red">
        <h2>Comer</h2>
        <p>Me encanta descubrir sitios a los que ir a probar la comida, dulce, salado, de aqui, de alli...</p>
        <img src="comer.jpg" alt="" />
      </div>

      <div className="box box-down blue">
        <h2>Viajar</h2>
        <p>Una mochila, un billete de avión y cualquier sitio del mundo es bienvenido. Me encanta Asia, su comida, su clima, su gente...</p>
        <img src="viajar.jpg" alt="" />
      </div>
    </div><div className="row2-container">
        <div className="box orange">
          <h2>Música</h2>
          <p>En casi todas sus categorias, clasica, rock, indie. Tengo mi lista favorita para codear! 🎧</p>
          <img src="musica.jpg" alt="" />
        </div>
      </div></>
      </div>



  )
}

export default Conctact
