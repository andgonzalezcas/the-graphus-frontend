import React from "react"

const Terms = () => {
  return (
    <section className="hero section center-content has-top-divider has-bottom-divider invert-color">
      <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
        <span className="text-color-primary">Terminos y condiciones</span>
      </h1>
      <div className="container-xs">
        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            La aplicación cumple con la ley estatutaria 1581 de 2012 sobre tratamiento de datos ya que información de índole personal es registrada en la base de datos
        </p>
      </div>
      <div className="container-xs">
        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
          La aplicación cumple con la ley 527 de 1999 que le da validez a un mensaje de texto o correo electrónico como a un documento en físico firmado, por tanto, sin importar el formato se debe conservar el soporte
        </p>
      </div>
    </section>
  )
}

export default Terms