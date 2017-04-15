"use strict"


class HomePage {


    gotoPage() {

        browser.url('/')

    }

    hasLogo() {
         
        return browser.isExisting(".BrandLogo-img")
    }


}


module.exports = new HomePage()