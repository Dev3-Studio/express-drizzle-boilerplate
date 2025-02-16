import { DatabaseConnection } from '../database';

export class DatabaseRepository {
    private connection: DatabaseConnection;
    
    constructor(connection: DatabaseConnection) {
        this.connection = connection;
    }
}