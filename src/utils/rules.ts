import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import { FormData } from '../pages/Register/Register'

// type Rules = { [key in 'email' | 'password']?: RegisterOptions }
type Rules = { [key in keyof FormData]?: RegisterOptions<FormData, key> }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any> | undefined): Rules => ({
  email: {
    required: { value: true, message: 'Email là bắt buộc!' },
    minLength: { value: 5, message: 'Độ dài tối thiểu là 6!' },
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
