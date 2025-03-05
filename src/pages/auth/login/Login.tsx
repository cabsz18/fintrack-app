import { Link } from "react-router-dom";
import { AuthLayout, AuthForm } from "@components/auth";

export const Login = () => {
    const onSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <AuthLayout>
            <AuthForm
                title="Sign in to your account"
                onSubmit={onSubmit}
                fields={[
                    { name: "email", label: "Email", placeholder: "Email", validations: { required: "Email is required" } },
                    { name: "password", label: "Password", placeholder: "Password", validations: { required: "Password is required" } },
                ]}
                footer={
                    <p>
                        Don’t have an account yet?{" "}
                        <Link to="/register" className="text-primary-600 hover:underline dark:text-primary-500">
                            Sign up
                        </Link>
                    </p>
                }
                buttonLabel={"Login"}
            />
        </AuthLayout>
    );
};