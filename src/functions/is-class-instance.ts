export const isClassInstance = (obj: any): obj is object => {
    return obj.constructor && obj.constructor.name !== "Function" && typeof obj.constructor === 'function';
}
