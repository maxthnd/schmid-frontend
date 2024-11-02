// Job.ts
export class Job {
    id: number;
    title: string;
    description: string;
    location: string;
    jobType: string;
    expectations: string[];
    work: string[];
    imageData?: string;

    constructor(
        id: number,
        title: string,
        description: string,
        location: string,
        jobType: string,
        expectations: string[],
        work: string[],
        imageData?: string,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.jobType = jobType;
        this.expectations = expectations;
        this.work = work;
        this.imageData = imageData;
    }
}
