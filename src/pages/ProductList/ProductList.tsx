import { useQuery } from '@tanstack/react-query'
import productApi from 'src/apis/product.api'
import useQueryParams from 'src/hooks/useQueryParams'
import AsideFilter from 'src/pages/ProductList/AsideFilter'
import Product from 'src/pages/ProductList/Product/Product'
import SortProduct from 'src/pages/ProductList/SortProductList'

export default function ProductList() {
  //! Lấy ra các query params hiện tại của URL
  const queryParams = useQueryParams()

  const { data } = useQuery({
    //! Tham số đầu tiên của queryKey là tên của query, tham số thứ 2 là các query params
    queryKey: ['products', queryParams],
    queryFn: () => productApi.getProductWithPagination(queryParams)
  })
  console.log('🚀 ~ queryParams:', queryParams)
  console.log('🚀 ~ data:', data)

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <SortProduct />
            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
