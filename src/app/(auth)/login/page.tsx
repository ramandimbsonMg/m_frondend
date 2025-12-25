import { LoginContainer } from "@/components/auth/login/login-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonjour",
};
export default function () {
    return (
        <>
        <LoginContainer />
        </>
    )
}