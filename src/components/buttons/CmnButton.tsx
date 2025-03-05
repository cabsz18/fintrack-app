import { ReactNode } from "react";

interface CmnButtonProps {
    children: ReactNode;
    className: string;
    type: "button" | "submit" | "reset";
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const CmnButton: React.FC<CmnButtonProps> = ({
    children,
    className = "",
    type = "button",
    onClick = () => {},
    disabled = false,
    ...props
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition duration-150
                focus:ring-4 focus:outline-none focus:ring-primary-300 
                text-xs text-center text-white bg-black hover:bg-neutral-700
                dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500 *:dark:focus:ring-gray-800 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
