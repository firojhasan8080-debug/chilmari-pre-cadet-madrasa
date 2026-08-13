import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [teacherPermissions, setTeacherPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        await fetchUserProfile(session.user.id);
      }
      setLoading(false);
    };

    getInitialSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user);
        await fetchUserProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
        setTeacherPermissions([]);
      }
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!error && data) {
        setProfile(data);
        if (data.role === 'TEACHER') {
          fetchTeacherPermissions(userId);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTeacherPermissions = async (teacherId) => {
    const { data } = await supabase
      .from('teacher_permissions')
      .select('permission_key')
      .eq('teacher_id', teacherId);

    if (data) {
      setTeacherPermissions(data.map(p => p.permission_key));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      teacherPermissions,
      isSuperAdmin: profile?.role === 'SUPER_ADMIN',
      isAdmin: profile?.role === 'ADMIN' || profile?.role === 'SUPER_ADMIN',
      isTeacher: profile?.role === 'TEACHER',
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
