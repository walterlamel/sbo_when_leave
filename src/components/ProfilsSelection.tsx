import { Link } from "react-router-dom"


const Profils = ['ben', 'loic', 'baptiste']

function ProfilsSelection() {


  return (
    <div className="profilSelection">
        {Profils.map(profil => (
            <Link to={`/${profil}`}>{profil}</Link>
        ))}
    </div>
  )
}

export default ProfilsSelection
