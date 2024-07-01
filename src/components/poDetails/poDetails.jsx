import React from 'react'
import poDetails from '../../assets/poDetails.png'

const PODetails = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-sm-5 text-text-dark">
      <img src={poDetails} alt="poDetailsImg" className="w-full h-full" />
    </div>
  )
}

export default PODetails
