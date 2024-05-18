'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

// Define types to context values
interface SearchContextType {
  searchActive: boolean;
  setSearchActive: Dispatch<SetStateAction<boolean>>;
}

// Define types to provide props
interface SearchContextProviderProps {
  children: ReactNode;
}

// create context
export const SearchContext = createContext<SearchContextType>(undefined!);

// provider
export const SearchContextProvider = ({
  children
}: SearchContextProviderProps) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
