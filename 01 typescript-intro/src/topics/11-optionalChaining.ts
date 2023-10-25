export  interface Passenger {
    name:string;
    children?:string[];
}

const passenger1 : Passenger={
    name:"Juansa"
}

const passenger2 : Passenger={
    name:"Sandra",
    children:["Teo"]
}

const printChildren = (passenger: Passenger)=>{
const howManyChildren = passenger.children?.length || 0
console.log(passenger.name, howManyChildren)
}

printChildren(passenger2)