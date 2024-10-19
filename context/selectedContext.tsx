import React, { createContext, ReactNode, useState } from 'react';

// Define the shape of the context value
interface SelectContextProps {
  isSelected: boolean;
  selectActive: () => void;
}

// Create the context with an undefined initial value
const selectContext = createContext<SelectContextProps | undefined>(undefined);

const SelectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const selectActive = () => {
    setIsSelected((prevState) => !prevState);
  };

  return (
    <selectContext.Provider value={{ isSelected, selectActive }}>
      {children}
    </selectContext.Provider>
  );
};

export { SelectProvider, selectContext };