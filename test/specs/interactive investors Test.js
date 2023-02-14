import LandingPage from '../pageobjects/landing.page.js'
import { expect } from 'chai'
import { tradingAccountUrl, 
    transferMyPensionUrl,
    searchShares, 
    QuickStartFunds, 
    EditorsPicks, 
    editorsPicksSubHeadingText} from '../../testdata/iitestdata.js'



describe('My interactive investors landing page test', () => {
    it('interactive investors Url and validation', async () => {
        await LandingPage.open()
        await browser.pause(2000)
        await LandingPage.navigateToTradingAccount()
        await expect(await browser.getUrl()).to.equal(tradingAccountUrl);

        await LandingPage.navigateToTransferMyPension()
        await expect(await LandingPage.howToTransferBtnIsDisplayed()).to.equal(true);
        await expect(await LandingPage.openASippIsDisplayed()).to.equal(true);
        await expect(await browser.getUrl()).to.equal(transferMyPensionUrl);
      
        await LandingPage.navigateToSearchShares()
        await expect (await LandingPage.openAnAccountIsDisplayed()).to.equal(true);
        await expect(await browser.getUrl()).to.equal(searchShares);
      
        await LandingPage.navigateTohelplearning()
        await expect(await LandingPage.QuickStartFundsisDisplayed()).to.equal(true);
        await expect(await browser.getUrl()).to.equal(QuickStartFunds);

        await LandingPage.navigateToNews()
        await expect (await LandingPage.EditorsPicksisDisplayed()).to.equal(true);
        await expect (await LandingPage.editorsPicksSubHeadingTextIsDisplayed()).to.equal(editorsPicksSubHeadingText);
       // await expect (await LandingPage.MostReadSubHeadingTextIsDisplayed()).to.equal("Top 10 most read articles today.");
        
       await expect (await browser.getUrl()).to.equal(EditorsPicks);
     } )
    
    })  



