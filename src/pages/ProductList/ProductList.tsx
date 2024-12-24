import { useQuery } from '@tanstack/react-query'
import categoryApi from 'src/apis/category.api'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import useQueryConfig from 'src/hooks/useQueryConfig'
import AsideFilter from 'src/pages/ProductList/components/AsideFilter'
import Product from 'src/pages/ProductList/components/Product/Product'
import SortProductList from 'src/pages/ProductList/components/SortProductList'
import { ProductListConfig } from 'src/types/product.type'

export default function ProductList() {
  //! Lấy ra các query params hiện tại của URL
  const queryConfig = useQueryConfig()

  const { data: productsData } = useQuery({
    //! Tham số đầu tiên của queryKey là tên của query, tham số thứ 2 là các query params
    queryKey: ['products', queryConfig],
    queryFn: () => productApi.getProductWithPagination(queryConfig as ProductListConfig),
    keepPreviousData: true
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.getCategories(),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
            </div>
            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
                {productsData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
