export default  class OrderUpdateDTO {
    status?: string;
    total_price?: number;

    constructor(status?: string, total_price?: number) {
        this.status = status;
        this.total_price = total_price;
    }
}
