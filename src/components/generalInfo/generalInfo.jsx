import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from './validation/validationSchema'

const GeneralInfo = () => {
  const initialValues = {
    poNumber: 'PO-20311',
    poDate: '16/09/2023',
    deliveryDate: '24/10/2023',
    status: 'Draft',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values)
    },
  })

  return (
    <div className="self-stretch shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white flex flex-col items-start justify-start">
      <div className="self-stretch relative bg-table-border box-border h-0.5 border-t-[2px] border-solid border-table-header" />
      <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[8px]">
        <div className="flex flex-row items-start justify-start text-sm-5 text-text-dark">
          <b className="relative leading-[21px]">General information</b>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px_24px] text-2xs-5 text-text-dark-2">
          <form
            onSubmit={formik.handleSubmit}
            className="flex-1 flex flex-col items-start justify-start gap-[4.5px] min-w-[300px]"
          >
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[15px] capitalize font-medium">
                Purchase order number
              </div>
            </div>
            <input
              type="text"
              id="poNumber"
              name="poNumber"
              className="self-stretch shadow-[0px_0.8px_1.5px_rgba(16,_24,_40,_0.05)] rounded-md bg-gray-50 overflow-hidden flex flex-row items-center justify-start py-[7.5px] px-[10.5px] gap-[6px] text-xs text-text-gray border-[0.8px] border-solid border-table-border"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.poNumber}
            />
            {formik.touched.poNumber && formik.errors.poNumber ? (
              <div className="text-xs text-red">
                {formik.errors.poNumber}
              </div>
            ) : null}

            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[15px] capitalize font-medium">
                Purchase order date
              </div>
            </div>
            <input
              type="text"
              id="poDate"
              name="poDate"
              className="self-stretch shadow-[0px_0.8px_1.5px_rgba(16,_24,_40,_0.05)] rounded-md bg-gray-50 overflow-hidden flex flex-row items-center justify-start py-[7.5px] px-[10.5px] gap-[6px] text-xs text-text-gray border-[0.8px] border-solid border-table-border"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.poDate}
            />
            {formik.touched.poDate && formik.errors.poDate ? (
              <div className="text-xs text-red">{formik.errors.poDate}</div>
            ) : null}

            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[15px] capitalize font-medium">
                Delivery date
              </div>
            </div>
            <input
              type="text"
              id="deliveryDate"
              name="deliveryDate"
              className="self-stretch shadow-[0px_0.8px_1.5px_rgba(16,_24,_40,_0.05)] rounded-md bg-gray-50 overflow-hidden flex flex-row items-center justify-start py-[7.5px] px-[10.5px] gap-[6px] text-xs text-text-gray border-[0.8px] border-solid border-table-border"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.deliveryDate}
            />
            {formik.touched.deliveryDate && formik.errors.deliveryDate ? (
              <div className="text-xs text-red">
                {formik.errors.deliveryDate}
              </div>
            ) : null}

            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[15px] capitalize font-medium">
                Status
              </div>
            </div>
            <input
              type="text"
              id="status"
              name="status"
              className="self-stretch shadow-[0px_0.8px_1.5px_rgba(16,_24,_40,_0.05)] rounded-md bg-gray-50 overflow-hidden flex flex-row items-center justify-start py-[7.5px] px-[10.5px] gap-[6px] text-xs text-text-gray border-[0.8px] border-solid border-table-border"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.status}
            />
            {formik.touched.status && formik.errors.status ? (
              <div className="text-xs text-red">{formik.errors.status}</div>
            ) : null}

            <button type="submit" className="btn-primary text-purple-900 hover:underline mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
