
export interface Product {
    description:string;
    price:number;
}

const phone: Product={
    description: "Nokia",
    price: 400
}

const { price:phonePrice}  = phone

const tablet: Product={
    description: "Nokia tablet",
    price: 490
}

const shoppingCart: Product[] = [phone, tablet]
const tax:number = 0.15

interface TaxCalculatorOptions {
    tax:number;
    products: Product[]
}
export const taxCalculation =(options: TaxCalculatorOptions):number[]=>{
    let total =0
    options.products.forEach(product =>{
        total += product.price
    })
    return [total, total * options.tax]
}

const total = taxCalculation({products:shoppingCart,tax})
