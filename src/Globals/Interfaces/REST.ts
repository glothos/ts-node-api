export interface GET {
    get(): void;
}

export interface POST {
    post(): void;
}

export interface PUT {
    put(): void;
}

export interface DELETE {
    delete(): void;
}

export interface PATCH {
    patch(): void;
}

export interface REST extends GET, POST, PUT, DELETE {}

