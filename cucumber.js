// Require: sudo apt install -y libatk-bridge2.0-0 libxss1 libnss3  libcups2  libxkbcommon-dev libxdamage-dev libgbm-dev libpango-1.0-0 libcairo2 libasound2-dev
// see. https://github.com/cucumber/cucumber-js/blob/HEAD/docs/configuration.md

module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['support/**/*.js', 'steps/**/*.js'],
    format: ['summary', 'json:report/report.json', 'html:report/report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    publish: false
  }
}
