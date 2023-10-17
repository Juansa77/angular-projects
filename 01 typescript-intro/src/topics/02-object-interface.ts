
const skills:string[] = ["bash", "counter", "healing"]


interface Character{
name:string;
hp:number;
skills:string[];
hometown?:string;
} 


const strider: Character ={
    name:"Strider",
    hp: 100,
    skills:["Bash", "counter"]
}

strider.hometown="Rivendel"

console.table(strider)
export{}