import { createContext, useState } from "react";

const DataContext = createContext(null);

const Dataprovider = ({children}) => {
  const [HTML, setHTML] = useState("");
  const [CSS, setCSS] = useState("");
  const [JS, setJS] = useState("");

  return (
    <DataContext.Provider
      value=
      {{
        HTML,
        setHTML,
        CSS,
        setCSS,
        JS,
        setJS,
      }}
      >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
