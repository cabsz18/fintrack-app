import { useTheme } from "@contexts/ThemeContext";

export const ThemeButton: React.FC = () => {
    const { setTheme, theme } = useTheme() as {
        theme: "light" | "dark";
        setTheme: (theme: "light" | "dark") => void
    };
    return (
        <>
            {theme === "dark" && (
                <button
                    type="button"
                    className="cursor-pointer inline-flex items-center gap-x-2 py-2 px-3 bg-white/10 rounded-full text-sm text-white transform duration-300 hover:bg-white/20 focus:outline-none focus:bg-white/20"
                    onClick={() => setTheme("light")}
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                    Dark
                </button>
            )}
            {theme === "light" && (
                <button
                    type="button"
                    className="cursor-pointer inline-flex items-center gap-x-2 py-2 px-3 bg-gray-200 rounded-full text-sm text-black transform duration-300 hover:bg-gray-300 focus:outline-none focus:bg-white/20"
                    onClick={() => setTheme("dark")}
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    Light
                </button>
            )}
        </>
    );
};
