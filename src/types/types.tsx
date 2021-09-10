
export interface IAddress {
    street: string;
    city: string;
    zip: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}