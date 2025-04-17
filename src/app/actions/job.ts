import { getServerApiClient } from "@/lib/api-client"
import { ActionReturn } from "./metrics"

// Job type definition
export interface Job {
    id: string
    type: string
    status: "pending" | "processing" | "completed" | "failed" | "cancelled"
    tokenId: string
    created_at: string
    updated_at: string
    results: any
    metrics: {
        processed_items: number
        success_count: number
        warning_count: number
        failure_count: number
        invalid_count: number
        batches_complete: number
        total_batches: number
    }
}

export async function getJobs(): Promise<ActionReturn<Array<Job>>> {
    try {
        const apiClient = getServerApiClient();
        const response = await apiClient.get<Array<Job>>('/api/jobs');

        return {
            success: true,
            data: response.data,
            error: undefined
        };
    } catch (error) {
        console.error('Failed to fetch match distribution:', error);

        return {
            success: false,
            data: undefined,
            error: error instanceof Error ? error.message : 'An unknown error occurred',
        };
    }
}