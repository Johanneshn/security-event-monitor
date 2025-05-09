import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import EventTable, { type Event } from '../components/EventTable';
// In the import section
import EventsPerDayBarChart from '../components/EventsPerDayBarChart';


const GET_EVENTS = gql`
  query GetEvents($severity: String, $type: String) {
    events(severity: $severity, type: $type) {
      id
      timestamp
      type
      description
      sourceIP
    }
  }
`;

const Dashboard = () => {
  const [severity, setSeverity] = useState<string | undefined>();
  const [type, setType] = useState<string | undefined>();

  const { data, loading, error, refetch } = useQuery(GET_EVENTS, {
    variables: { severity, type }
  });

  const handleFilterChange = (
    field: 'severity' | 'type',
    value: string
  ) => {
    const updatedSeverity = field === 'severity' ? value || undefined : severity;
    const updatedType = field === 'type' ? value || undefined : type;
    setSeverity(updatedSeverity);
    setType(updatedType);
    refetch({ severity: updatedSeverity, type: updatedType });
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-100">Security Events</h1>
        </div>
        <div className="mb-4 flex justify-center gap-4">
          <label className="inline-block text-gray-300">
            Severity:
            <select
              className="ml-2 p-1 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={severity || ''}
              onChange={(e) => handleFilterChange('severity', e.target.value)}
            >
              <option value="">All</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>

          <label className="inline-block text-gray-300">
            Type:
            <select
              className="ml-2 p-1 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={type || ''}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">All</option>
              <option value="login_attempt">Login Attempt</option>
              <option value="file_access">File Access</option>
              <option value="malware_detected">Malware Detected</option>
            </select>
          </label>
        </div>

        {loading ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-400">Error loading events.</p>
        ) : (
          <>
            <EventsPerDayBarChart events={data.events as Event[]} />
            <EventTable events={data.events as Event[]} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
