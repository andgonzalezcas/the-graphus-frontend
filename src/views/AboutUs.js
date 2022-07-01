import React from "react"

const GabrielImage = require('./../assets/images/Gabriel.jpeg')

const About = () => {
  return (
    <section className="hero section center-content has-bottom-divider invert-color">
      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
        <span className="text-color-primary">Nuestro grupo de trabajo</span>
      </h1>
      <section class=" hero-inner section-inner reveal-from-bottom" data-reveal-delay="400">
        <a class="fir-imageover" rel="noopener" target="_blank" href="https://gmail.com">
          <img class="fir-author-image fir-clickcircle" src="https://lh3.googleusercontent.com/a-/AOh14GiLRDK3hhO2A8bbV13bgLokbfSAF706hMzAF6EBwg=s64-c" alt="Alexis Photo" />
        </a>

        <figcaption>
          <div class="fig-author-figure-title">Alexis Lenis Ochoa</div>
          <div class="fig-author-figure-title">Master Scrum - aleniso@unal.edu.co</div>
          <div class="fig-author-figure-text">Alexis a liderado desde la gestion el proyecto, su principal aporte a sido en documentacion, gestion de grupo para realizacion de actividades y facilitador de informacion para realizar el ejercicio de software de la mejor manera posible.</div>
          <div class="fig-author-figure-title"></div>
        </figcaption>
      </section>
      <section class=" hero-inner section-inner reveal-from-bottom" data-reveal-delay="200">
        <a class="fir-imageover" rel="noopener" target="_blank" href="https://gmail.com">
          <img class="fir-author-image fir-clickcircle" src="https://lh3.googleusercontent.com/a-/AOh14GjcIDo_enw0zX1VfD7100OYTbO2eyLWCRq5zuZQ0Q=s64-c" alt="Paul Letelien Photo" />
        </a>

        <figcaption>
          <div class="fig-author-figure-title">Paul Leteliel Moros Anacona</div>
          <div class="fig-author-figure-title">Backend - Service Administrator - pmoros@unal.edu.co</div>
          <div class="fig-author-figure-text">La mision principal de Paul Moros a sido la de brindar un servicio constante a la hora de obtener la informacion del back, trabajo en conjunto con Gabriel principalmente en la creacion de la base de datos, su despliegue y correcto funcionamiento.</div>
        </figcaption>
      </section>
      <section class=" hero-inner section-inner reveal-from-bottom" data-reveal-delay="200">
        <a class="fir-imageover" rel="noopener" target="_blank" href="https://gmail.com">
          <img class="fir-author-image fir-clickcircle" src={GabrielImage} alt="Gabriel Andres Photo" />
        </a>

        <figcaption>
          <div class="fig-author-figure-title">Gabriel Andres Anzola Tachak</div>
          <div class="fig-author-figure-title">Backend - Database Administrator - ganzola@unal.edu.co</div>
          <div class="fig-author-figure-text">Su conocimiento en bases de datos, nos permitio desarrollar funciones logicas para la maquetacion correcta de cada perfil de usuario en cuestion de su ruta curricular, participo con Paul en el desarrollo del backend del proyecto.</div>
        </figcaption>
      </section>
      <section class=" hero-inner section-inner reveal-from-bottom" data-reveal-delay="200">
        <a class="fir-imageover" rel="noopener" target="_blank" href="https://gmail.com">
          <img class="fir-author-image fir-clickcircle" src="https://lh3.googleusercontent.com/a-/AOh14GiSSQtuZ38_SHJatliKedza1GoI_A_UVidDKTdaww=s64-c" alt="Camilo Andres Photo" />
        </a>

        <figcaption>
          <div class="fig-author-figure-title">Camilo Andres Gonzalez Castro</div>
          <div class="fig-author-figure-title">Frontend - UI/UX - andgonzalezcas@unal.edu.co</div>
          <div class="fig-author-figure-text">Principal desarrollador de los componentes del proyecto, maquetacion y analisis para mejorar la experiencia del usuario, trabajo junto a Ferney segura en el desarrollo funcional y visual del Frontend.</div>
        </figcaption>
      </section>
      <section class=" hero-inner section-inner reveal-from-bottom" data-reveal-delay="200">
        <a class="fir-imageover" rel="noopener" target="_blank" href="https://gmail.com">
          <img class="fir-author-image fir-clickcircle" src="https://lh3.googleusercontent.com/a/AATXAJwDuNxum5HIrNfWNuQ2I0RSHnWtPGHRq6z9dOwT=s64-c-mo" alt="Eduan Ferney Photo" />
        </a>

        <figcaption>
          <div class="fig-author-figure-title">Eduan Ferney Segura Galindo</div>
          <div class="fig-author-figure-title">Frontend - main developer - edsegurag@unal.edu.co</div>
          <div class="fig-author-figure-text">Junto a Paul lideraron la conexion entre frontend y backend, Ferney fue, por su conocimiento, quien influyo fuertemente en la creacion del grafo para la malla curricular.</div>
        </figcaption>
      </section>
    </section>
  )
}

export default About