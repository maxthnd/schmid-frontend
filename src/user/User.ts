export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];

    constructor(
        id: number,
        username: string,
        firstName: string = '', // Standardwert
        lastName: string = '',  // Standardwert
        email: string = '',      // Standardwert
        roles: string[] = []     // Standardwert
    ) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roles;
    }
}
