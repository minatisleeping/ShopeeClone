import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

type Props = { children?: React.ReactNode }

function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
