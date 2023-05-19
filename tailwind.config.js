/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["DM Sans"],
            },
            colors: {
                primary: "#D81E05",
                "primary-hover": "#b21b07",
                success: "#008C47",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                primary: "#D81E05",
                "primary-hover": "#b21b07",
                success: "#008C47",
            },
        },
    },
    plugins: [],
}
