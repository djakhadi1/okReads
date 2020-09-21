import { $, $$, browser, ExpectedConditions, element, by } from 'protractor';

describe('When: I use the reading list feature', () => {

  beforeEach(async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );
  });

  it('Then: I should see my reading list', async () => {
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should be able to add book in my reading list', async () => {
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();
    const readinglistAdd = await $('#wantToRead_2');
    await readinglistAdd.click();
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();
    const items = await $$('[data-testing="reading-list-container"]');
    expect(items.length).toEqual(1, 'at least one');
  });

  it('Then: I should be able to view snack bar and add item', async () => {
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();
    const readinglistAdd = await $('#wantToRead_3');
    await readinglistAdd.click();
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();
    const items = await $$('[data-testing="reading-list-container"]');
    expect(items.length).toEqual(1, 'at least one');
  });

  it('Then: I should able to remove my action from snack bar', async () => {
    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();
    const readinglistAdd = await $('#wantToRead_5');
    await readinglistAdd.click();

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();
    const items = await $$('[data-testing="reading-list-container"]');
    expect(items.length).toEqual(1, 'at least one');
  });
});
