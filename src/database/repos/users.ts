import { DatabaseRepository } from '../../lib/DatabaseRepository';
import { DatabaseConnection } from '../index';

export interface IUserRepository {
    // Define crud methods here
}

export class UserRepository extends DatabaseRepository implements IUserRepository  {
    constructor(connection: DatabaseConnection) {
        super(connection);
    }
    
    // Implement crud methods here
}