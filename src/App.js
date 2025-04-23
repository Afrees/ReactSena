import React from 'react'
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from'./components/Section';
import Footer from './components/Footer';

function App() {
  return(
  <div className='App'>
   <Header />
   <Navbar />
   <main>
    <section id="servicios" title="Servicios">
      Ofresemos soluciones en el diseño y desarrollo web, UX/UI y soporte tecnico.
    </section>
    <section id="usuarios" title="Usuarios">
      Mas de 1,000 usuarios son los que ingresan diariamente a nuestra pagina , Gracias por hacer parte de nostros.
    </section>
    <section id="contacto" title="Contacto">
     Recuerda que puedes escribirnos o llamarnos a orizzonter@gmail.com o al 123-123.
    </section>
   </main>
   <Footer />

  </div>

  );
  }
  export default App;
  