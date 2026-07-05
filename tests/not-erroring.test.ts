import { test, expect } from '@playwright/test';

test('homepage loads without error', async ({ page }) => {
	await page.goto('/', { waitUntil: 'networkidle' });
	await expect(page.getByText('404')).not.toBeVisible({ timeout: 500 });
});
