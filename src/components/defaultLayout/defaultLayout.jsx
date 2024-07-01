import React from 'react'
import Sidebar from '../sidebar/sidebar'
import Header from '../header/header'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <div className="App">
        <Header />
        <main>
          <div className="w-full relative bg-page-back-ground h-[720px] flex flex-col items-start justify-start text-left text-xs text-text-gray font-text-xs-medium">
            <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start z-[1]"></div>
            <div className="self-stretch flex flex-row items-start justify-start z-[0] text-gray-100">
              <Sidebar />
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout
