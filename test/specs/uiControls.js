describe('uiControls test suites',async()=>
    {
        it('uiControls test_cases',async()=>
        {
    
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await expect(browser).toHaveTitle(expect.stringContaining('Rahul Shetty Academy'))
        await browser.pause(4000)
        await $("#username").setValue("Ashwata")
        await $("//input[@name='password']").setValue("lokesh")

        const radioButtons= await $$(".radiotextsty")
        const userDropDown = radioButtons[1].click()
        await browser.pause(4000)
        const modal=await $(".modal-body")
        await modal.waitForDisplayed()
        await $("#cancelBtn").click()
       // console.log(await $$(".customradio")[0].$("span").isSelected())
       //await modal.waitForDisplayed()
       /* await $("#okayBtn").click()
        await $$(".customradio")[0].$("span").click()
        await expect(modal).not.toBeDisplayed()
        */
        const drodown = $("select.form-control")
        await drodown.selectByAttribute('value','teach')
        await drodown.selectByVisibleText("consultant")
        await drodown.selectByIndex(0)
        console.log(await drodown.getValue())
        
        //Make sure when you selet the admin pop-up should not be displayed 
        //await $("#signInBtn").click()
       // await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value')==='Sign In',{timeout:5000,timeoutMsg:'not valid message'}) 
        //console.log(await $(".alert-danger").getText())
        })
    
    
    
    
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    )