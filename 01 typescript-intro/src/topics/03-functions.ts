
//* TIPADO DE PARÁMETROS Y RETURN
const addNumbers =(a:number, b:number):number=>{
return a + b
}

const result:number = addNumbers(3,4)

//* TIPADO DE PARÁMETROS OPCIONALES; UN OPCIONAL NO PUEDE ESTAR ANTES DE UN OBLIGATORIO A MENOS QUE LE DES VALOR AL OBLIGATORRIO
const multIply =(firsNumber:number, secondNumber?:number, base:number=2):number =>{
    return firsNumber * base
}

interface Character {
    name:string,
    pv:number,
    showHP: ()=>void

}

const healCharacter= (character:Character, amount:number) =>{
    character.pv +=amount
}

const strider:Character={
    name:"Strider",
    pv:50,
    showHP(){
        console.log(this.pv)
    }
}


healCharacter(strider,10)
strider.showHP()
console.log({result})
export {}