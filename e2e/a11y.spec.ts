import AxeBuilder from "@axe-core/playwright"; // 1
import { expect, test } from "@playwright/test";

test.describe("homepage", () => {
	// 2
	test("should not have any automatically detectable accessibility issues", async ({
		page,
	}) => {
		await page.goto("/"); // 3

		const accessibilityScanResults = await new AxeBuilder({ page })
		// Tags: allow you to scan ONLY for a certain level of standards: 
		// https://www.deque.com/axe/core-documentation/api-documentation/?utm_campaign=api-documentation#api-notes
        //   .withTags(['best-practice'])
        .analyze(); // 4

		expect(accessibilityScanResults.violations).toEqual([]); // 5
	});
});
