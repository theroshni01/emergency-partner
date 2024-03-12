// import { createContext, useContext, useState } from 'react';

//     const EmailContext = createContext();
// const EmailProvider = ({ children }) =>
//     {
//         const [userEmail, setUserEmail] = useState('');
//         return (
//             <EmailContext.Provider value = {[ userEmail, setUserEmail]}>
//                 { children }
//             </EmailContext.Provider>
//         )
//     }

// const useEmail = () => useContext(EmailContext)

// export { EmailProvider, useEmail };

// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
