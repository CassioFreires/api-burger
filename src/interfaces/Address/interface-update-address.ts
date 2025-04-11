export default interface InterfaceUpdateAddress {
    user_id?: number; // O user_id pode ser opcional, já que normalmente não será alterado
    street?: string;
    number?: string;
    complement?: string | null;
    neighborhood?: string;
    zip_code?: string;
    city?: string;
    state?: string;
    reference_point?: string | null;
}
