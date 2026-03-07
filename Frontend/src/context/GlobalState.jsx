// import React, { createContext, useReducer, useEffect } from "react";
// import axios from "axios";
// import AppReducer from "./AppReducer";

// const initialState = {
//   transactions: [],
//   error: null,
//   loading: true
// };

// export const GlobalContext = createContext(initialState);

// export const GlobalProvider = ({ children }) => {

//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   useEffect(() => {
//     getTransactions();
//   }, []);

//   async function getTransactions() {
//     try {

//       const res = await axios.get("/api/v1/transactions");

//       dispatch({
//         type: "GET_TRANSACTIONS",
//         payload: res.data.data
//       });

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function addTransaction(transaction) {
//     try {

//       const res = await axios.post("/api/v1/transactions", transaction);

//       dispatch({
//         type: "ADD_TRANSACTION",
//         payload: res.data.data
//       });

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function deleteTransaction(id) {
//     try {

//       await axios.delete(`/api/v1/transactions/${id}`);

//       dispatch({
//         type: "DELETE_TRANSACTION",
//         payload: id
//       });

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         error: state.error,
//         loading: state.loading,
//         deleteTransaction,
//         addTransaction
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };