var baseFeatureDelegate = (function() {

	return{

        BaseFeatureDelegate: function(holder) {

            this.barContainer = undefined;
            this._holder = holder;
        }

    };

})();

(function() {

    baseFeatureDelegate.BaseFeatureDelegate.prototype.ensureOverride = function(){

        this.getAvailableFeatures();
        this.getAssets();

    };
	baseFeatureDelegate.BaseFeatureDelegate.prototype.getAvailableFeatures = function(){
      
        throw new Error("No override found for function getAvailableFeatures");
    };

    baseFeatureDelegate.BaseFeatureDelegate.prototype.getAssets = function(){
      
        throw new Error("No override found for function getAssets");
    };



})();

