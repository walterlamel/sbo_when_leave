function Layout( props : React.PropsWithChildren) {


  return (
    <div className="page">{props.children}</div>
  )
}

export default Layout
