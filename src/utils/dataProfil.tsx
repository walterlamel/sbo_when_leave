export type IPlayer = 'kevin' | 'benji' | 'baptiste' | 'loic'

export type IProfils = {
    [key in IPlayer]: IProfil;
};

export interface IProfil {
    name : string;
    endDay : number;
    endWeek : number;
    img? : string,
}


export const Profils : IProfils = {
    kevin : {
        name : "Kevin",
        endDay : 16,
        endWeek : 5,
        img : '',
    },
    benji : {
        name : "Benji",
        endDay : 17,
        endWeek : 5,
        img : '',
    },
    loic : {
        name : "Loïc",
        endDay : 16,
        endWeek : 5,
        img : '',
    },
    baptiste : {
        name : "Baptiste",
        endDay : 21,
        endWeek : 7,
        img : '',
    }
}