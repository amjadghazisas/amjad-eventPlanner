var landingPage = (function() {

	return{

            LandingPage: function() {

                this.eventList = undefined;
                this.eventCategories = undefined;
			
            }
            
    };

})();

(function() {

    landingPage.LandingPage.prototype.destroy = function(){

        this.eventList.destroy();
        this.eventCategories.destroy();

        this.eventList = null;
        this.eventCategories = null;
    };

	landingPage.LandingPage.prototype.createPage = function(holder){

            this.eventCategories = new searchableList.SearchableList(holder);
            var selectedCategory;
            var that = this;
            
            this.eventCategories.setData(dataService.getCategories());
            this.eventCategories.setHideSearch(true);
            this.eventCategories.setSelectedIndex(dataService.getCategories().selectedIndex);
            this.eventCategories.setTitle("Event Groups :");
            

            this.eventCategories.onItemSelection(function(){
                selectedCategory = that.eventCategories.getSelectedItem().key;
                that.eventList.setData({uid:dataService.getEventList().uid,data:dataService.getEventList()[selectedCategory]});
            });

            this.eventList = new searchableList.SearchableList(holder);
            this.eventList.setData({uid:dataService.getEventList().uid,data:dataService.getEventList()[dataService.getCategories().selectedKey]});
            this.eventList.setTitle("Event List :");
            this.eventList.setPlaceHolderForSearch("Search To Group By Event, Name Or Date");
    }

    landingPage.LandingPage.prototype.eventClickhandler = function(fn){

       if(this.eventList){

         this.eventList.setItemClickHandler(fn);
       }

    };

    landingPage.LandingPage.prototype.hide = function(){

        //Typically would remove from DOM, but for POC just hiding - shortge of time
        this.eventList.hide();
        this.eventCategories.hide();
    };

    landingPage.LandingPage.prototype.show = function(){

        //Typically would remove from DOM, but for POC just hiding - shortge of time
        this.eventList.show();
        this.eventCategories.show();
    };

    landingPage.LandingPage.prototype.setDefaultGroupView = function(index){

        this.eventCategories.resetSelection(index);
        this.eventCategories.setSelection();


    };


    

})();

