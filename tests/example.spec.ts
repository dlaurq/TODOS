import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment',
];

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    const delBtns = await page.getByTestId('del-btn').all();

    for (let i = 0; i < delBtns.length; i++) {
      await delBtns[i].click({ button: 'left' });
      console.log('clicked');
    }

    console.log('after click');
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create 1st todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('todo-title')).toHaveText([TODO_ITEMS[0]]);

    // Create 2nd todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1],
    ]);

    //await checkNumberOfTodosInLocalStorage(page, 2);
  });

  /**
  test('should clear text input field when an item is added', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create one todo item.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Check that input is empty.
    await expect(newTodo).toBeEmpty();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });

  test('should append new items to the bottom of the list', async ({ page }) => {
    // Create 3 items.
    await createDefaultTodos(page);

    // create a todo count locator
    const todoCount = page.getByTestId('todo-count')
  
    // Check test using different methods.
    await expect(page.getByText('3 items left')).toBeVisible();
    await expect(todoCount).toHaveText('3 items left');
    await expect(todoCount).toContainText('3');
    await expect(todoCount).toHaveText(/3/);

    // Check all items in one call.
    await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });
  */
});
