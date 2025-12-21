import { FormsType } from "@/types/formsProps";
import { LoginView } from "./login-view"
import clsx from "clsx";
import { Props } from "@/types/types";

export const LoginContainer = ({className}:Props) => {
    return ( 
        <>
            <LoginView className={clsx(className)} />
        </>
     )
}