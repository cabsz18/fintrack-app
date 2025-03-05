import { ReactNode } from "react";

interface AuthCardProps {
    children: ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
    return (
        <div className="w-full max-w-sm mx-5 bg-white dark:bg-gray-800 rounded-sm shadow-lg dark:border dark:border-gray-700">
            <div className="p-6 sm:p-8 space-y-6">{children}</div>
        </div>
    );
};
