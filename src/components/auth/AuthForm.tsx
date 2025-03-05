import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "@components/forms";
import { CmnButton } from "@components/buttons";
import { Header } from "@components/texts";
import { AuthCard } from "@components/auth";
import { FieldError, RegisterOptions } from "react-hook-form";
import { useLocation, Link } from "react-router-dom";

interface FieldProps {
    name: string;
    label: string;
    placeholder: string;
    errorMsg?: FieldError;
    validations?: RegisterOptions;
}

interface AuthFormProps {
    title: string;
    fields: FieldProps[];
    processing?: boolean;
    onSubmit: (data: any) => void;
    footer?: ReactNode;
    buttonLabel?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({
    title,
    fields,
    onSubmit,
    footer,
    buttonLabel,
    processing,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const location = useLocation();

    return (
        <AuthCard>
            <Header className="">{title}</Header>
            <form className="grid" onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (
                    <InputField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        placeholder={field.placeholder}
                        register={register}
                        errorMsg={errors[field.name] as FieldError | undefined}
                        validations={field.validations}
                    />
                ))}
                {location.pathname === "/" && (
                    <span className="cursor-pointer hover:underline text-xs text-gray-500 mb-2 mt-[-12px] text-right">
                        <Link to={{ pathname: "/forgot-password" }}>
                            Forgot Password?
                        </Link>
                    </span>
                )}
                {location.pathname === "/forgot-password" && (
                    <span className="cursor-pointer hover:underline text-xs text-gray-500 mb-2 mt-[-12px] text-right">
                        <Link to={{ pathname: "/" }}>
                            Go back to login
                        </Link>
                    </span>
                )}
                <CmnButton
                    type="submit"
                    onClick={onSubmit}
                    disabled={processing}
                    className="!mt-2"
                >
                    {buttonLabel ?? 'Submit'}
                </CmnButton>
            </form>
            {footer && <div className="text-xs text-gray-500">{footer}</div>}
        </AuthCard>
    );
};
