import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useRouteElements from './pages/useRouteElements'

function App() {
  const routeElements = useRouteElements()

  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
