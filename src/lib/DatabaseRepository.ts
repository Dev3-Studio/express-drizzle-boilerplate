import { DatabaseClient, DatabaseTransaction } from '../database';

export type DatabaseConnection = DatabaseClient | DatabaseTransaction;

export class DatabaseRepository {
    private connection: DatabaseConnection;
    
    constructor(connection: DatabaseConnection) {
        this.connection = connection;
    }
}