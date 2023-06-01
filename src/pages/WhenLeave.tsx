import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import { useEffect, useState } from 'react'
import Counter from '../components/Counter';
import { IPlayer, IProfil, Profils } from '../utils/dataProfil';


const labelsWeekend = [
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

const labelsDayend = [
    {
        minHour : 1,
        label : `Plus qu'une heure avant son départ !`
    },
    {
        minHour : 2,
        label : `Dans deux heures à peine, il décolle`
    },
    {
        minHour : 3,
        label : `Encore une petite demi-journée`
    },
    {
        minHour : 4,
        label : `Encore 4H malheureusement`
    },
    {
        minHour : 6,
        label : `Heu... encore long`
    },
]



function WhenLeave() {

    let { name = '' } = useParams()
    const [ profil, setProfil ] = useState<IProfil>(Profils.kevin)
    const [targetDate, setTargetDate] = useState<Date>()


    const nextDay = (wichDay : number) : Date =>  {
        var dayOfWeek = wichDay;
        var date = new Date();
        var diff = date.getDay() - dayOfWeek;
        if (diff > 0) {
            date.setDate(date.getDate() + 6);
        }
        else if (diff < 0) {
            date.setDate(date.getDate() + ((-1) * diff))
        }
        
        return new Date(date.setHours(profil.endWeek, 0, 0))
    }

    const startEndDay = () => {
        let today = new Date()
        let endDay = today.setHours(profil.endDay, 0,0)
        setTargetDate(new Date(endDay))
    }

    useEffect(() => {
        setProfil(Profils[name as IPlayer])
        startEndDay()
    }, [name])

    useEffect(() => {
        startEndDay()
    }, [profil])


  return (
    <Layout>
        <h1>Quand est-ce que  {Profils[name as IPlayer].name} range ses affaires ?</h1>
        <Counter targetDate={targetDate} />
    </Layout>
  )
}

export default WhenLeave
