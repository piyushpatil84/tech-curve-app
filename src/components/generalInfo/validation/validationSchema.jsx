import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  poNumber: Yup.string().required('Purchase order number is required'),
  poDate: Yup.date().required('Purchase order date is required'),
  deliveryDate: Yup.date().required('Delivery date is required'),
  status: Yup.string().required('Status is required'),
})
