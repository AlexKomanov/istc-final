import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'

test('zerostep example', async ({ page }) => {
  
  const zeroStepArgs = {page, test};

  await ai("Navigate to https://www.saucedemo.com/ ", {page, test})
  await ai("Type 'standard_user' into username textfield", zeroStepArgs)
  await ai("Type 'secret_sauce' into password textfield", zeroStepArgs)
  await ai("Click on 'Login' button", zeroStepArgs)
  console.log('page url -> ', page.url())
  // const pageUrl = await ai("Get the URL of current page including 'https://' part", zeroStepArgs) // Still can bring without https part
  let pageUrl = await ai("Get the URL of current page", zeroStepArgs) // Still we are getting without https part
  console.log('pageUrl', pageUrl)
  await expect(page).toHaveURL('https://'+pageUrl)
  expect(page.url()).toContain(pageUrl)

  await ai("Add item 'Sauce Labs Onesie' to basket", zeroStepArgs)
  await ai("Add item 'Sauce Labs Bike Light' to basket", zeroStepArgs)
  const numberOfItems = await ai("How many items in the cart", zeroStepArgs)
  console.log('numberOfItems ->', numberOfItems)
  expect(numberOfItems).toEqual('2')
  await ai("Click cart icon", zeroStepArgs)
  await ai("Click 'Checkout' button", zeroStepArgs)

  await ai("Fill out the form with realistic values", zeroStepArgs)
  // await ai("Perform Logout from the system", zeroStepArgs)
  await ai("Open the hamburger menu", zeroStepArgs)
  await ai("Click 'Logout' option", zeroStepArgs)

  const isLoginFormVisible = await ai("Is Login Form visible?", zeroStepArgs)
  console.log('isLoginFormVisible -> ', isLoginFormVisible)
  expect(isLoginFormVisible).toBeTruthy()
  pageUrl = await ai("Get the URL of current page", zeroStepArgs)
  console.log('pageUrl', pageUrl)
  expect(page.url()).toContain(pageUrl)

});
