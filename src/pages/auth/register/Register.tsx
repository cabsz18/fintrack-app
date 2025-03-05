import { Link } from "react-router-dom";
import { AuthLayout, AuthForm } from "@components/auth";

export const Register = () => {
    const onSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <AuthLayout>
            <AuthForm
                title="Create an account"
                onSubmit={onSubmit}
                fields={[
                    { name: "username", label: "Username", placeholder: "Username", validations: { required: "Username is required" } },
                    { name: "email", label: "Email", placeholder: "Email", validations: { required: "Email is required" } },
                    { name: "password", label: "Password", placeholder: "Password", validations: { required: "Password is required" } },
                ]}
                footer={
                    <p>
                        Already have an account?{" "}
                        <Link to="/" className="text-primary-600 hover:underline dark:text-primary-500">
                            Sign in
                        </Link>
                    </p>
                }
                buttonLabel={"Sign Up"}
            />
        </AuthLayout>
    );
};