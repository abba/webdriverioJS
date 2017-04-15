var categoryPageObject = require('../../pageObjects/categoryPageObject');
var expect = require('chai').expect;


module.exports = function () {

    this.When(/^User is on category page Tops$/, function () {

        expect(categoryPageObject.gotoCategory()).to.contain('Tops')

    })

    this.When(/^User filters products list by colour "([^"]*)"$/, function (colour) {

        categoryPageObject.selectColour(colour)

    })

    this.When(/^User Select Colour Filters$/, function () {

        categoryPageObject.selectColourFiltersList()


    })

    this.When(/^Apply these filters$/, function () {

        categoryPageObject.applyFilter()

    })

    this.When(/^User clear all filters$/, function () {

        categoryPageObject.clearFilters()

    })

    this.When(/^Number of applied filters should be "([^"]*)"$/, function (numberOfFilters) {

        expect(categoryPageObject.getNumbeOfAppliedFilters()).to.contain(numberOfFilters)

    })

    this.When(/^Filtered product list should be returned$/, function () {

        expect(categoryPageObject.productListFiltered()).to.eql(true)
    })

    this.When(/^No filters should be applied$/, function () {

        expect(categoryPageObject.getNumbeOfAppliedFilters()).to.be.empty
    })

    this.When(/^Non-filtered product list should be returned$/, function () {

        expect(categoryPageObject.productListFiltered()).to.eql(false)
    })



}


