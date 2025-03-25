export default {
    testEnvironment: 'jsdom',  // Ensure the test environment is set to jsdom
    transformIgnorePatterns: [
        "/node_modules/(?!axios)"  // Explicitly include axios for transformation
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",  // Use babel-jest to transform JSX and JS files
    },
    globals: {
        'babel-jest': {
            useESM: true,  // If using TypeScript, this is necessary
        },
    },

};
