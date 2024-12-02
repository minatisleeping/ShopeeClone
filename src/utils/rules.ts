import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
// type Rules = { [key in keyof FormData]?: RegisterOptions<FormData, key> }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any> | undefined): Rules => ({
  email: {
    required: { value: true, message: 'Email là bắt buộc!' },
    minLength: { value: 5, message: 'Độ dài tối thiểu là 5!' },
    maxLength: { value: 160, message: 'Độ dài tối đa là 160!' },
    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email không đúng định dạng!' }
  },
  password: {
    required: { value: true, message: 'Password là bắt buộc!' },
    minLength: { value: 6, message: 'Độ dài tối thiểu là 6!' },
    maxLength: { value: 160, message: 'Độ dài tối đa là 160!' }
  },
  confirm_password: {
    required: { value: true, message: 'Nhập lại password!' },
    minLength: { value: 6, message: 'Độ dài tối thiểu là 6!' },
    maxLength: { value: 160, message: 'Độ dài tối đa là 160!' },
    validate:
      // typeof getValues === 'function'
      getValues ? (value) => value === getValues('password') || 'Password không trùng khớp!' : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc!')
    .email('Email không đúng định dạng!')
    .min(5, 'Độ dài tối thiểu là 5!')
    .max(160, 'Độ dài tối đa là 160!'),
  password: yup
    .string()
    .required('Password là bắt buộc!')
    .min(6, 'Độ dài tối thiểu là 6!')
    .max(160, 'Độ dài tối đa là 160!'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc!')
    .min(6, 'Độ dài tối thiểu là 6!')
    .max(160, 'Độ dài tối đa là 160!')
    .oneOf([yup.ref('password'), null], 'Password không trùng khớp!')
})

export type Schema = yup.InferType<typeof schema>
