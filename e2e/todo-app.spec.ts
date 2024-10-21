import { test, expect } from '@playwright/test';


test("01 - Initial Render for the ToDo app", async ({ page }) => {
  await page.goto("/");

  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role
  const header = page.getByRole("banner")
  await expect(header).toBeVisible()
  await expect(header.getByText("To-Do in React")).toBeVisible()

  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role
  const main = page.getByRole("main")
  await expect(main).toBeVisible()

  const checkbox = main.getByRole("checkbox")
  await expect(checkbox).toBeVisible()
  await expect(checkbox).not.toBeChecked()

  const todoText = main.getByPlaceholder("Add a new todo")
  await expect(todoText).toBeVisible()

  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
  const footer = page.getByRole("contentinfo")
  await expect(footer).toBeVisible()
  // await expect(footer.getByText("Made with 💜")).toBeVisible()
})

