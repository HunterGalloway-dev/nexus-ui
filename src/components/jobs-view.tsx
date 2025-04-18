import { Job } from "@/app/actions/job";
import { JobCard } from "./job-card";
import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

interface JobViewProps {
    jobs: Job[]
}

export default function ({ jobs }: JobViewProps) {
    if (jobs.length == 0) {
        return (
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    We found 0 jobs to display, try starting a job to see them here!
                </AlertDescription>
            </Alert>
        )
    }
    return <>
        <div className="grid grid-cols-2 gap-4">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    </>

}