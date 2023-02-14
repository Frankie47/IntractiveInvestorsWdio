

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get servicesBtn(){
        return $("//span[@title='Services']")
    }

    get pensionBtn(){
        return $("//span[@title='Pensions']")
    }

    get investmentBtn(){
        return $("//span[@title='Investments']")
    }

    get helplearningBtn(){
        return $("//span[@title='Help & learning']")
    } 
    

    get QuickStartFunds(){
        return $("=Quick-start Funds")
    }  

    get NewsBtn(){
        return $("//span[@title='News']")
    } 

    get EditorsPicks(){
        return $("div[data-id='rail-editors-picks'] p[class='chakra-text ii-ikkh6r']")
    }  

    get editorsPicksSubHeadingText(){
        return $("div[data-id='rail-editors-picks'] p[class='chakra-text ii-dnbt2x']")
    }

    get MostRead(){
        return $("div[data-id='rail-most-read'] p[class='chakra-text ii-ikkh6r']")
    }
       
    get tradingAccount(){
        return $("=Trading Account")
    }

    get transferMyPension(){
        return $("=Transfer my pension")
    }

    get searchShares(){
        return $("=Search shares")
    }

    get openAnAccountBtn(){
        return $("//span[@title='Open an account']")
    }


    get howToTransferBtn(){
        return $("//span[@title='How to transfer']")
    }

    get openASIPPBtn(){
        return $("//span[@title='Open a SIPP']")
    }


    get acceptCookiesBtn(){
        return $("button.chakra-button.ii-7kliwd")
    
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async navigateToTradingAccount(){
        await this.acceptCookiesBtn.click()
        await this.servicesBtn.click()
        await this.tradingAccount.click()
    }

    async navigateToTransferMyPension(){
        await this.pensionBtn.click()
        await this.transferMyPension.click()
    }

    async navigateToSearchShares(){
        await this.investmentBtn.click()
        await this.searchShares.click()
    }

    async navigateTohelplearning(){
        await this.helplearningBtn.click()
        await this.QuickStartFunds.click()
    }

    async QuickStartFundsisDisplayed(){
        await this.waitForElementFully(this.QuickStartFunds)
        return this.QuickStartFunds.isDisplayed() 
    }


    async navigateToNews(){
        await this.NewsBtn.click()
    }

    async EditorsPicksisDisplayed(){
        return this.EditorsPicks.isDisplayed()
    }

    async editorsPicksSubHeadingTextIsDisplayed(){
        return this.editorsPicksSubHeadingText.getText()
    }

    async MostReadSubHeadingTextIsDisplayed(){
        return this.MostReadSubHeadingText.isDisplayed()
    }

    async howToTransferBtnIsDisplayed(){
       await this.waitForElementFully(this.howToTransferBtn)
        return this.howToTransferBtn.isDisplayed()
    }

    async openASippIsDisplayed(){
        return this.openASIPPBtn.isDisplayed()
    }

    async openAnAccountIsDisplayed(){
        await this.waitForElementFully(this.openAnAccountBtn)
        return this.openAnAccountBtn.isDisplayed()
    }


    /** 
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LandingPage();
