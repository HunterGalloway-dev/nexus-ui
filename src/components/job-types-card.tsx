import { JobType } from "@/app/actions/job"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Separator } from "@/components/ui/separator"

interface JobTypesProps {
    jobTypes: Array<JobType>
}

export async function JobTypesCard({ jobTypes }: JobTypesProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Available Jobs</CardTitle>
                <CardDescription>List Available Jobs</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {jobTypes.map((job, index) => (
                        <div key={index} className="space-y-2">
                            <div className="font-medium">{job.job_name}</div>
                            <div className="text-xs text-muted-foreground">Type: {job.job_type}</div>
                            <p className="text-sm text-muted-foreground">{job.job_description}</p>
                            {index < jobTypes.length - 1 && <Separator className="mt-2" />}
                        </div>
                    ))}

                    {jobTypes.length === 0 && <p className="text-muted-foreground">No job types available at the moment.</p>}
                </div>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-muted-foreground">Total available job types: {jobTypes.length}</p>
            </CardFooter>
        </Card>
    )
}