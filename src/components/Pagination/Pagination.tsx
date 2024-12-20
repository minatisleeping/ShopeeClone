import classNames from 'classnames'
import { createSearchParams, Link } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/pages/ProductList/ProductList'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

const RANGE = 5
export default function Pagination({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)

  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='mx-2 rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='mx-2 rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        // Điều kiện để return về ...
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }

        return (
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams({
                ...queryConfig,
                page: String(pageNumber)
              }).toString()
            }}
            key={index}
            className={classNames('bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border', {
              'border-cyan-500': pageNumber === page,
              'border-transparent': pageNumber !== page
            })}
            onClick={handleScrollToTop}
          >
            {pageNumber}
          </Link>
        )
      })
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex flex-wrap mt-6 justify-center'>
      {page === 1 ? (
        <button className='bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-progress'>Prev</button>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: String(page - 1)
            }).toString()
          }}
          className='bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer'
          onClick={handleScrollToTop}
        >
          Prev
        </Link>
      )}
      {renderPagination()}
      {page === pageSize ? (
        <button className='bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-progress'>Next</button>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: String(page + 1)
            }).toString()
          }}
          className='bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer'
          onClick={handleScrollToTop}
        >
          Next
        </Link>
      )}
    </div>
  )
}
