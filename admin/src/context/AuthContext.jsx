import { createContext, useContext, useState, useEffect } from 'react';
import { adminAPI } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('gt_admin_token');
    if (token) {
      adminAPI.me()
        .then(res => setUser(res.data.data))
        .catch(() => {
          localStorage.removeItem('gt_admin_token');
          localStorage.removeItem('gt_admin_user');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await adminAPI.login({ email, password });
    const { token, user: userData } = res.data;
    localStorage.setItem('gt_admin_token', token);
    localStorage.setItem('gt_admin_user', JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem('gt_admin_token');
    localStorage.removeItem('gt_admin_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
