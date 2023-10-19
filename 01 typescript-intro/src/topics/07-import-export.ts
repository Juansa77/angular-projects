import { Product, taxCalculation } from "./06-functions-destructuring";


const shoppingCart:Product[] =[
    {
        description:"Nintendo",
        price:450
    },{
        description:"Gameboy",
        price:456
    }
]

const [ total, tax] = taxCalculation({products:shoppingCart, tax:0.15})