import { useContext } from "react";
import AppStateContext from "../context/AppState.Context";

export default function useOrders(){
    const { orders } = useContext(AppStateContext);
    return orders;
}