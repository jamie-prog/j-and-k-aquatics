// Override Settings
var boostPFSInstantSearchConfig = {
	search: {
		//suggestionMode: 'test',
		//suggestionPosition: 'left'
      suggestionMobileStyle: 'style2',
	}
};

(function() {
	BoostPFS.inject(this);

	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function() {
		var suggestionElement = this.$uiMenuElement;
		var searchElement = this.$element;
		var searchBoxId = this.id;
	};
  
    InstantSearchResultItemProduct.prototype.compileSuggestionProductPrice = function() {
      if(boostPFSAppConfig.general.customerIsLoggedIn){
        // If the multi-currency feature is enabled, update the product price
        this.prepareSuggestionProductPriceData();
        // Check on sale
        var onSale = this.data.compare_at_price_min > this.data.price_min;
        // Format price
        var price = Utils.formatMoney(this.data.price_min);
        var compareAtPrice = '';
        if (this.data && this.data.compare_at_price_min) {
          compareAtPrice = Utils.formatMoney(this.data.compare_at_price_min);
          if (Settings.getSettingValue('search.removePriceDecimal')) {
            price = Utils.removeDecimal(price);
            compareAtPrice = Utils.removeDecimal(compareAtPrice);
          }
        }

        // Build Price
        var result = '';
        if (Settings.getSettingValue('search.showSuggestionProductPrice')) {
          if (onSale && Settings.getSettingValue('search.showSuggestionProductSalePrice')) {
            result = this.getTemplate(InstantSearchResultItemProduct.tempType.PRICE_SALE);
          } else {
            result = this.getTemplate(InstantSearchResultItemProduct.tempType.PRICE);
          }
        }
        return result
        .replace(/{{regularPrice}}/g, price)
        .replace(/{{compareAtPrice}}/g, compareAtPrice);
      }else{
        return ''
      }
    }
})();