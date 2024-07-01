import { useState } from 'react'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export default function Sidebar() {
  const [isAccountingOpen, setIsAccountingOpen] = useState(true)
  return (
    <>
      <div className="self-stretch w-[190px] bg-purple-900 overflow-y-auto shrink-0 flex flex-row items-start justify-start">
        <img
          className="self-stretch w-[0.8px] relative max-h-full"
          alt=""
          src="/divider.svg"
        />
        <div className="flex-1 bg-purple-900 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-0 pb-0">
            <div className="self-stretch overflow-y-auto flex flex-col items-start justify-start py-0 px-3 gap-[3px]">
              <div className="cursor-pointer self-stretch flex flex-col items-start justify-start gap-[3px]">
                <div className="self-stretch rounded-8xs-5 bg-purple-900 h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-[9px] box-border z-[2]">
                  <div
                    className="w-[150px] flex flex-row items-center justify-start gap-[9px]"
                    onClick={() => setIsAccountingOpen(!isAccountingOpen)}
                  >
                    <IoMdCheckboxOutline className="w-5 h-5" />
                    <div className="flex-1 relative leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      Accounting
                    </div>
                    {isAccountingOpen ? (
                      <MdKeyboardArrowDown className="h-4 w-4" />
                    ) : (
                      <MdKeyboardArrowUp className="h-4 w-4" />
                    )}
                  </div>
                </div>
                {isAccountingOpen && (
                  <div className="self-stretch rounded-8xs-5 bg-primary h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-[9px] box-border z-[1]">
                    <div className="flex flex-row items-center justify-start gap-[9px]">
                      <div className="w-[18px] relative h-[18px] overflow-hidden shrink-0" />
                      <div className="relative leading-[18px] font-medium">
                        Purchase Order
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
