import { useTheme } from "next-themes";
import { BoltIcon, BoltSlashIcon } from "@heroicons/react/24/solid";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <BoltIcon className="h-5 w-5 text-main-blue dark:text-amber-500" />
      ) : (
        <BoltSlashIcon className="h-5 w-5 text-main-blue dark:text-amber-500" />
      )}
    </button>
  );
}
