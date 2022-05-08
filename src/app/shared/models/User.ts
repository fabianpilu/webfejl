export interface User {
    id: string,
    email: string;
    //password: string;
    username: string,
    name: {
        firstname: string;
        lastname: string;
    }
}