import styled from 'styled-components'

import Style from './Style'
import Header from './Header'
import Footer from './Footer'

const LayoutContainer = styled.div`
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <Style/>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </LayoutContainer>
)

export default Layout