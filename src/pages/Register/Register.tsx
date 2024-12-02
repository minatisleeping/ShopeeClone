import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import { schema, Schema } from '../../utils/rules'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'

type FormData = Schema

export default function Register() {
  const {
    register,
    // getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(
    (data) => {
      console.log('🚀 ~ data:', data)
    },
    (data) => {
      console.log('🚀 ~ data:', data)
    }
  )

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
