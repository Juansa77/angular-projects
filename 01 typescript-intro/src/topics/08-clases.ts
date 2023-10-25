export class Person {
public realName: string;
public address: string;

constructor(realName:string, address:string){
    this.realName =this.realName,
    this.address=address
}
}



export class Person2 {
  
    constructor(
        public name: string,
        public address?: string,
    )
    {}
}
export class Hero extends Person {
constructor(
    public alterEgo :string,
    public age: number,
    public realName:string
){
    super(realName, "New York")
}
}

//* --PRIORIZANDO COMPOSICIÓN SOBRE HERENCIA

export class Hero2 {


    constructor(
        public alterEgo :string,
        public age: number,
        public realName:string,
        public person: Person2
    ){
       
    }
    }

    const person = new Person2 ("Tony Star", "New York")
const ironMan = new Hero("Iron Man", 45, "Tony Stark");
console.log(ironMan)