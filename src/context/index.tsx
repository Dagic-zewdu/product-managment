import React from 'react';

interface AppContextInterface {}
export const AddProductContext = () => React.createContext<AppContextInterface | null>(null);
