import { test, expect } from '@playwright/test';

test('homepage loads without error or 404', async ({ page }) => {
	const errors: string[] = [];

	// 1. Catch unhandled runtime JavaScript errors or failed network assets
	page.on('pageerror', (exception) => {
		errors.push(`Page Error: ${exception.message}`);
	});

	// 2. Catch console.error() logs thrown by SvelteKit's error boundary
	page.on('console', (msg) => {
		if (msg.type() === 'error') {
			errors.push(`Console Error: ${msg.text()}`);
		}
	});

	// 3. Go to the page and wait for everything to settle
	await page.goto('/', { waitUntil: 'networkidle' });

	// 4. Check for SvelteKit's default error/404 layout keywords
	await expect(page.getByText('404')).not.toBeVisible({ timeout: 500 });
	await expect(page.getByText('Internal Error')).not.toBeVisible({ timeout: 500 });

	// 5. Assert that our error logs are completely empty
	expect(errors).toEqual([]);
});
