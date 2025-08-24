import { createContext, useState, useContext, useCallback } from "react";

const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback(
    (message, type = "success", duration = 1000000) => {
      setAlert({ message, type });
      setTimeout(() => setAlert(null), duration);
    },
    [],
  );

  return (
    <AlertContext.Provider value={{ showAlert, alert }}>
      {children}
    </AlertContext.Provider>
  );
}
