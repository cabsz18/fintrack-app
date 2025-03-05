import React from "react";
import { FieldError, RegisterOptions } from "react-hook-form";
import { ErrorMessage } from "@components/texts";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type?: "text" | "email" | "password";
    placeholder: string;
    required?: boolean;
    register: (name: string, options?: RegisterOptions) => any;
    validations?: RegisterOptions;
    errorMsg?: FieldError | undefined;
    props?: any;
}

export const InputField: React.FC<InputFieldProps> = ({
    name = "",
    label = "",
    type = "text",
    placeholder = "",
    required = false,
    register,
    validations = {},
    errorMsg = {},
    ...props
}) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block mb-1 text-xs font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                name={name}
                id={name}
                type={type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required={required}
                {...(register ? register(name, validations) : {})}
                {...props}
            />
            {errorMsg && <ErrorMessage message={errorMsg["message"]} />}
        </div>
    );
};
