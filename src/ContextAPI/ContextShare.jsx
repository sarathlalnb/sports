import React, { createContext, useState } from 'react'


export const updateprofileResponseContext = createContext()
function ContextShare({children}) {

   
    const [updateprofileResponse,setUpdateprofileResponse] = useState(null)
  return (
    <>
  
    <updateprofileResponseContext.Provider value={{updateprofileResponse,setUpdateprofileResponse}}>
    {children}
    </updateprofileResponseContext.Provider>
    

  
    </>
  )
}
 
export default ContextShare