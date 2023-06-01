import { Link } from "react-router-dom"
import { IPlayer, Profils } from "../utils/dataProfil"
import { useEffect, useState } from "react"


function ProfilsSelection() {

  const [ profilsArray, setProfilsArray] = useState<string[]>([])

  useEffect(() => {
    setProfilsArray( Object.keys(Profils).map((profilKey) => profilKey) )
  }, [])

  return (
    <div className="profilSelection">
        {profilsArray.map( (profil, i) => (
          <Link key={i} to={`/${profil}`}>{Profils[profil as IPlayer].name}</Link>
        ))}
    </div>
  )
}

export default ProfilsSelection
