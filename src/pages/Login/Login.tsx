import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/app.context'
import { ErrorResponse } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/rules'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import Button from 'src/components/Button'
import authApi from 'src/apis/auth.api'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const { setIsAuthenticated, storeProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        console.log('🚀 ~ data:', data)
        setIsAuthenticated(true)
        storeProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          console.log('🚀 ~ formError:', formError)
          if (formError?.email) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
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
            <form className='p-10 rounded-md bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Nhập</div>
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
              <div className='mt-3'>
                <Button
                  className='w-full ext-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600 flex justify-center items-center'
                  isLoading={loginMutation.isLoading}
                  disabled={loginMutation.isLoading}
                >
                  Đăng nhập
                </Button>
                <div className='mt-5 flex justify-center items-center text-sm'>
                  <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                  <Link to='/register' className='text-orange font-normal ml-1'>
                    Đăng ký
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
