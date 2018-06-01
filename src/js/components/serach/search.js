var search = (function() {

	return{

        Search: function() {

            this._data = undefined;
            this.container = undefined;
            this.search = undefined;
            this._placeHolder = "Search";
        }

    };

})();

(function() {

	search.Search.prototype.setData = function(data){

        if(data !== undefined){

            this._data = data;
        }
    };

      

    search.Search.prototype.getData = function(){

        return  this._data;
    }

    search.Search.prototype.hide = function(value){

      if(this.search){

        value?this.search.classList.add("hide"):this.search.classList.remove("hide");
      }
    }

    search.Search.prototype.setPlaceHolder = function(value){

        this._placeHolder = value;

        if(this.search){
              
            this.search.setAttribute("placeholder",this.getPlaceHolder());

        }
       

    };

    search.Search.prototype.reset = function(){

        if(this.search){

            this.search.value = "";
        }

    };

    

    search.Search.prototype.getPlaceHolder = function(value){

        return this._placeHolder;

    };

    search.Search.prototype.renderSearch = function(id){

        var that = this;
        
        this.container = document.createElement("div");
        this.search = document.createElement("input");
        this.search.setAttribute("class","search");
        this.search.setAttribute("placeholder",this.getPlaceHolder());
        this.search.setAttribute("id",id);
        this.search.addEventListener("keyup",function(event){

            //console.log(event.target.value);
            that.searchHandler(event.target.value);
        });

        this.container.appendChild(this.search);

    }

    search.Search.prototype.searchHandler = function(str){

        var filter, val;
        var filteredData = [];
        filter = str.toUpperCase();

        if(!str.length){

            this.searchFn(this.getData().data);
        }

        for (i = 0; i < this.getData().data.length; i++) {
            
            val = this.getData().data[i].name + this.getData().data[i].desc;

            if (val) {
                if (val.toUpperCase().indexOf(filter) > -1) {
                    filteredData.push(this.getData().data[i]);
                }
            } 
        }

        if(filteredData.length){
               
            this.searchFn(filteredData);
        }else{

            this.searchFn([]);
        }
        
        
        //return filteredData;
    };

    search.Search.prototype.addSearchListener = function(searchFn){

       this.searchFn = searchFn;
    };

    search.Search.prototype.getSearchElement = function(id){
     
        if(!this.search){

            this.renderSearch(id);
        }
        return this.search;
    };
    
    

    

})();

