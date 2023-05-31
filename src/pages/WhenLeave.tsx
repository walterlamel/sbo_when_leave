import { useParams } from 'react-router-dom'
import Layout from '../Layout'
import { useEffect, useState } from 'react'

interface IDiff {
    sec : number;
    min : number;
    hour : number;
    day : number;
}

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
        minHour : 3,
        label : `Encore une petite demi-journée`
    },
    {
        minHour : 6,
        label : `Heu... encore long`
    },
]

const CorrespondanceName = {
    ben : "Benji",
    baptiste : "Baptiste",
    loic : "Loïc"
}


function WhenLeave() {

    let { name } = useParams()
    const [resultWeekend, setResultWeekend] = useState<string|undefined>('')
    const [resultDayend, setResultDayend] = useState<string|undefined>('')

    const _wichDay = () => {
        switch(name){
            case 'ben' :
                return 6;
            case 'baptiste' :
                return 7;
            case 'loic' :
                default :
                return 6
        }
    }

    const _wichHour = () => {
        switch(name){
            case 'ben' :
                return 17;
            case 'baptiste' :
                return 21;
            case 'loic' :
                default :
                return 16
        }
    }

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
        
        return date.setHours(_wichHour(), 0, 0)
    }

    const dateDiff = (date1 : Date, date2 : Date) : IDiff => {
        var diff = {
            sec : 0,
            min : 0,
            hour : 0,
            day : 0
        }                           // Initialisation du retour
        var tmp = date2 - date1;
     
        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
     
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
     
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
         
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
         
        return diff;
    }

    useEffect(() => {
        let today = new Date()
        let date = nextDay(_wichDay())
        let diffWeekend = dateDiff(today, date)
        setResultWeekend(labelsWeekend.find(d => diffWeekend.day <= d.minDay)?.label)

        let diffEndday = dateDiff(new Date(), today.setHours(_wichHour(), 0,0))
        setResultDayend(labelsDayend.find(d => diffWeekend.day <= d.minHour)?.label)
        console.log(diffEndday)
    }, [])


  return (
    <Layout>
        <h1>Quand est-ce que {CorrespondanceName[name]} range ses affaires ?</h1>
        {/* {resultWeekend} */}
        {resultDayend}
    </Layout>
  )
}

export default WhenLeave
