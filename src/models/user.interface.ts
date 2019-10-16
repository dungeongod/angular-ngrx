export interface IUser {
    id: number,
    name: string,
    cardNumber: string,
    cartType: string
}
export interface IConfig {
    adminName: string,
    permissions?: string[];
}