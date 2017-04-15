"use strict";


let allFilters = "button.Filters-refineButton"
let colourFilter = ".is-shown > div.RefinementList article:first-child"
let applyFilter = "button.Refinements-applyButton"
let clearAllFilters = "button.Refinements-clearButton"
let numberOfFilters = "button.Filters-refineButton span"
let colour = "//div[contains(@class,'shown')]//span"

class CategoryPageObject {



    gotoCategory() {

        browser.
            url("https://m.topshop.com/en/tsuk/category/clothing-427/tops-443")

        return browser.getTitle()
    }

    selectColourFiltersList(colour) {

        browser.moveToObject(allFilters, 0, 500);
        browser.click(allFilters)
        browser.click(colourFilter)

    }

    selectColour(aColour) {

        aColour = aColour.toLowerCase()
        browser.waitForExist(colour + "[.='" + aColour + "']")
        browser.moveToObject(colour + "[.='" + aColour + "']", 0, 500)
        browser.click(colour + "[.='" + aColour + "']")

    }

    applyFilter() {

        browser.click(applyFilter)
    }

    clearFilters() {

        browser.click(clearAllFilters)


    }

    getNumbeOfAppliedFilters() {

        return browser.getText(numberOfFilters)
    }

    productListFiltered() {
        browser.waitForExist(".ProductList")
        return browser.isExisting(".is-filtered")
    }


}
module.exports = new CategoryPageObject();