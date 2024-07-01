import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

const breadcrumbs = [
  {
    label: 'Accounting',
    icon: <MdNavigateNext />,
    path: '/',
    isFirst: true,
  },
  {
    label: 'Purchase Order',
    icon: <MdNavigateNext />,
    path: '/',
  },
  { label: 'Edit', icon: <MdNavigateNext />, path: '/edit' },
  {
    label: 'PO-20311',
    icon: <MdNavigateNext />,
    isLast: true,
  },
]

export const Breadcrumb = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start">
      <div className="self-stretch flex flex-row items-center justify-start py-2 px-6 gap-2 z-[1] flex-wrap">
        {breadcrumbs.map((crumb, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-start gap-2"
          >
            {!crumb.isFirst && crumb.icon}
            <Link href={crumb.path}>
              <b
                className={`relative leading-4 ${
                  crumb.isLast ? 'text-text-dark' : ''
                }`}
              >
                {crumb.label}
              </b>
            </Link>
          </div>
        ))}
        <div className="w-[115px] h-[30px] flex flex-row items-center justify-start gap-2 text-text-gray"></div>
      </div>
    </div>
  )
}
