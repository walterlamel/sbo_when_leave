import ProfilsSelection from "./components/ProfilsSelection"

function Layout( props : React.PropsWithChildren) {


  return (
    <div className="page">
      {props.children}
      <footer><ProfilsSelection /></footer>
      
      </div>
  )
}

export default Layout
