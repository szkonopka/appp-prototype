export class User {
    ID: number;
    Nickname: string;
    FirstName: string;
    LastName: string;
    constructor(
        ID: number = null,
        Nickname: string = '',
        FirstName: string = '',
        LastName: string = ''
    ) 
    {
        this.ID = ID;
        this.Nickname = Nickname;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}
