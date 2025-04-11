import InterfaceUpdateAddress from "../../interfaces/Address/interface-update-address";

export default class UpdateAddressDTO implements InterfaceUpdateAddress {
  constructor(
    public street?: string,
    public number?: string,
    public complement?: string,
    public neighborhood?: string,
    public zip_code?: string,
    public city?: string,
    public state?: string,
    public reference_point?: string
  ) { }
}
