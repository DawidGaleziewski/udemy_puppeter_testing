# launch options
```js
puppeteer.launch({ headless: false, slowMo: 500, devtools: true }); 
```


# pausing the test

```js
	await page.waitForTimeout(3000) // pause test - way of implicit pausing the test. Historically used was waitFor
```


# navigating

!!! warning goBack and goForward seems to be bugged
Go to a page
```js
await page.goto('https://dev.to/'); // redirects to a page
await page.goBack(); // goes back in history, same as hitting back arrow on browser
await page.goForward();
```

# interacting with inputs