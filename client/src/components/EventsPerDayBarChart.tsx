import { useMemo } from 'react';
import {
    Chart,
    BarSeries,
    Axis,
    Settings,
    Position,
    DARK_THEME
} from '@elastic/charts';
import type { Event } from './EventTable';
// Use dark theme instead of light theme
import '@elastic/charts/dist/theme_dark.css';

interface EventsPerDayBarChartProps {
    events: Event[];
}

const EventsPerDayBarChart = ({ events }: EventsPerDayBarChartProps) => {
    // Group events by day and count them
    const dailyIncidents = useMemo(() => {
        const dailyCounts: Record<string, number> = {};

        events.forEach(event => {
            // Format timestamp to YYYY-MM-DD
            const date = new Date(event.timestamp).toISOString().split('T')[0];
            dailyCounts[date] = (dailyCounts[date] || 0) + 1;
        });

        // Convert to array for charting
        return Object.entries(dailyCounts).map(([date, count]) => ({
            date,
            count
        })).sort((a, b) => a.date.localeCompare(b.date));
    }, [events]);

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6" style={{ height: '300px' }}>
            <h2 className="text-l font-semibold text-gray-100 mb-4">Daily Security Incidents</h2>
            <Chart>
                <Settings
                    theme={DARK_THEME}
                />
                <BarSeries
                    id="incidents"
                    name="Incidents"
                    data={dailyIncidents}
                    xAccessor="date"
                    yAccessors={["count"]}
                    color="#4287f5" 
                />
                <Axis
                    id="bottom-axis"
                    position={Position.Bottom}
                    title="Date"
                    tickFormat={d => new Date(d).toLocaleDateString()}
                />
                <Axis
                    id="left-axis"
                    position={Position.Left}
                    title="Number of Incidents"
                    ticks={5}
                />
            </Chart>
        </div>
    );
};

export default EventsPerDayBarChart;