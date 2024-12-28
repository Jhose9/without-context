// "use client";
// // WinContext.tsx
// import React, { createContext, useState, useContext } from "react";

// // Definir el tipo para el contexto
// type WinContextType = {
//   winContex: boolean;
//   setWinContex: React.Dispatch<React.SetStateAction<boolean>>;
// };

// // Crear el contexto con un valor por defecto
// const WinContext = createContext<WinContextType>({
//   winContex: false,
//   setWinContex: () => {},
// });

// // Proveedor del contexto
// export function WinProvider({ children }: { children: React.ReactNode }) {
//   const [winContex, setWinContex] = useState(false);

//   return (
//     <WinContext.Provider value={{ winContex, setWinContex }}>
//       {children}
//     </WinContext.Provider>
//   );
// }

// // Hook personalizado para usar el contexto
// export function useWin() {
//   const context = useContext(WinContext);
//   if (!context) {
//     throw new Error("useWin debe usarse dentro de un WinProvider");
//   }
//   return context;
// }
