import * as homepage from '../../pageObjects/homepage'

var chai =require('chai')

module.exports = function () {


   

    var assert = chai.assert;
    this.Given(/^I am on the landing page$/,
    
    homepage.gotoPage)
    
   // this.Then(/^I can see logo in navigation bar$/, assert.equal(1,1))


    this.Then(/^I can see logo in navigation bar$/,
    
    homepage.hasLogo)
}