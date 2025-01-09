# A reproduce test case for demoing loading timeout at Salesforce web app for Safaridriver

## How to run

```sh
$ npm install
$ node index.js
```

With Safari 18.0 on macOS 13.7, the screenshot is saved.

<details>
  <summary>Logs for running the test on Safari 18.0</summary>

```sh
$ safaridriver --version
Included with Safari 18.0 (18619.1.26.111.10)

$ node index.js
2025-01-09T05:53:45.504Z INFO webdriver: Initiate new session using the WebDriver protocol
2025-01-09T05:53:50.147Z INFO @wdio/utils: Started SafariDriver in 1032ms on port 65174
2025-01-09T05:53:50.163Z INFO webdriver: [POST] http://localhost:65174/session
2025-01-09T05:53:50.163Z INFO webdriver: DATA {
  capabilities: { alwaysMatch: { browserName: 'safari' }, firstMatch: [ {} ] }
}
2025-01-09T05:53:50.842Z INFO webdriver: COMMAND navigateTo("https://test.salesforce.com/")
2025-01-09T05:53:50.843Z INFO webdriver: [POST] http://localhost:65174/session/FDD4B8EE-6103-474D-B78E-323309EC3EBE/url
2025-01-09T05:53:50.843Z INFO webdriver: DATA { url: 'https://test.salesforce.com/' }
2025-01-09T05:55:06.215Z INFO webdriver: RESULT null
2025-01-09T05:55:06.217Z INFO webdriver: COMMAND findElement("css selector", "input[name='username']")
2025-01-09T05:55:06.218Z INFO webdriver: [POST] http://localhost:65174/session/FDD4B8EE-6103-474D-B78E-323309EC3EBE/element
2025-01-09T05:55:06.218Z INFO webdriver: DATA { using: 'css selector', value: "input[name='username']" }
2025-01-09T05:55:06.230Z INFO webdriver: RESULT {
  'element-6066-11e4-a52e-4f735466cecf': 'node-1F1767DC-752A-455D-8BA2-78CFE2C38A6A'
}
2025-01-09T05:55:06.238Z INFO webdriver: COMMAND elementSendKeys("node-1F1767DC-752A-455D-8BA2-78CFE2C38A6A", "developer@example.com")
2025-01-09T05:55:06.239Z INFO webdriver: [POST] http://localhost:65174/session/FDD4B8EE-6103-474D-B78E-323309EC3EBE/element/node-1F1767DC-752A-455D-8BA2-78CFE2C38A6A/value
2025-01-09T05:55:06.239Z INFO webdriver: DATA { text: 'developer@example.com' }
2025-01-09T05:55:06.636Z INFO webdriver: RESULT null
2025-01-09T05:55:06.638Z INFO webdriver: COMMAND takeScreenshot()
2025-01-09T05:55:06.638Z INFO webdriver: [GET] http://localhost:65174/session/FDD4B8EE-6103-474D-B78E-323309EC3EBE/screenshot
2025-01-09T05:55:06.662Z INFO webdriver: RESULT iVBORw0KGgoAAAANSUhEUgAAAyAAAAIkCAYAAADmlk/KAAABXWlDQ1BJQ0MgU...
Done
```
  
</details>

However, with Safari 18.2 on macOS 15.2, safaridriver will timeout at the `browser.url` step.

<details>
  <summary>Logs for running the test on Safari 18.2</summary>

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

</details>

(thanks for @ykhs sharing the script and testing on Safari 18.2)
