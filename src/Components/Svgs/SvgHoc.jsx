import React from 'react'

export const SvgHoc=(OriginalComponent)=> {
  const NewComponent=(props)=>{
       const NewProps={
             width:'25px',
             height:'25px',
             ...props  
       }             
              return <>
              <OriginalComponent {...NewProps}/>
              </>
  }                  
  return NewComponent
}
export default SvgHoc; 