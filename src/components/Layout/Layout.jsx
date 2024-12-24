
import { Outlet } from 'react-router-dom'
import HeaderComponet from '../HeaderComponet'
import FooterComponet from '../FooterComponet'

function Layout() {
  return (
    <>
    <HeaderComponet/>
    <Outlet />
    <FooterComponet />
    </>
  )
}

export default Layout