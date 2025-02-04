import InterfaceCreateAddress from "../../interfaces/Address/interface-create-address";


export default class CreateAddressDTO implements InterfaceCreateAddress {
  constructor(
    public user_id: number,
    public street: string,
    public number: string,
    public complement: string | null,
    public neighborhood: string,
    public zip_code: string,
    public city: string,
    public state: string,
    public reference_point: string | null,
  ) {}
}
