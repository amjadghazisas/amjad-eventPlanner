var regularFeatureDelegate = (function() {

	return{

        RegularFeatureDelegate: function(holder) {

            this.uber.ensureOverride.call(this);

            this.barContainer = undefined;
            this._holder = holder;
        }

    };

})();

(function() {

    //Inherit from base
    regularFeatureDelegate.RegularFeatureDelegate.prototype = new baseFeatureDelegate.BaseFeatureDelegate();
    regularFeatureDelegate.RegularFeatureDelegate.prototype.uber =  regularFeatureDelegate.RegularFeatureDelegate.prototype;

	regularFeatureDelegate.RegularFeatureDelegate.prototype.getAvailableFeatures = function(){
      
        return {data:[

            {icon:"fa fa-plus",type:"newEvent"}
        ]};
    };

    regularFeatureDelegate.RegularFeatureDelegate.prototype.getAssets = function(){
      
        
    };



})();

