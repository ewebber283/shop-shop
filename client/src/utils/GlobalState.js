import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
//provider is component that we wrap app in so it can make state data available as prop
//consumers grabs and uses data in provider
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products:[],
        categories: [],
        currentCategory: '',
    });
    //confirm it works
    console.log(state);
    return <Provider value = {[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
  };

export { StoreProvider, useStoreContext };