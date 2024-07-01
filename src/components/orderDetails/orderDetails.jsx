import React from 'react'
import orderDetailsImg from '../../assets/orderDetails.png'

const OrderDetails = () => {
  return (
    <div className="self-stretch w-[300px] overflow-y-auto shrink-0 flex flex-col items-start justify-start text-sm-5 text-text-gray">
      <img src={orderDetailsImg} alt="orderImg" className="h-auto w-auto" />
    </div>
  )
}

export default OrderDetails
