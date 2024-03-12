// import { createContext, useContext, useState } from 'react';

// const NumberContext = createContext();
// const NumberProvider = ({ children }) =>
//     {
//         const [numbers, setNumbers] = useState([]);
//         return (
//             <NumberContext.Provider value = {[ numbers, setNumbers]}>
//                 { children }
//             </NumberContext.Provider>
//         )
//     }

// const useNumbers = () => useContext(NumberContext)
// export { NumberProvider, useNumbers };

// number.js
import React, { createContext, useContext, useState } from 'react';

const NumbersContext = createContext();

export const NumberProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);

  return (
    <NumbersContext.Provider value={[numbers, setNumbers]}>
      {children}
    </NumbersContext.Provider>
  );
};

export const useNumbers = () => useContext(NumbersContext);

