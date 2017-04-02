var WebPage = require('../../pageObjects/WebPage');
var Filters = require('../../pageObjects/Filters');
var expect = require('chai').expect

  
module.exports = function () {
	this.When(/^I am on the landing page$/, function () {
		WebPage.goToHomePage()
		console.log('I am on the landing page')
	})
	
	this.Then(/^I can see logo in navigation bar$/, function () {
		expect(WebPage.isLogoDisplayed()).to.be.true;
		console.log('I can see logo in navigation bar')
	})	
	
	this.Given(/^I am viewing product list tops$/, function () {
		WebPage.goToHomePage()
		expect(WebPage.isLogoDisplayed()).to.be.true
		expect(WebPage.isProductListTopsDisplayed()).to.be.true
		WebPage.clickTopsList()	
		
		console.log('I am viewing product list tops')
	})
	
	this.Given(/^I filter the product list$/, function () {
		Filters.clickFilterBtn()
		console.log('Clciked Tops Button')
	})	
	
    this.Given(/^I filter by option "Colour"$/, function() {
    	Filters.selectFilterOption('Colour')
    	console.log('Clciked Tops Button')
    })
    
    this.Given(/^I select colour 'Black'$/, function() {
    	Filters.selectFilterOption('black')
    	console.log('I select colour "Black"')
    })

    this.When(/^I apply these filters$/, function() {
    	Filters.applyFilter()
    	console.log('I apply these filters')
    })

    this.Then(/^Filter button has 1 filter$/, function() {
    	expect(Filters.isFilterHasOneItem()).to.be.equal(1)
    })
    
    this.Then(/^Filter returns a product list$/, function() {
		expect(Filters.isProductListDisplayed()).to.be.true
		console.log('Filter returns a product list')
    })
    
    this.Given(/^I select colour 'White'$/, function() {    	
    	Filters.scrollList()
    	Filters.selectFilterOption('white')
    	console.log('I select colour "White"')
    })
    this.Given(/^I clear all filters$/, function() {
    	Filters.clearFilter()
    })

    this.Then(/^Filter button has no filters$/, function() {
    	expect(Filters.isFilterHasOneItem()).to.be.equal(0)
    })    
}