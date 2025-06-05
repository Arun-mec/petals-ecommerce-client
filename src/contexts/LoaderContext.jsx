import { createContext, useState } from "react";
import Loader from "../components/layout/loader/Loader";

export const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showLoader = () => setIsVisible(true);
  const hideLoader = () => setIsVisible(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {isVisible && <Loader />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
