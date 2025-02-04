export default interface InterfaceCreateAddress {
    user_id: number;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    zip_code: string;
    city: string;
    state: string;
    reference_point: string | null;
}
