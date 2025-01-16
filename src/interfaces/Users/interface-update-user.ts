export default interface InterfaceUpdateUser {
    name: string;
    email: string;
    password_hash: string;
    role_id?: number;
    active?: number;
  }