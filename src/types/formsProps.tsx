export interface FormsType {
    onSubmit: any;
    control?: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}

export interface LoginFormFilesType {
    email: string;
    password: string;
}

export interface RegisterFormFielsType {
    email: string;
    password: string;
    confirm_password: string;
    how_did_hear: string;
}

export interface ForgetPasswordFielsType {
    email: string;
}