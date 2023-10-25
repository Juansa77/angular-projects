function classDecorator<T>(argument:T):T{
    return argument
}
@classDecorator
 class SuperClass {
    public myProperty:string= "Hola";
    print (){
        console.log("Hola")
    }
}



console.log(SuperClass)

const myClass = new SuperClass()
console.log(myClass)