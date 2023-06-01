import Layout from '../Layout'
import ProfilsSelection from '../components/ProfilsSelection'

const labels = [
    {
        minDay : 1,
        label : `Euh... j'ai une mauvaise nouvelle...`
    },
    {
        minDay : 2,
        label : `Oulah non !`
    },
    {
        minDay : 3,
        label : `Aïe, non. Encore à attendre la moitié de la semaine`
    },
    {
        minDay : 4,
        label : `Encore un peu de temps à attendre`
    },
    {
        minDay : 5,
        label : `Ca approche dur`
    },
    {
        minDay : 6,
        label : `C'est déjà le weekend !`
    }
]

function Home() {

    const _isWeekend = () => {
        let today = new Date()
        let day = today.getDay() + 1
        
        return labels.find(d => day <= d.minDay)?.label
    }

  return (
    <Layout>
        <h1>Est-ce que c'est bientôt le week-end ?</h1>
        <p>{_isWeekend()}</p>
    </Layout>
  )
}

export default Home
