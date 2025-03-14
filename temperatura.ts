interface CiudadTem{
    ciudad: string;
    temperatura: number;
}

let ciudades: CiudadTem[] =[
    {
        ciudad:"Cali",
        temperatura:29
    },
    {
        ciudad:"Popayan",
        temperatura:16
    },
    {
        ciudad:"Medellin",
        temperatura:20
    }
]

interface Informacion{
    ciudadCaliente?:string;
}

const analTemps = (obj: CiudadTem[])=> {
    //Ciudad más caliente:
    let calor: number = 0;
    let frio: number =0;
    let promedio: number = 0;
    let sumaTempe: number = 0;
    let ciudadesCantidad : number = 0;
    obj.forEach((value)=>{
        if(value.temperatura>calor){
            calor = value.temperatura
        }
    })
    frio = calor;
    obj.forEach((value)=>{
        if(value.temperatura<frio){
            frio = value.temperatura
        }
    })
    obj.forEach((value)=>{
        sumaTempe = value.temperatura + sumaTempe
        ciudadesCantidad += 1;
    })
    promedio = sumaTempe/ciudadesCantidad;

    let ciudaCaliente = obj.find((ciud)=> ciud.temperatura == calor)
    let ciudaFria = obj.find((ciud)=> ciud.temperatura == frio)
    
   
    let info: Informacion = {
        ciudadCaliente : ciudaCaliente?.ciudad
    }
    return info;
}


console.log(analTemps(ciudades));