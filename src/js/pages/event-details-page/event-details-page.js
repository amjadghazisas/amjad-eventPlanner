var eventDetailsPage = (function() {


    return {

         EventDetailsPage : function(holder) {

            this._data = undefined;
            this.pageContainer = undefined;
            this._holder = holder;            
        }

    } 

})();

(function() {

    eventDetailsPage.EventDetailsPage.prototype.destroy = function(){

        this._data = null;
        this._holder = null;
        this.pageContainer.parentNode.removeChild(this.pageContainer);
        this.pageContainer = null;

    };

    eventDetailsPage.EventDetailsPage.prototype.setData = function(data){

        if(data !== undefined){

            this._data = data;
            this.renderPage();
        }
    };

    eventDetailsPage.EventDetailsPage.prototype.getData = function(){

        return this._data;
    };   

    eventDetailsPage.EventDetailsPage.prototype.renderPage = function(data){
     
        var that = this;
        this.pageContainer = document.createElement("div");
        this.pageContainer.setAttribute("class","eventDetailsContainer");
        this.pageContainer.setAttribute("id","page-Container");

        this.pageContent = document.createElement("div");
        this.pageContent.setAttribute("class","pageContent");
        this.pageContent.setAttribute("id","page-Content");

        this.homeButton = document.createElement("button");
        this.homeButton.setAttribute("class","homeButton");
        this.homeButton.setAttribute("id","homeButton-link");
        this.homeButton.innerHTML = "Back To Events";
        this.homeButton.addEventListener("click",function(){

            that._backHandler();
        });

        

        this.title = document.createElement("h3");
        this.title.setAttribute("class","title");
        this.title.setAttribute("id","page-title");
        this.title.innerHTML = this.getData().name?this.getData().name:"" + ":";

        this.title2 = document.createElement("h4");
        this.title2.setAttribute("class","title");
        this.title2.setAttribute("id","page-title2");
        this.title2.innerHTML = "Organizer : "+this.getData().desc?this.getData().desc:"";

        this.title3 = document.createElement("h5");
        this.title3.setAttribute("class","title");
        this.title3.setAttribute("id","page-title3");
        this.title3.innerHTML = "Agenda : "+this.getData().agenda?this.getData().agenda:"";

        this.title4 = document.createElement("h5");
        this.title4.setAttribute("class","title");
        this.title4.setAttribute("id","page-title4");

        this.title5 = document.createElement("h1");
        this.title5.setAttribute("class","title");
        this.title5.setAttribute("id","page-title5");

        this.title5.innerHTML = "Very draft version for POC.. More details could be added..."
        

        var invitees = "";
        for(var i=0;i<this.getData().invitees.length;i++){

            invitees = invitees + this.getData().invitees[i].name + ((i === this.getData().invitees.length-1)?"":",");
        }
        this.title4.innerHTML = "Invitees : "+invitees;

        this.pageContent.appendChild(this.title);
        this.pageContent.appendChild(this.title2);
        this.pageContent.appendChild(this.title3);
        this.pageContent.appendChild(this.title4);
        this.pageContent.appendChild(this.title5);
        this.pageContent.appendChild(this.homeButton);
        

        this.pageContainer.appendChild(this.pageContent);

        this._holder.appendChild(this.pageContainer);
    };  

    eventDetailsPage.EventDetailsPage.prototype.setBackHandler = function(fn){

        this._backHandler = fn;
    };

})();

