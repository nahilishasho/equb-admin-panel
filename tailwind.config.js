module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html', "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
    darkMode: true, // or 'media' or 'class'
    important: "#root",
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
