const { AllureReporter } = require('allure-playwright');

module.exports = {
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
    ],
    reporter: 'html'
};
