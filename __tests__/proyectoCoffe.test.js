const puppeteer = require('puppeteer');

describe('Comprar un café', () => {
    let browser
    let page
    beforeAll(async () =>{
        browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          slowMo: 0,
        })
        page = await browser.newPage()
    })
    afterAll(async () =>{
        await browser.close();
    })

	it('Realizar una compra en la página Coffe-cart.app', async () => {
		await page.goto('https://coffee-cart.app/', {waitUntil:  'networkidle0'})
        await page.click('#app > div:nth-child(3) > ul > li:nth-child(1) > div', { button: 'right', delay: 700 })   
        //#app > dialog > form > button:nth-child(1)
        const buttonYes =  await page.waitForSelector('#app > dialog > form > button:nth-child(1)', { visible: true })
        await page.waitForTimeout(2000)
        await buttonYes.click('',{delay: 700})        
        await page.click('#app > div:nth-child(3) > ul > li:nth-child(4) > div > div > div.cup-body')
        await page.waitForTimeout(2000)
        await page.click('#app > div:nth-child(3) > div.pay-container > button')
        
        const [name] = await page.$x('//*[@id="name"]');
        if (name) {
        await name.click();        
        }
        await page.type('#name', 'Javier', { delay: 200 })

        const [correo] = await page.$x('//*[@id="email"]');
        if (correo) {
        await correo.click();     
        }
        await page.type('#email', 'Javier@yopmail.com', { delay: 200 })

        await page.click('#promotion')
        await page.click('#submit-payment')
        await page.waitForTimeout(3000)
        const compraExitosa =  await page.waitForSelector('#app > div.snackbar.success', { visible: true })
        const textoExitoso= await page.$eval('#app > div.snackbar.success', (button)=>button.textContent)
        console.log('Muestra texto de compra exitosa: ', textoExitoso)
        
        
	}, 30000);
});