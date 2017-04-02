'use strict'
var q = require('q')


class Filters {

	constructor() {
		console.log('on the filter page');
		browser.pause(500);
	}

	get filterBtn() { return $('.Filters-refineButton') }
	get clearFilterBtn() { return $('.Refinements-clearButton') }	
	get applyFilterBtn() { return $('button=Apply') }
	get numberofFilters() {return $('.Filters-refineButton').getText('span') }
	get productList() {return $('.PlpContainer-productListContainer') }
	get colourSelected() { return $('button[aria-pressed="true"]') }
	
	
	isFilterHasOneItem () {
		console.log('Number of filters :'+ Number(this.numberofFilters.replace("(","").replace(")","")));

		return Number(this.numberofFilters.replace("(","").replace(")",""))
	}
    isProductListDisplayed () {

    	if (this.productList.isVisible()) {
			return true;
		} else {
			return false;
		}
	}

	clickFilterBtn() {
		this.filterBtn.waitForVisible(5000);
		this.filterBtn.click()
	}

	selectFilterOption(filterOption) {
		
		var colourSpans = $$('span*='+filterOption);
		var secondEle = false
		var clicks = [];
		
		colourSpans.forEach(function (colourSpan) {
			if(secondEle) {
	            clicks.push(browser.elementIdClick(colourSpan.ELEMENT));			        
			} 			
			secondEle = true
	    });	
		
		q.all(clicks);
	}
	
	scrollList () {
		browser.scroll('.ValueOption', 50)
		console.log("Scrolling the list... ")
	}
	
	applyFilter() {
		
		this.applyFilterBtn.click()
	}
	
	clearFilter() {
		//browser.pause(10000)
		this.clearFilterBtn.click()
	}
}

module.exports = new Filters()