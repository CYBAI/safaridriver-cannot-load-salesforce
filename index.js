const { remote } = require("webdriverio");

let browser;

async function main() {
  browser = await remote({
    capabilities: {
      browserName: "safari"
    },
  });

  await browser.url("https://test.salesforce.com/");

  const username = await browser.$("input[name='username']");
  await username.addValue("developer@example.com");

  await browser.saveScreenshot("1.png");
}

main().then(
  async () => {
    console.log("Done")
    process.exit(0);
  },
  async (error) => {
    console.error(error);
    process.exit(1);
  }
);

