import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import usePostQuery from '@/hooks/usePostQuery';
import instance from '@/axios/instance';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [dataStudent, setDataStudent] = useState({});
  const [loading, setLoading] = useState(true);
  const { notify } = useToast();
  const loginMutation = usePostQuery('/login/verify');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        instance.defaults.headers.Authorization = `Bearer ${token}`;
        setDataStudent({ ...dataStudent, email: Cookies.get('email') });
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
        Cookies.set('email', res['email']);
        Cookies.set('token', res.loginToken);
        // instance.defaults.headers['x-admin-auth'] = res.token;

        // instance.defaults.headers.common[
        //   'Authorization'
        // ] = `bearer ${res.token}`;
        instance.defaults.headers.Authorization = `Bearer ${res.loginToken}`;
        // instance.defaults.headers.common = {
        //   Authorization: `bearer ${res.token}`,
        // };
        setDataStudent({
          ...data,
          email: res['email'],
        });
        notify('success', 'Login Success!!');
        // window.location.pathname = '/';
        router.replace('/');
      },
      onError: () => notify('error', 'Sorry, Something went wrong!'),
    });
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('email');
    setDataStudent({});
    delete instance.defaults.headers.common['Authorization'];
    window.location.pathname = '/auth/login';
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!dataStudent?.email,
        dataStudent,
        login,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
