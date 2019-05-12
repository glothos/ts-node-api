export interface GET {
    get(): void;
}
export interface POST{
    post(): void;
}
export interface PUT{
    put(): void;
}
export interface DELETE{
    delete(): void;
}
export interface CRUD extends GET, POST, PUT, DELETE {}
