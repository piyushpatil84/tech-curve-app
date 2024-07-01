import React from 'react'
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb'
import GeneralInfo from '../../components/generalInfo/generalInfo'
import PODetails from '../../components/poDetails/poDetails'
import OrderDetails from '../../components/orderDetails/orderDetails'

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 gap-[16px] text-gray">
        <div className="self-stretch w-[886px] overflow-y-auto flex flex-col items-start justify-start gap-[16px]">
          <GeneralInfo />
          <PODetails />
        </div>
        <OrderDetails />
      </div>
    </>
  )
}

export default Home
