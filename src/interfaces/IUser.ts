export interface IUser {
    id:        string;
    email:     string;
    username:  string;
    password:  string;
    isActive:  boolean;
    roles:     string[];
    logo:      null;
    instagram: null;
    createdAt: Date;
    updateAt:  Date;
}