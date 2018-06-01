var iconBar = (function() {

	return{

        IconBar: function(holder) {

            this.barContainer = undefined;
            this._holder = holder;
        }

    };

})();

(function() {
    
    iconBar.IconBar.prototype.setDelegate = function(value){

       this._delegate = value;
    };

    iconBar.IconBar.prototype.getDelegate = function(value){
         
        return this._delegate;

    };

	iconBar.IconBar.prototype.renderIconBar = function(){

        var that = this;
        var data = this._delegate.getAvailableFeatures().data;
        this.barContainer = document.createElement("div");
        this.barContainer.setAttribute('class',"barContainer");

        for(var i=0;i<data.length;i++){

            var anchorItem = document.createElement("a");
            var iconItem = document.createElement("i");
            iconItem.setAttribute("class",data[i].icon);

            anchorItem.appendChild(iconItem);

            this.barContainer.appendChild(anchorItem);

            if(data[i].type === "newEvent"){

                anchorItem.addEventListener("click",function(){

                    that.fireNewEventHandler();
                });
            }
          
        }

        document.getElementById(this._holder).appendChild(this.barContainer);
    };

    iconBar.IconBar.prototype.fireNewEventHandler = function(fn){

        if(this._newEventHandler){

            this._newEventHandler();
        }

    };

    iconBar.IconBar.prototype.newEventHandler = function(fn){
     
        this._newEventHandler = fn;

    };

    iconBar.IconBar.prototype.show = function(fn){
         
        this.barContainer.classList.remove("hide");

    };

    iconBar.IconBar.prototype.hide = function(fn){

        this.barContainer.classList.add("hide");
    };

    

})();

