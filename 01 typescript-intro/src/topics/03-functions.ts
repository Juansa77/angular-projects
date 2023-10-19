
//* TIPADO DE PARÁMETROS Y RETURN
const addNumbers =(a:number, b:number):number=>{
return a + b
}

const result:number = addNumbers(3,4)

//* TIPADO DE PARÁMETROS OPCIONALES; UN OPCIONAL NO PUEDE ESTAR ANTES DE UN OBLIGATORIO A MENOS QUE LE DES VALOR AL OBLIGATORRIO
const multIply =(firsNumber:number, secondNumber?:number, base:number=2):number =>{
    return firsNumber * base
}
//* DEFINCIÓN DE INTERFACE CON FUNCIÓN; AGREGAMOS LA FUNCIÓN(NO LA LÓGICA) Y EL VALOR DE RETORNO
interface Character {
    name:string,
    hp:number,
    showHP: ()=>void

}

const healCharacter= (character:Character, amount:number) =>{
    character.hp +=amount
}

const strider:Character={
    name:"Strider",
    hp:50,
    showHP(){
        console.log(this.hp)
    }
}


healCharacter(strider,10)
strider.showHP()
console.log({result})
export {}