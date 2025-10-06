class LoginPage {

  constructor(page) {
    this.page = page;
    this.Loginbutton = page.locator("(//button[@class='btn secondary-btn cancel-btn-size btn-secondary'])[2]");
    this.usernameField = page.locator("//input[@name='phone']");
    this.passwordField = page.locator("//input[@name='password']"); ''
    // this.button=page.locator("//div[@class='login-button-box']/button");
    this.switchrole = page.locator("//i[@class='v-icon notranslate mdi-24px mdi mdi-account-switch theme--light']");
    this.user = page.locator("//a[text()='Frontdesk']");


  }
  async navigateURL(url) {
    await this.page.goto(url);
    await this.Loginbutton.click();
  }

  async credentials(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.page.waitForTimeout(2000); // Wait for 2 seconds
    await this.page.click("//div[@class='login-button-box']/button");

    //to switch role
    await this.switchrole.click();
    await this.user.click();

  }
}
module.exports = { LoginPage };