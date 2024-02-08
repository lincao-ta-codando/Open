const puppeteer = require('puppeteer');

(async function() {
    const browser = await puppeteer.launch({headless: false}); // Open the browser with a graphical interface
    const page = await browser.newPage();

    await page.setViewport({width: 1280, height: 800}); // Set the browser window size
    await page.goto('https://posvenda.telecontrol.com.br/assist/externos/login_posvenda_new.php');//vai pra página de login
    await page.waitForTimeout(100);//espera 0,1s

    async function autofill(input, fill) {
        await page.evaluate((input, fill) => {
        document.querySelector('input[name="'+input+'"]').value = fill;
        }, input, fill);
    }

    await autofill('login', "18396668000165");
    await autofill('senha', "360152ed29");
    await page.click('button[type="submit"]');

    await page.waitForTimeout(2000);//espera 2s
    await page.goto('https://posvenda.telecontrol.com.br/assist/os_revenda.php');
    await page.select('select[name="qtde_linhas"]', '40');
    await page.waitForTimeout(1000);
    //colar código da planilhas
    await autofill('produto_serie_0', 'FW00579405649152023');
    await autofill('produto_serie_1', 'FW00579402596152023');
    await autofill('produto_serie_2', 'FW00579406068152023');
    await autofill('produto_serie_3', 'FW00579404644152023');
    await autofill('produto_serie_4', 'FW00579403827152023');
    await autofill('produto_serie_5', 'fw005422003311422022')
    await autofill('produto_serie_6', 'FW00419400202212023');
    await autofill('produto_serie_7', 'FW00419403402212023');
    await autofill('produto_serie_8', 'FW00419401885302023');
    await autofill('produto_serie_9', 'FW00419400669302023');
    await autofill('produto_serie_10', 'FW00419400404302023');
    await autofill('produto_serie_11', 'FW00419400489302023');
    await autofill('produto_serie_12', 'FW00419402370302023');
    await autofill('produto_serie_13', 'FW00419402466172023');
    await autofill('produto_serie_14', 'FW00419500888292022');
    await autofill('produto_serie_15', 'FW00419501502342023');
    await autofill('produto_serie_16', 'FW00743000949302023');
    await autofill('produto_serie_17', 'FW00743100025262023');
    await autofill('produto_serie_18', 'FW005705A01566332023');
    await autofill('produto_serie_19', 'FW005705A01123332023');
    await autofill('produto_serie_20', 'FW005705A03475332023');
    await autofill('produto_serie_21', 'FW005705A01114332023');
    await autofill('produto_serie_22', 'FW005705A01994332023');
    await autofill('produto_serie_23', 'FW005705A01666332023');
    await autofill('produto_serie_24', 'FW005705A01033332023');
    await autofill('produto_serie_25', 'FW005705A01506332023');
    await autofill('produto_serie_26', 'FW005705A02041332023');
    await autofill('produto_serie_27', 'FW005705A01746332023');
    await autofill('produto_serie_28', 'FW005706A02341332023');
    await autofill('produto_serie_29', 'FW005706A02287332023');
    await autofill('produto_referencia_0', 'FW005794');
    await autofill('produto_referencia_1', 'FW005794');
    await autofill('produto_referencia_2', 'FW005794');
    await autofill('produto_referencia_3', 'FW005794');
    await autofill('produto_referencia_4', 'FW005794');
    await autofill('produto_referencia_5', 'fw005422');
    await autofill('produto_referencia_6', 'FW004194');
    await autofill('produto_referencia_7', 'FW004194');
    await autofill('produto_referencia_8', 'FW004194');
    await autofill('produto_referencia_9', 'FW004194');
    await autofill('produto_referencia_10', 'FW004194');
    await autofill('produto_referencia_11', 'FW004194');
    await autofill('produto_referencia_12', 'FW004194');
    await autofill('produto_referencia_13', 'FW004194');
    await autofill('produto_referencia_14', 'FW004195');
    await autofill('produto_referencia_15', 'FW004195');
    await autofill('produto_referencia_16', 'FW007430');
    await autofill('produto_referencia_17', 'FW007431');
    await autofill('produto_referencia_18', 'FW005705');
    await autofill('produto_referencia_19', 'FW005705');
    await autofill('produto_referencia_20', 'FW005705');
    await autofill('produto_referencia_21', 'FW005705');
    await autofill('produto_referencia_22', 'FW005705');
    await autofill('produto_referencia_23', 'FW005705');
    await autofill('produto_referencia_24', 'FW005705');
    await autofill('produto_referencia_25', 'FW005705');
    await autofill('produto_referencia_26', 'FW005705');
    await autofill('produto_referencia_27', 'FW005705');
    await autofill('produto_referencia_28', 'FW005706');
    await autofill('produto_referencia_29', 'FW005706');
    

    
})();
