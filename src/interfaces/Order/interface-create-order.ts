export default interface InterfaceCreateOrder {
  order_id: number;
  user_id: number;
  total_value: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}
