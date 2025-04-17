import { StatCard } from "@/components/stat-card";
import { getServerApiClient } from "@/lib/api-client";
import { getMatchDistribution } from "../actions/metrics";
import { calculatePercentage, formatList } from "@/lib/utils";
import { MapDistributionChart } from "@/components/map-distribution-chart";
import { CustomRadialChart } from "@/components/custom-radial-chart";

export default async function Metrics() {
    const apiClient = getServerApiClient()

    const { success, data: metrics, error } = await getMatchDistribution();

    if (!success) {
        return <div>Failed to get metrics</div>
    }

    if (error) {
        return <div>Error getting metrics</div>
    }

    if (!metrics) {
        return <div>Metrics is Empty</div>
    }


    return (
        <div className="container mx-auto py-8">
            {/* First row - Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard title="Total Matches" value={metrics?.total_matches} description={`Matches across ${formatList("Steam", "Event")}`} />
                <StatCard title="Ranked" value={metrics?.type_distribution.ranked} description={`${calculatePercentage(metrics?.type_distribution.ranked, metrics?.total_matches, 1)}% of Matches`} />
                <StatCard title="Scrim" value={metrics?.type_distribution.scrim} description={`${calculatePercentage(metrics?.type_distribution.scrim, metrics?.total_matches, 1)}% of Matches`} />
                <StatCard title="Event" value={metrics?.type_distribution.event} description={`${calculatePercentage(metrics?.type_distribution.event, metrics?.total_matches, 1)}% of Matches`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <StatCard title="Players Tracked" value={metrics.total_players} description={"Number of players used to find steam matches"} />
                <StatCard title="Tournaments Tracked" value={metrics.total_tournaments} description={"Nuber of tournaments use to find event matches"} />
                <StatCard title="Processed Matches" value={`${calculatePercentage(metrics?.processed_distribution.true, metrics?.total_matches, 0)}%`} description={"Nuber of matches with processed telemetry data"} />
            </div>

            {/* Second row - Distribution chart (3/4) and Hello text (1/4) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Chart takes up 3/4 of the row (3 columns) */}
                <div className="lg:col-span-4 shadow p-4">
                    <MapDistributionChart distribution={metrics.map_distribution} />
                </div>

                {/* Hello text takes up 1/4 of the row (1 column) */}

            </div>
        </div>
    );
}