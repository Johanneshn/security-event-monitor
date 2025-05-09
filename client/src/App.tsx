import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Dashboard from './pages/Dashboard';

const App = () => (
  <ApolloProvider client={client}>
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg mb-4 text-white font-bold">
      Tailwind Test Banner - If you see a blue background, Tailwind is working!
    </div>
    <Dashboard />
  </ApolloProvider>
);

export default App;