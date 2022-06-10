import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const CurriculumCard = () => {
  const token = useSelector((state) => state.token.value)

  return(
    <div>Card</div>
  )
}

export default CurriculumCard