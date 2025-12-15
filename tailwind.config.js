export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'algerie-blue': {
                    900: '#003366',
                    800: '#004080',
                    700: '#0055aa',
                    600: '#0066cc',
                },
                'algerie-yellow': {
                    400: '#FFC627',
                    500: '#FFB800',
                }
            }
        },
    },
    plugins: [],
}