var premiumFeatureDelegate = (function() {

	return{

        PremiumFeatureDelegate: function(holder) {

            this.uber.ensureOverride.call(this);

            this.barContainer = undefined;
            this._holder = holder;
        }

    };

})();

(function() {

    premiumFeatureDelegate.PremiumFeatureDelegate.prototype = new baseFeatureDelegate.BaseFeatureDelegate();
    premiumFeatureDelegate.PremiumFeatureDelegate.prototype.uber = premiumFeatureDelegate.PremiumFeatureDelegate.prototype;

	premiumFeatureDelegate.PremiumFeatureDelegate.prototype.getAvailableFeatures = function(){
      
        return {data:[

            {icon:"fa fa-plus",type:"newEvent"},
            {icon:"fa fa-search",type:"search"},
            {icon:"fa fa-envelope",type:"envelope"},
            {icon:"fa fa-globe",type:"globe"},
            {icon:"fa fa-trash",type:"trash"}
        ]};
    };

    premiumFeatureDelegate.PremiumFeatureDelegate.prototype.getAssets = function(){
      
        
    };

    


})();

