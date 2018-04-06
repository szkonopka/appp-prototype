export class Sprint {
    Start: Date;
    End: Date;
    Name: string;
    ProjectId: number;
    constructor(
        Start: Date = null,
        End: Date = null,
        Name: string = "",
        ProjectId: number = null
    )
    {
        this.Start = Start;
        this.End = End;
        this.Name = Name;
        this.ProjectId = ProjectId;
    }
}
