import { useSearchParams } from 'react-router-dom'

//* Hàm này sẽ trả về một object chứa các query params để biết được các query params hiện tại của URL
export default function useQueryParams() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}
