import { User } from "./user";
import { Task } from './task';
export class Project {
    Id: number;
    Name: string;
    Users: User[] = [];
    ActiveTasks: Task[] = [];
    Slug: string;
    constructor(
        Id: number = null,
        Name: string = ''
    )
    {
        this.Id = Id;
        this.Name = Name;
        this.Slug = this.prepareSlug(Name);
    }

    addUser(user: User) {
        this.Users.push(user);
    }

    prepareSlug(name: string) : string {
        name = name.replace(/ /g, "-");
        name = name.toLowerCase();
        console.log(name);
        return name;
    }
}
