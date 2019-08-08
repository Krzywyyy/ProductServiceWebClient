export class Model {
}

export class User{
    id:number;
    login:string;
    password:string;
}

export class Product{
    id:number;
    name:string;
    category:ProductCategory;
    state:ProductState;
    comment:string;
    parameters:Array<Parameter>
}

export class Damage{
    id:number;
    productId:number;
    solved:boolean;
    comment:string;
}

export class Parameter{
    name:string;
    value:string;
}
export enum ProductCategory{
    FRIDGE,
    TV,
    COOKER,
    WASHER,
    TOASTER,
    IRON,
    MONITOR,
    COMPUTER,
    NOTEBOOK
}

export enum ProductState{
    EFFICIENT,
    BROKEN
}