import InterfaceUser from "../../interfaces/Users/inteface-get-user";
export default class UserResponseDTO implements InterfaceUser {
    id: number;
    name: string;
    email: string;
    role: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(id: number, name: string, email: string, role: number, status: number, createdAt: Date, updatedAt: Date);
}
