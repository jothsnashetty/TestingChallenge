'use strict';

class WebPage {

	constructor() {
        console.log('on the home page');
        browser.pause(500);
    }

	get brandLogo() { return $('.Header-brandLogo'); }
	get topList() { return $('img[alt=Tops]'); }	
	get burgerMenuBtn() { return $('.BurgerButton'); }
	
	goToHomePage () {
		browser.url('/')
	}
	
	isLogoDisplayed() {
		if (this.brandLogo.isVisible()) {
			console.log('logo displayed');
			return true;
		} else {
			console.log('logo not displayed');
			return false;
		}
	}

	isProductListTopsDisplayed () {
		
		if (this.topList.isVisible()) {
			console.log('Tops List displayed');
			return true;
		} else {
			console.log('Tops List not displayed');
			return false;
		}
	}
	  
	 clickTopsList() {
		 this.topList.click();
	 }
	
}
module.exports = new WebPage();
