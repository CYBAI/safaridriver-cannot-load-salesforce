# A reproduce test case for demoing loading timeout at Salesforce web app for Safaridriver

## How to run

```sh
$ npm install
$ node index.js
```

On Safari 18.0, the screenshot is saved; however, on Safari 18.2, safaridriver will timeout at the `browser.url` step.

```sh
$ safaridriver --version
Included with Safari 18.2 (20620.1.16.11.8)

$ node index.js
2025-01-09T04:50:06.518Z INFO webdriver: Initiate new session using the WebDriver protocol
2025-01-09T04:50:07.603Z INFO @wdio/utils: Started SafariDriver in 1011ms on port 62507
2025-01-09T04:50:07.606Z INFO webdriver: [POST] http://localhost:62507/session
2025-01-09T04:50:07.607Z INFO webdriver: DATA {
  capabilities: { alwaysMatch: { browserName: 'safari' }, firstMatch: [ {} ] }
}
2025-01-09T04:50:08.173Z INFO webdriver: COMMAND navigateTo("https://test.salesforce.com/")
2025-01-09T04:50:08.174Z INFO webdriver: [POST] http://localhost:62507/session/EC90A59F-E53D-4B5C-A58F-5B733BCD3C28/url
2025-01-09T04:50:08.174Z INFO webdriver: DATA { url: 'https://test.salesforce.com/' }
WebDriverRequestError: WebDriverError: The operation was aborted due to timeout when running "http://localhost:62507/session/EC90A59F-E53D-4B5C-A58F-5B733BCD3C28/url" with method "POST" and args "{"url":"https://test.salesforce.com/"}"
```

(thanks for sharing the error log from @ykhs)
