
export type Event = {
  id: string;
  timestamp: string;
  type: string;
  description: string;
  sourceIP: string;
};

type EventTableProps = {
  events: Event[];
};

const EventTable = ({ events }: EventTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 border border-gray-700 rounded-lg shadow-md">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timestamp</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Source IP</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-gray-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(event.timestamp).toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.sourceIP}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
