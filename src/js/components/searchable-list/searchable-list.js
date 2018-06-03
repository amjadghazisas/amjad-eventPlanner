var searchableList = (function() {

	return{

            SearchableList: function(holder) {

                this._data = undefined;
                this.container = undefined;
                this.list = undefined;
                this.itemContainer = undefined;
                this._hideSearch = false;
                this.oSearch = undefined;
                this._selectedIndex = undefined;
                this._title = "Some Title";
                this._placeHolderForSearch = "Search";
                this._holder = holder;
                this.containerWrapper = undefined;
                
			
            }
            
    };

})();

(function() {

    searchableList.SearchableList.prototype.destroy = function(){

        this._data = null;
        this.container = null;
        this.list = null;
        this.itemContainer = null;
        this._hideSearch = null;
        this.oSearch = null;
        this._selectedIndex = null;
        this._title = null;
        this._placeHolderForSearch = null;
        this._holder = null;
        this.containerWrapper.parentNode.removeChild(this.containerWrapper);
        this.containerWrapper = null;

    };

    
    searchableList.SearchableList.prototype.setTitle = function(value){

        this._title = value;
        
        if(this.title){
            this.title.innerHTML = value;
        }

        
    };

    searchableList.SearchableList.prototype.setItemClickHandler = function(fn){

        this._itemClickHandler = fn;

    };

    searchableList.SearchableList.prototype.getItemClickHandler = function(){

        return this._itemClickHandler;

    };

    searchableList.SearchableList.prototype.getTitle = function(value){

        return this._title;
    };

	searchableList.SearchableList.prototype.setData = function(data){

        if(data !== undefined){

            this._data = data;
            this.renderContainer();
        }
    }

    searchableList.SearchableList.prototype.getData = function(){

        return  this._data;
    };

    searchableList.SearchableList.prototype.renderContainer = function(){
        var that = this;
        if(this.container){
            
            that.renderList();
            this.oSearch.reset();
            this.oSearch.setData(this.getData());
            return;
        }
        
        this.container = null;
        this.list = null;
        this.itemContainer = null;
        //document.getElementById("app").innerHTML = "";

        this.container = document.createElement("div");
        this.container.setAttribute("class","container");
        this.container.setAttribute("id","container-"+this.getData().uid);

        this.titleDiv = document.createElement("div");
        this.titleDiv.setAttribute("class","titleDiv");
        this.titleDiv.setAttribute("id","titleDiv-"+this.getData().uid);

        this.title = document.createElement("h3");
        this.title.setAttribute("class","title");
        this.title.setAttribute("id","title-"+this.getData().uid);

        var titleContent = document.createTextNode(this.getTitle());
        this.title.appendChild(titleContent);

        this.titleDiv.appendChild(this.title);

        this.containerWrapper = document.createElement("div");
        this.containerWrapper.setAttribute("class","containerWrapper");
        this.containerWrapper.setAttribute("id","containerWrapper-"+this.getData().uid);
        this.containerWrapper.appendChild(this.titleDiv);
        this.containerWrapper.appendChild(this.container);
       
        this._holder.appendChild(this.containerWrapper);
        


        this.oSearch = new search.Search();

        this.oSearch.setData(this.getData());
        this.oSearch.setPlaceHolder(this.getPlaceHolderForSearch());

        this.oSearch.addSearchListener(function(data){
            that.renderList({data:data});
        });
   
        this._oSearch = this.oSearch.getSearchElement(this.getData().uid);
        this.container.appendChild(this._oSearch);

        this.oSearch.hide(this.getHideSearch());

        that.renderList();

        

    };

    searchableList.SearchableList.prototype.setPlaceHolderForSearch = function(value){

        this._placeHolderForSearch = value;

        if(this.oSearch){
         
            this.oSearch.setPlaceHolder(this._placeHolderForSearch);
        }
        
    };

    searchableList.SearchableList.prototype.getPlaceHolderForSearch = function(){

        return this._placeHolderForSearch;
    };

    searchableList.SearchableList.prototype.renderList = function(searchData){
        
        var that = this;
        var data = searchData?searchData.data:this.getData().data;
        
        if(!data){

            data = [];
        }

       this.list?this.list.innerHTML="":this.list;
       this.itemContainer?this.itemContainer.innerHTML="":this.itemContainer;

        this.list = document.createElement("ul");
        this.list.setAttribute("class", "appList");
        this.list.setAttribute("id", "appList-"+this.getData().uid);
        

        for(var i=0;i<data.length;i++){

            var listItem = document.createElement("li");
            listItem.setAttribute("data-indexInModel", i);
            listItem.setAttribute("id", "listItem-"+this.getData().uid + i);

            this.itemContainer = document.createElement("div");
            this.itemContainer.setAttribute("id", "itemContainer-"+this.getData().uid);

            var anchor = document.createElement("a");
            anchor.setAttribute("id", "anchor-"+this.getData().uid);

            var itemContent = document.createTextNode(data[i].name);
            anchor.appendChild(itemContent);

            var br = document.createElement("br");

            var description = document.createElement("span");
            description.setAttribute("id", "description-"+this.getData().uid);

            var totalString = (dataService.getEventList()[data[i].key])?" ("+(dataService.getEventList()[data[i].key]).length+")":"";
            var descContent = document.createTextNode(data[i].desc + totalString);
            description.appendChild(descContent);
            

           
            this.itemContainer.appendChild(anchor);
            this.itemContainer.appendChild(br);
            this.itemContainer.appendChild(description);

            this.itemContainer.setAttribute("class", "itemContainer");

            listItem.appendChild(this.itemContainer);
            this.list.appendChild(listItem);
       
            listItem.addEventListener("click",function(event){
               
               that.resetSelection(event.currentTarget.getAttribute("data-indexInModel"));
            });

            
        }

        
        if(!this.listContainer){

            this.listContainer = document.createElement("div");
            this.listContainer.setAttribute("class","listContainer");
            this.listContainer.setAttribute("id", "listContainer-"+this.getData().uid);
            this.container.appendChild(this.listContainer);
        }

        this.listContainer.innerHTML = "";

        this.listContainer.appendChild(this.list);

        this.container.appendChild(this.listContainer);

        this._oSearch.focus();

        
     
    }

    searchableList.SearchableList.prototype.resetSelection = function(selectedItemIndex){

        for(var i=0;i<this.getData().data.length;i++){

            this.getData().data[i].selected = false;
            this.list.children[i].children[0].classList.remove("selected");
        }

        this.setSelectedIndex(selectedItemIndex);

       // this.setSelection();

    }

    searchableList.SearchableList.prototype.setSelection = function(){
       
        if(this.getData() && this.getData().data){
           
            this.getData().data[this.getSelectedIndex()].selected = true;
            this.list.children[this.getSelectedIndex()].children[0].classList.add("selected");

            this._selectedItem = this.getData().data[this.getSelectedIndex()];

            if(this._onItemSelection){
              this._onItemSelection();
            }

            if(this.getItemClickHandler()){

                this.getItemClickHandler()(this._selectedItem);
              }

        }
        
    };

    searchableList.SearchableList.prototype.getSelectedItem = function(){

        return this._selectedItem;
    }

    searchableList.SearchableList.prototype.setSelectedIndex = function(value){

        this._selectedIndex = value;

        this.setSelection(this._selectedIndex);
    }

    searchableList.SearchableList.prototype.getSelectedIndex = function(){

        return this._selectedIndex?this._selectedIndex:0;
    }

    searchableList.SearchableList.prototype.setHideSearch = function(value){

        this._hideSearch = value;
        this.oSearch.hide(this.getHideSearch());
    };

    searchableList.SearchableList.prototype.getHideSearch = function(){

        return this._hideSearch;
    };

    searchableList.SearchableList.prototype.onItemSelection = function(fn){

      this._onItemSelection = fn;
    }

    searchableList.SearchableList.prototype.hide = function(){

        this.containerWrapper.classList.add("hidden");
    }

    searchableList.SearchableList.prototype.show = function(){

        this.containerWrapper.classList.remove("hidden");
        //this.setSelection();
    }

    

})();

