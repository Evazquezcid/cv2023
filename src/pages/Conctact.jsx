import React from 'react'
import "./Contact.css";

const Conctact = () => {
  return (

  <div className='hero'>
  <div className='header'>
 <h1> About Me</h1>

 <p>Si has llegado hasta aquí me gustaria que me conocieras un poco más allá de la programación y poder compartir mis pasiones. Me gusta todo lo que tenga que ver con los animales,
  los libros, y el comportamiento de las personas, la Psicologia y el Coaching. </p>
 <p>Colaboro con varias protectoras y me gustaría lanzar un proyecto que tengo en mente para una ONG.</p>
  </div>
  <><div className="row1-container">
      <div className="box box-down cyan">
        <h2>Leer 📔 </h2>
        <p>Cualquier cosa que me haga crecer y pensar, que vaya un paso más allá. Los libros de historias reales y de vidas pasadas son de mis favoritos.</p>
        <img src="leer.jpg" alt="leer" />
      </div>

      <div className="box red">
        <h2>Comer 🍕 </h2>
        <p>Viaje donde viaje siempre tengo una lista de sitios a los que ir a degustar algo diferente. No importa la ciudad o el País, siempre es buen momento de probar algo nuevo.</p>
        <img src="comer.jpg" alt="" />
      </div>

      <div className="box box-down blue">
        <h2>Viajar 🧳 </h2>
        <p>Una mochila, un billete de avión y cualquier sitio del mundo es bienvenido. Me encanta Asia, su comida, su clima, su gente...</p>
        <img src="viajar.jpg" alt="" />
      </div>
     
    </div>
    <div className="row2-container">
        <div className="box orange">
          <h2>Música 🎧</h2>
          <p>En casi todas sus categorias, clasica, rock, indie. Haz click en la foto y te comparto mi lista favorita para codear!  </p>
          <a href="https://open.spotify.com/playlist/3fKOnwgR2v4Qc0DH09KJKz">  <img src="musica.jpg" alt="" /></a>
        </div>
      </div></>
      
      </div>
     



  )
}

export default Conctact
