function Home () {

  return (
    <div className="grid grid-row-3 grid-cols-1 lg:grid-cols-3 gap-6 px-5 py-20 justify-center">
      <div className="flex flex-col content-center lg:row-span-3 lg:col-start-1">
        <div className='flex justify-center lg:justify-end py=20'>
          <p className="text-2xl text-white text">The Graphus Project</p>
        </div>
        <div className="h-70"></div>
        <p className="text-center text-sm text-white">The graphus project nacio en la materia Ingenieria de Software II de la Universidad Nacional de Colombia</p>
      </div>
      <div className="flex justify-center lg:row-span-3 lg:col-start-2">
        <img src="http://www.grupokartun.unal.edu.co/templates/unal/images/escudoUnal.png" className="object-contain h-48 w-96" alt="Logo Universidad Nacional de Colombia"/>
      </div>
      <div className="flex justify-center content-center lg:row-start-3 lg:row-span-1 lg:col-start-3">
        <p className="text-center text-sm text-white">The graphus project nacio en la materia Ingenieria de Software II de la Universidad Nacional de Colombia</p>
      </div>
    </div>
  )
}

export default Home