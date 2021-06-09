import { useContext } from "react";
import AppStateContext from "../context/AppState.Context";

export default function usePrototypes(){
    const { prototypes } = useContext(AppStateContext);
    return prototypes;
}