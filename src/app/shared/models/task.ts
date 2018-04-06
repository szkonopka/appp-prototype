export class Task {
    Id: number;
    ProjectId: number;
    Name: string;
    Deadline: Date;
    AssignedToId: number;
    ProductivityPoints: number;
    constructor(
        Id: number = null,
        ProjectId: number = null,
        Name: string = '',
        Deadline: Date = null,
        AssignedToId: number = null,
        ProductivityPoints: number = null
    ) 
    {
        this.Id = Id;
        this.ProjectId = ProjectId;
        this.Name = Name;
        this.Deadline = Deadline;
        this.AssignedToId = AssignedToId;
        this.ProductivityPoints = ProductivityPoints;
    }
}
