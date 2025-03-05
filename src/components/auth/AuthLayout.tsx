import { ReactNode } from "react";
import { ThemeButton } from "@components/buttons";

interface AuthLayoutProps {
    children: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 min-h-screen overflow-hidden flex items-center justify-center">
            <div className="absolute top-3 right-3">
                <ThemeButton />
            </div>
            {children}
        </div>
    );
};
