import { useContext } from "react";
import AppStateContext from "../context/AppState.Context";

export default function useActions(){
    const { addToOrder, remove, removeAll } = useContext(AppStateContext);
    return { addToOrder, remove, removeAll };
}