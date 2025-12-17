import { LoginContainer } from "@/components/auth/login/login.container";
import { PropsLogin } from "@/types/types";

export default function ({form}:PropsLogin) {
    return (
        <>
        <LoginContainer form={form} />
        </>
    )
}