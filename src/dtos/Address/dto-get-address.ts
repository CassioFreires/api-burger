import InterfaceAddress from "../../interfaces/Address/interface-get-address";

export default class AddressDTO implements InterfaceAddress {
  constructor(
    public address_id: number,
    public user_id: number,
    public street: string,
    public number: string,
    public complement: string | null,
    public neighborhood: string,
    public zip_code: string,
    public city: string,
    public state: string,
    public reference_point: string | null,
    public created_at: Date | null
  ) {}
}
