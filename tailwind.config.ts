import type { Config } from "tailwindcss";

interface AddComponents {
    (components: Record<string, string | Record<string, string>>): void;
}

import { colors } from "./app/theme/colors";

export default {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./app/entry.client.tsx",
        "./app/entry.server.tsx",
        "./app/root.tsx",
    ],
    theme: {
        extend: {
            colors: colors,
            backgroundImage: {
                gradient: "linear-gradient(0deg, #476991 0%, #151f2b 100%)",
            },
        },
    },
    plugins: [
        function ({ addComponents }: { addComponents: AddComponents }) {
            addComponents({
                ".btn-hover-effect": {
                    transitionProperty: "all",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                },
            });
        },
    ],
} satisfies Config;
