import { FormsType } from "@/types/formsProps";
import { LoginView } from "./login-view"
import clsx from "clsx";
interface Props {
    form: FormsType;
    className?: string;
}
export const LoginContainer = ({form, className}:Props) => {
    return ( 
        <>
            <LoginView form={form} className={clsx(className)} />
        </>
     )
}