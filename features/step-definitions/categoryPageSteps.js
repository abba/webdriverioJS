var categoryPage = require('../../pageObjects/categoryPage');
var expect = require('chai').expect;


module.exports = function () {

    this.When(/^User is on category page Tops$/, function () {

        expect(categoryPage.gotoCategory()).to.contain('Tops')

    })

    this.When(/^User filters products list by colour "([^"]*)"$/, function (colour) {

        categoryPage.selectColour(colour)

    })

    this.When(/^User Select Colour Filters$/, function () {

        categoryPage.selectColourFiltersList()


    })

    this.When(/^Apply these filters$/, function () {

        categoryPage.applyFilter()

    })

    this.When(/^User clear all filters$/, function () {

        categoryPage.clearFilters()

    })

    this.When(/^Number of applied filters should be "([^"]*)"$/, function (numberOfFilters) {

        expect(categoryPage.getNumbeOfAppliedFilters()).to.contain(numberOfFilters)

    })

    this.When(/^Filtered product list should be returned$/, function () {

        expect(categoryPage.productListFiltered()).to.eql(true)
    })

    this.When(/^No filters should be applied$/, function () {

        expect(categoryPage.getNumbeOfAppliedFilters()).to.be.empty
    })

    this.When(/^Non-filtered product list should be returned$/, function () {

        expect(categoryPage.productListFiltered()).to.eql(false)
    })



}


