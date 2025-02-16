import { DatabaseConnection, DatabaseRepository } from '../../lib/DatabaseRepository';

export interface IUserRepository {
    // Define crud methods here
}

export class UserRepository extends DatabaseRepository implements IUserRepository  {
    constructor(connection: DatabaseConnection) {
        super(connection);
    }
    
    // Implement crud methods here
}