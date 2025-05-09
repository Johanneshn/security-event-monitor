export const mockEvents = [
  {
    id: '1',
    timestamp: new Date('2023-03-01T10:15:00Z').toISOString(),
    type: 'login_attempt',
    severity: 'high',
    description: 'Failed login from unknown IP',
    sourceIP: '192.168.1.100'
  },
  {
    id: '2',
    timestamp: new Date('2023-03-01T14:30:00Z').toISOString(),
    type: 'file_access',
    severity: 'medium',
    description: 'Accessed sensitive file',
    sourceIP: '192.168.1.101'
  },
  {
    id: '3',
    timestamp: new Date('2023-03-03T08:45:00Z').toISOString(),
    type: 'password_change',
    severity: 'low',
    description: 'User changed password',
    sourceIP: '192.168.1.102'
  },
  {
    id: '4',
    timestamp: new Date('2023-03-04T16:20:00Z').toISOString(),
    type: 'login_attempt',
    severity: 'critical',
    description: 'Multiple failed login attempts',
    sourceIP: '192.168.1.103'
  },
  {
    id: '5',
    timestamp: new Date('2023-03-05T11:10:00Z').toISOString(),
    type: 'file_deletion',
    severity: 'high',
    description: 'Sensitive file deleted',
    sourceIP: '192.168.1.104'
  },
  {
    id: '6',
    timestamp: new Date('2023-03-05T12:00:00Z').toISOString(),
    type: 'login_success',
    severity: 'low',
    description: 'Successful login',
    sourceIP: '192.168.1.105'
  },
  {
    id: '7',
    timestamp: new Date('2023-03-05T13:45:00Z').toISOString(),
    type: 'data_export',
    severity: 'medium',
    description: 'Exported sensitive data',
    sourceIP: '192.168.1.106'
  },
  {
    id: '8',
    timestamp: new Date('2023-03-05T15:30:00Z').toISOString(),
    type: 'login_attempt',
    severity: 'high',
    description: 'Failed login attempt',
    sourceIP: '192.168.1.107'
  }
];