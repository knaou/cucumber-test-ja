const { setDefaultTimeout, setWorldConstructor, World, After } = require('@cucumber/cucumber');
const { Page, Browser } = require('@playwright/test');
const pako = require('pako');

setDefaultTimeout(process.env.TIMEOUT ? process.env.TIMEOUT * 1000 : 5000)

class CustomWorld extends World {
    page = null
    browser = null

    constructor(options) {
      super(options);
    }
}
setWorldConstructor(CustomWorld)

After( async function(scenario) {
   if (scenario.result.status === 'FAILED') {
     const buffer = await this.page.screenshot({ fullPage: true });
     // ドキュメントと全然違う？更新が追いついてない
     await this.attach(buffer.toString('base64'), { mediaType: 'base64:image/png', fileName: 'error_screenshot.png' });

     const content = await this.page.content()
     const gz_base64_content = Buffer.from(pako.gzip(content, { to: 'string' })).toString('base64');
     await this.attach(gz_base64_content, { mediaType: 'base64:application/gzip', fileName: 'error_html_src.html.gz' });
   }
});

