import Header from "./Header"
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = (props: Props) => (
  <>
    <Header />
    <main>{props.children}</main>
  </>

)