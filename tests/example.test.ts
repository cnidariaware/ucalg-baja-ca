import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
	// await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
