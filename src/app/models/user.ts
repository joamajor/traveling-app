export interface User {
    _id?: string;
    username: string;
    email: string;
    password?: string;
    picture?: string;
    isVerified: boolean;
};