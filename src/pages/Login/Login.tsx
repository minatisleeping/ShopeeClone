import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const {
    // register,
    handleSubmit,
    // formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ data:', data)
  })

  return (
    <div className='bg-orange'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 p-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded-md bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full ext-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600'>
                  Đăng nhập
                </button>
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
