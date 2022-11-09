import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const NotFound = () => {

  const navigate = useNavigate()
  return (
    <>
      { 
        useEffect( ()=>{
          navigate(-1)

        }, [])
        
      }
    </>
  )
}
