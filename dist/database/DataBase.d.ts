import { DataSource } from "typeorm";
export default class DataBase {
    private conex?;
    connect(): Promise<DataSource>;
}
