import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	testMatch: '**/*.test.{ts,js}',

	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',

	use: {
		baseURL: 'http://localhost:4173',
		trace: 'on-first-retry'
	},

	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI
	},

	// === YOUR REQUESTED TEST ENVIRONMENTS ===
	projects: [
		// 1. Desktop Chrome
		{
			name: 'Desktop Chrome',
			use: { ...devices['Desktop Chrome'] }
		},

		// 2. Desktop Firefox
		{
			name: 'Desktop Firefox',
			use: { ...devices['Desktop Firefox'] }
		},

		// 3. Mobile Chrome - 360px width
		{
			name: 'Mobile Chrome 360',
			use: {
				...devices['Pixel 5'], // Good mobile base
				viewport: { width: 360, height: 640 },
				userAgent:
					'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
			}
		},

		// 4. Mobile Safari - 360px width
		{
			name: 'Mobile Safari 360',
			use: {
				...devices['iPhone 12'], // Good iOS base
				viewport: { width: 360, height: 640 },
				userAgent:
					'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
			}
		}
	]
});
