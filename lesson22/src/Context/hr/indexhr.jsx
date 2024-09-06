import { createContext } from "react";

export const Hrcontext = createContext();

export const HrProvider = ({ children }) => {
  return <Hrcontext.Provider value="Bib isora">{children}</Hrcontext.Provider>;
};
