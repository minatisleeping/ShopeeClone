import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from '../../utils/rules'

export interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      console.log('🚀 ~ data:', data)
      // console.log('🚀 ~ data:', data)
    },
    (data) => {
      console.log('🚀 ~ data:', data)
      const password = getValues('password')
      console.log('🚀 ~ password:', password)
    }
  )

  return (
    <div className='bg-orange'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 p-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded-md bg-white shadow-sm' noValidate onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Password'
                  {...register('password', rules.password)}
                />
                <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Confirm password'
                  {...register('confirm_password', {
                    ...rules.confirm_password
                  })}
                />
                <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.confirm_password?.message}</div>
              </div>
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
