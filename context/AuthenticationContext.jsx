import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import usePostQuery from '@/hooks/usePostQuery';
import instance from '@/axios/instance';
import useToast from '@/hooks/useToast';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [nim, setNim] = useState(null);
  const [loading, setLoading] = useState(true);
  const { notify } = useToast();
  const loginMutation = usePostQuery('/login');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        instance.defaults.headers.Authorization = `Bearer ${token}`;
        setNim(Cookies.get('NIM'));
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (data) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        console.log('res', res);
        if (res.type === 'error') return notify('error', err.message);
        Cookies.set('NIM', res['nim']);
        Cookies.set('token', res.token);
        // instance.defaults.headers['x-admin-auth'] = res.token;

        // instance.defaults.headers.common[
        //   'Authorization'
        // ] = `bearer ${res.token}`;
        instance.defaults.headers.Authorization = `Bearer ${res.token}`;
        // instance.defaults.headers.common = {
        //   Authorization: `bearer ${res.token}`,
        // };
        setNim(res.nim);
        notify('success', 'Login Success!!');
        window.location.pathname = '/';
        // return router;
      },
      onError: () => notify('error', 'Sorry, Something went wrong!'),
    });
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('adminID');
    setNim(null);
    delete instance.defaults.headers.common['Authorization'];
    window.location.pathname = '/auth/login';
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!nim, nim, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
