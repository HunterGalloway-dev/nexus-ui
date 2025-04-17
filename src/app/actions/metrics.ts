// app/actions/match-distribution.ts
'use server'

import { getServerApiClient } from "@/lib/api-client";

export interface MapDistribution {
    Baltic_Main: number;
    Desert_Main: number;
    DihorOtok_Main: number;
    Kiki_Main: number;
    Neon_Main: number;
    Tiger_Main: number;
};

export interface MatchDistribution {
    total_matches: number;
    total_players: number;
    total_tournaments: number;
    map_distribution: MapDistribution
    type_distribution: {
        ranked: number;
        scrim: number;
        event: number;
    };
    processed_distribution: {
        false: number;
        true: number;
    };
    shard_distribution: {
        steam: number;
    };
    time_range: {
        Start: string;
        End: string;
    };
}

/**
 * Fetches match distribution statistics
 * @returns The match distribution data or an error object
 */

export interface ActionReturn<T> {
    success: boolean,
    data: T | undefined;
    error: string | undefined;
}

export async function getMatchDistribution(): Promise<ActionReturn<MatchDistribution>> {
    try {
        const apiClient = getServerApiClient();
        const response = await apiClient.get<MatchDistribution>('/api/metrics/distribution');

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