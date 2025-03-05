interface ErrorMessageProps {
    message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    if (!message) return null;

    return <span className="text-red-500 text-xs mt-2">{message}</span>;
};
