import InterfaceUser from "../../interfaces/Users/inteface-get-user";

export default class UserResponseDTO implements InterfaceUser {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public role: number,
        public status: number,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}

}
