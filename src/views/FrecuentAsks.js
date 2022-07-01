import React from "react"
import SectionHeader from "../components/sections/partials/SectionHeader"

const questions = [
  {
    title: '¿Qué significado tienen los colores naranja, azul y verde en el interior de las tarjetas del grafo?',
    paragraph: 'Estos colores son indicadores de que tan urgente es ver una materia, el verde significa que puedes ver la materia y que no es prerrequisito de nada, el azul significa que puedes ver la materia y que esta es prerrequisito de alguna otra materia, pero según la maya curricular no estás atrasado en esa línea de materias. Para finalizar el color naranja significa que debes ver esta materia ya que vas atrasado en esta línea y que esta materia en particular es prerrequisito de otra(s).'
  },
  {
    title: '¿Cómo se obtiene mi información curricular?',
    paragraph: 'En esta primera versión del proyecto se utiliza información precargada en la base de datos, sin embargo la idea del proyecto para una segunda versión es conectarse con el Sistema de Información académico de la Universidad Nacional de Colombia y obtener de allí la información que se requiere.'
  },
  {
    title: '¿Cómo realizo una búsqueda de un programa curricular en específico?',
    paragraph: 'En el menú de navegación(parte superior de la pantalla), vamos a la sección de searcher, estando ahi veras una lista de botones rojos que tienen el nombre de una carrera en especifico, despues de elegir la carrera te apareceran botones de color morado que tienen información de las rutas curriculares especificas de la carrera, y al seleccinar tu opcion en estos dos filtros, podras ver la ruta curricular que elegiste.'
  },
  {
    title: '¿Puedo cambiar los colores de la interfaz?',
    paragraph: 'En la versión actual del proyecto solo se dispone de un tema oscuro, este tema se eligió por la identidad del proyecto, igualmente se planea para una siguiente versión ampliar la gama de temas, con el tema claro para aquellos que prefieran este tipo de vistas.'
  }
]

const FrecuentAsks = () => {
  return (
    <section className="hero section center-content has-top-divider has-bottom-divider">
      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
        <span className="text-color-primary">Preguntas frecuentes</span>
      </h1>
      <div className="container reveal-from-bottom" data-reveal-delay="200">
        { questions.map((question, index) => <SectionHeader data={question} className="center-content" key={index} />) }
      </div>
    </section>
  )
}

export default FrecuentAsks