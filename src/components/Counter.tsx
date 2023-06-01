import { useEffect, useState } from "react"


interface IDiff {
    sec : number;
    min : number;
    hour : number;
    day : number;
}

function Counter({ targetDate } : { targetDate : Date | undefined }) {

    const [time, setTime ] = useState({
        sec : 0,
        min : 0,
        hour : 0
    })

    const dateDiff = (date1 : Date, date2 : Date) : IDiff => {
        var diff = {
            sec : 0,
            min : 0,
            hour : 0,
            day : 0
        }                    // Initialisation du retour
        var tmp = date2.getTime() - date1.getTime();
     
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
        let int = setInterval(() => {
            if(targetDate){
                let diff = dateDiff(new Date(), targetDate)
                setTime(diff)
            }
        }, 1000)
        return () => clearInterval(int);
    }, [targetDate])


  return (
    <div className="Counter">
        <p>Dans environ</p>
        <div className="minuteur">
            <div className="displayer hour">{time.hour < 10 ? `0${time.hour}` : time.hour}</div>:
            <div className="displayer min">{time.min < 10 ? `0${time.min}` : time.min}</div>:
            <div className="displayer sec">{time.sec < 10 ? `0${time.sec}` : time.sec}</div>
        </div>
    </div>
  )
}

export default Counter
