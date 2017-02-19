export function logTitle(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value; // save a reference to the original method
    let funct = propertyKey;

    // NOTE: Do not use arrow syntax here. Use a function expression in 
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function(...args: any[]) {
        console.log('Executing method : ' + funct.toString());
        
        let result = originalMethod.apply(this, args);               // run and store the result
        console.log("The return value is: " + result);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}