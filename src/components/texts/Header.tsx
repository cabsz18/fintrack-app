import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className = "" }) => {
    return (
        <h1
            className={`text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white ${className}`}
        >
            {children}
        </h1>
    );
};
