import { AuthLayout, AuthForm } from "@components/auth";

export const ForgotPassword = () => {
    const onSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <AuthLayout>
            <AuthForm
                title="Forgot Password"
                onSubmit={onSubmit}
                fields={[
                    { name: "email", label: "Email", placeholder: "Email", validations: { required: "Email is required" } },
                ]}
                buttonLabel={"Submit"}
            />
        </AuthLayout>
    );
};