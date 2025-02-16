import { DatabaseConnection, DatabaseRepository } from '../../lib/DatabaseRepository';

export class UserRepository extends DatabaseRepository {
    constructor(connection: DatabaseConnection) {
        super(connection);
    }
    
    // Implement crud methods here
}