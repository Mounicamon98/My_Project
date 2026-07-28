export interface RegularPrice{
online:number,
inClinic:number,
homeVisit:number
}

export function generateregularPrice():RegularPrice{
    return{
    online: Math.floor(Math.random() * 9000) + 1000,
    inClinic: Math.floor(Math.random() * 9000) + 1000,
    homeVisit: Math.floor(Math.random() * 9000) + 1000

    }
}