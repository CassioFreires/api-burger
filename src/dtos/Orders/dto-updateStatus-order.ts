export class OrderUpdateStatusDTO {
    constructor(
        public status_do_pedido?: string,
        public total_value?: number
    ) {}
}