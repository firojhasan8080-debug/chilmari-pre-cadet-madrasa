import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        await fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (!error && data) {
        setProfile(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper flags for roles (supporting both uppercase and lowercase role strings from DB)
  const userRole = profile?.role?.toLowerCase() || '';
  const isSuperAdmin = userRole === 'super_admin' || userRole === 'superadmin';
  const isAdmin = userRole === 'admin' || isSuperAdmin;
  const isTeacher = userRole === 'teacher' || isAdmin;

  return (
    <AuthContext.Provider value={{ user, profile, loading, isSuperAdmin, isAdmin, isTeacher }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
