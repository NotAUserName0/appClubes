//for other classes: ng g class auth/models/user --type=model
export class User {
    id:string; //identificador
    user:string; //usuario
    password:string; //password
    rol:string; //rol admin, coord, member
    idClub:string; // a que club esta asignado 0 es sin asignar
                   // y solo puede ocuparlo el admin
}
