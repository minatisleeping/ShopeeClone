import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import { schema, Schema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from '../../apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { ErrorResponse } from '../../types/utils.type'

type FormData = Schema

export default function Register() {
  const {
    register,
    // getValues,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    console.log('🚀 ~ body:', body)
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log('🚀 ~ data:', data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          console.log('🚀 ~ formError:', formError)
          if (formError?.email) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'ServerError'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 p-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded-md bg-white shadow-sm' noValidate onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Ký</div>
              <Input
                type='email'
                errorMessage={errors.email?.message}
                placeholder='Email'
                className='mt-8'
                name='email'
                register={register}
                autoComplete='on'
              />
              <Input
                type='password'
                errorMessage={errors.password?.message}
                placeholder='Password'
                className='mt-2'
                name='password'
                register={register}
                autoComplete='on'
              />
              <Input
                type='password'
                errorMessage={errors.confirm_password?.message}
                placeholder='Nhập lại password'
                className='mt-2'
                name='confirm_password'
                register={register}
                autoComplete='on'
              />
              <div className='mt-2'>
                <button className='w-full ext-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600'>
                  Đăng Ký
                </button>
                <div className='mt-8 text-xs text-center'>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</div>
                <div className='text-xs text-center text-orange'>
                  Điều khoản dịch vụ <span className='text-black'>&</span> Chính sách bảo mật
                </div>
                <div className='mt-2 flex justify-center items-center text-sm'>
                  <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                  <Link to='/login' className='text-orange font-normal ml-1'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
