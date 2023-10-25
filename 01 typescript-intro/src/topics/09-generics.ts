export function whatsMyType<T>(argument:T):T{
    return argument
}

const amIString = whatsMyType<string>("Hola")
const amINumber = whatsMyType(20)
const amIArray = whatsMyType([1,2,3,4])
