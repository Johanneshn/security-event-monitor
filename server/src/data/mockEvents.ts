export const mockEvents = [
  {
    id: '1',
    timestamp: new Date().toISOString(),
    type: 'login_attempt',
    severity: 'high',
    description: 'Failed login from unknown IP',
    sourceIP: '192.168.1.100'
  },
  {
    id: '2',
    timestamp: new Date().toISOString(),
    type: 'file_access',
    severity: 'medium',
    description: 'Accessed sensitive file',
    sourceIP: '192.168.1.101'
  }
];