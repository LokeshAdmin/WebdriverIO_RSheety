describe('Ecommerece Application',async()=>
{
    it('LoginFailPage',async()=>
    {

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    //webdriverio code
    // console.log(await browser.getTitle())
    // await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await expect(browser).toHaveTitle(expect.stringContaining('Rahul Shetty Academy'))
    await browser.pause(4000)
    await $("#username").setValue("Ashwata")
    await $("//input[@name='password']").setValue("lokesh")
    await $("#signInBtn").click()
     //await browser.pause(4000)
    await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value')==='Sign In',{timeout:5000,timeoutMsg:'not valid message'}) 
    console.log(await $(".alert-danger").getText())

    })











































}


)