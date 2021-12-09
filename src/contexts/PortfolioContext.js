import React, { createContext, useReducer } from "react";
import axios from "axios";

import PortfolioReducer from "../reducers/PortfolioReducer";

const initialState = {
  portfolioItems: [],
  portfolioToEdit: {},
  isLoading: true,
};

export const PortfolioContext = createContext(initialState);

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PortfolioReducer, initialState);

  async function getPortfolioItems() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/`);

      dispatch({
        type: "GET_ITEMS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function getItemWithId(id) {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/items/${id}`
      );

      dispatch({
        type: "GET_ITEM_ID",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addPortfolioItem(item, success) {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/items`,
        item,
        { withCredentials: true }
      );
      dispatch({
        type: "ADD_ITEM",
        payload: res.data,
      });

      success();
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deletePortfolioItem(id, success) {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/items/${id}`, {
        withCredentials: true,
      });

      dispatch({
        type: "DELETE_ITEM",
        payload: id,
      });

      success();
    } catch (err) {
      console.log(err);
    }
  }

  async function editPortfolioItem(id, formData, success) {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/items/${id}`,
        formData,
        { withCredentials: true }
      );

      console.log("Edit Successful");
      success();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PortfolioContext.Provider
      value={{
        portfolioItems: state.portfolioItems,
        portfolioToEdit: state.portfolioToEdit,
        isLoading: state.isLoading,
        getPortfolioItems,
        getItemWithId,
        addPortfolioItem,
        deletePortfolioItem,
        editPortfolioItem,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
