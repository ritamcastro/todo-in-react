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

test("02 - Displays a complete ToDo with a different style", async ({ page }) => {
  await page.goto("/");

  const main = page.getByRole("main")

  const checkbox = main.getByRole("checkbox")
  await expect(checkbox).toBeVisible()
  await expect(checkbox).not.toBeChecked()

  const todoText = main.getByPlaceholder("Add a new todo")
  await expect(todoText).toBeVisible()
  await expect(todoText).toHaveCSS('text-decoration', /none/);

  await checkbox.check();

  await expect(checkbox).toBeChecked();
  await expect(todoText).toHaveCSS('text-decoration', /line-through/);
})

test("03 - Adds new ToDos to the list", async ({ page }) => {
  await page.goto("/");

  const main = page.getByRole("main")

  const addButton = main.getByRole("button", { name: "New" })
  await expect(addButton).toBeVisible()

  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role
  const todoList = main.getByRole("list")
  await expect(todoList).toBeVisible()

  const todoItems = todoList.getByRole("listitem")
  expect(todoItems).toHaveCount(1)

  await todoList.getByPlaceholder("Add a new todo").fill("This is the first item")

  await addButton.click()

  await todoList.getByPlaceholder("Add a new todo").nth(1).fill("This is the second item")

  expect(todoItems).toHaveCount(2)
})

test("04 - Sorts the ToDos according to their status", async ({ page }) => {
  await page.goto("/");

  const main = page.getByRole("main")
  const addButton = main.getByRole("button", { name: "New" })
  const todoList = main.getByRole("list")

  await todoList.getByPlaceholder("Add a new todo").fill("This is the first item")

  await addButton.click()
  await addButton.click()

  await todoList.getByPlaceholder("Add a new todo").nth(1).fill("This is the second item")
  await todoList.getByPlaceholder("Add a new todo").nth(2).fill("This is the third item")

  const itemMarkedAsDone = todoList.getByRole("checkbox").nth(1)
  await itemMarkedAsDone.check()

  await expect(todoList.getByRole("textbox").first()).toHaveValue("This is the first item")
  await expect(todoList.getByRole("textbox").nth(1)).toHaveValue("This is the third item")
  await expect(todoList.getByRole("textbox").nth(2)).toHaveValue("This is the second item")
})

test("05 - Deletes a ToDo item from the list ", async ({ page }) => {
  await page.goto("/");

  const main = page.getByRole("main")
  const addButton = main.getByRole("button", { name: "New" })
  const todoList = main.getByRole("list")

  await todoList.getByPlaceholder("Add a new todo").fill("This is the reference item")

  await addButton.click()
  await addButton.click()
  await todoList.getByPlaceholder("Add a new todo").nth(1).fill("This is the item to delete")
  await todoList.getByPlaceholder("Add a new todo").nth(2).fill("This is another item")

  const todoItems = todoList.getByRole("listitem")
  expect(todoItems).toHaveCount(3)

  const deleteButton = todoItems.getByRole("button", { name: "Delete" })
  expect(deleteButton).toHaveCount(3)

  await deleteButton.nth(1).click()

  expect(todoItems).toHaveCount(2)
  await expect(page.getByText("This is the item to delete")).not.toBeInViewport()
})

test("06 - Keeps the todos when reloading the page", async ({ page }) => {
  await page.goto("/");

  const main = page.getByRole("main")
  const todoList = main.getByRole("list")
  await todoList.getByPlaceholder("Add a new todo").fill("One todo")

  const todoItems = todoList.getByRole("listitem")
  expect(todoItems).toHaveCount(1)

  await page.reload()

  await expect(page.getByRole("textbox")).toHaveValue("One todo")
  expect(todoItems).toHaveCount(1)
})

test("07 - Sees more information for a ToDo item on a new page", async ({ page }) => {
  await page.goto("/");

  const main = page.getByRole("main")
  const todoList = main.getByRole("list")
  await todoList.getByPlaceholder("Add a new todo").fill("Check React Router")

  const seeMoreButton = todoList.getByRole("button", { name: "See more" })
  await seeMoreButton.click()

  await expect(page).toHaveURL(/details/i)

  const header = page.getByRole("banner")
  await expect(header).toBeVisible()
  await expect(header.getByText("To-Do in React")).toBeVisible()

  await expect(page.getByRole("heading", { name: "Detailed ToDo" })).toBeVisible()

  const footer = page.getByRole("contentinfo")
  await expect(footer).toBeVisible()
})

test("08 - Sees an error page for an unexisting ToDo and is able to get back to the home page", async ({ page }) => {
  await page.goto("/details/20241024");

  // This part ensures the existence of the main template
  const header = page.getByRole("banner")
  await expect(header.getByText("To-Do in React")).toBeVisible()
  // Is it really a button? 
  // const homeButton = header.getByRole("button", { name: "Home" })
  const homeButton = header.getByRole("link", { name: "Home" })


  const footer = page.getByRole("contentinfo")
  await expect(footer).toBeVisible()

  const main = page.getByRole("main")
  await expect(main.getByText("💀")).toBeVisible()
  await expect(main.getByText("🔎 This ToDo (#20241024) does not exist.")).toBeVisible()
  await expect(main.getByText("🔙 Time to go back home...")).toBeVisible()

  await homeButton.click()

  await expect(page).toHaveURL("/")
  await expect(page.getByRole("button", { name: "New" })).toBeVisible()
})

test("09 - Sees a generic error page for an unexisting route in the ToDo app", async ({ page }) => {
  await page.goto("/where/the/hell/am/i");

  const main = page.getByRole("main")
  await expect(main.getByText("💀")).toBeVisible()
  await expect(main.getByText("🤨 Where are you? This seems like a wrong turn.")).toBeVisible()
  await expect(main.getByText("🏠 Time to go back home...")).toBeVisible()



  // This part ensures the existence of the main template
  const header = page.getByRole("banner")
  await expect(header.getByText("To-Do in React")).toBeVisible()
  // Is it really a button? 
  // const homeButton = header.getByRole("button", { name: "Home" })
  const homeButton = header.getByRole("link", { name: "Home" })


  const footer = page.getByRole("contentinfo")
  await expect(footer).toBeVisible()


  await homeButton.click()

  await expect(page).toHaveURL("/")
  await expect(page.getByRole("button", { name: "New" })).toBeVisible()
})

