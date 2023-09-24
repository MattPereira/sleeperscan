"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type User = {
  userId: string;
  name: string;
  avatarId: string;
};

interface UserContextProps {
  currentUser: User;
  setCurrentUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps>({
  currentUser: {
    userId: "",
    name: "",
    avatarId: "",
  },
  setCurrentUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>({
    userId: "",
    name: "",
    avatarId: "",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
