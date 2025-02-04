export default class CreateAddressEntity {
    address_id: number;
    user_id: number;
    street: string;
    number: string;
    complement: string | null;
    neighborhood: string;
    zip_code: string;
    city: string;
    state: string;
    reference_point: string | null;
    created_at: Date | null;
}
