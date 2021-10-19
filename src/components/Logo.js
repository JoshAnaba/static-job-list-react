import React from 'react'
const Logo = ({logo,companyName}) => {
  return (
  <img
   className="company-logo" 
   src={logo}
   alt='companyName'
   />
  )
}

export default Logo