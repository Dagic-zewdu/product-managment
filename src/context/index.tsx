import React from 'react';

interface AppContextInterface {
  tab: string;
  setTabs: Function;
  query: string;
}
export const AddProductContext = React.createContext<AppContextInterface | any>(null);
