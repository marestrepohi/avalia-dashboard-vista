import React, { createContext, useState, useContext, ReactNode } from 'react';

type ViewType = 'dashboard' | 'agents' | 'campaigns' | 'clientDashboard' | 'accounts' | 'contacts' | 'prospects' | 'clientConfig' | 'calendar' | 'banking' | 'settings' | 'callAnalysis' | 'asistentes' | 'audiencias';

interface DashboardContextType {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');

  return (
    <DashboardContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
