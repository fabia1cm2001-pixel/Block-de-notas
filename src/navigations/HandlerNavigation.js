import React from 'react';
import { AuthNavigation } from './stacks';
import { AppNavigation } from './AppNavigation';

const AuthContext = React.createContext({ user: null, login: () => {}, logout: () => {} });
export const useAuth = () => React.useContext(AuthContext);

export function HandlerNavigation() {
  const [user, setUser] = React.useState(null);

  const contextValue = React.useMemo(() => ({
    user,
    login: (nextUser) => setUser(nextUser),
    logout: () => setUser(null),
  }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </AuthContext.Provider>
  );
}