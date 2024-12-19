function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button className='h-9 w-28 px-4 py-1 capitalize bg-orange text-white text-sm hover:bg-orange/90 text-center'>
            Liên quan
          </button>
          <button className='h-9 w-28 px-4 py-1 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Mới nhất
          </button>
          <button className='h-9 w-28 px-4 py-1 capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            Bán chạy
          </button>
          <select className='h-9 px-4 py-1 outline-none capitalize bg-white text-black text-sm hover:bg-slate-100 text-center'>
            <option defaultValue='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: Thấp đến Cao</option>
            <option value='price:desc'>Giá: Cao đến Thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='shadow px-3 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
              </svg>
            </button>
            <button className='shadow px-3 h-8 rounded-tr-sm bg-white hover:bg-slate-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortProductList
