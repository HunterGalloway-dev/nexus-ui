import React from 'react';
import { getJobs, Job } from '../actions/job';
import { JobCard } from '@/components/job-card';

export default async function JobDashboard() {
    // Sample placeholder data for grid items
    const { success, data: jobs, error } = await getJobs();

    if (!success) {
        return <div>Failed to get metrics</div>
    }

    if (error) {
        return <div>Error getting metrics</div>
    }

    if (!jobs) {
        return <div>Metrics is Empty</div>
    }

    return (
        <div className="p-6">
            {/* Dashboard Title */}
            <h1 className="text-3xl font-bold mb-6">Job Dashboard</h1>

            {/* Grid Layout with 3 columns */}
            <div className="grid grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};