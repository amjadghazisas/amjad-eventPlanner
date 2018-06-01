var modalPopup = (function() {

    var instance;
 
    function createInstance() {
        var object = new ModalPopup("I am the instance");
        object.ModalPopup = ModalPopup;
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

    function ModalPopup() {

        this._data = undefined;
        this.container = undefined;
        
    }

    

})();

(function() {

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == document.getElementById('modal-Container')) {
            event.target.style.display = "none";
        }
    }

	modalPopup.getInstance().ModalPopup.prototype.setData = function(data){

        if(data !== undefined){

            this._data = data;
            this.renderPopup();
        }
    };

    modalPopup.getInstance().ModalPopup.prototype.getData = function(){

        return this._data;
    };

    modalPopup.getInstance().ModalPopup.prototype.renderPopup = function(data){
     
        var that = this;

        this.modalContainer = document.createElement("div");
        this.modalContainer.setAttribute("class","modalContainer");
        this.modalContainer.setAttribute("id","modal-Container");

        this.modalContent = document.createElement("div");
        this.modalContent.setAttribute("class","modalContent");
        this.modalContent.setAttribute("id","modal-Content");

        this.modalSpan = document.createElement("span");
        this.modalSpan.setAttribute("class","modalClose");
        this.modalSpan.setAttribute("id","modal-Close");
        this.modalSpan.innerHTML = "&times;";

        this.modalSpan.addEventListener("click",function(event){
              
            that.modalContainer.style.display = "none";

        });

        this.title = document.createElement("h3");
        this.title.setAttribute("class","title");
        this.title.setAttribute("id","modal-title");
        this.title.innerHTML = this.getData().name?this.getData().name:"" + ":";

        this.title2 = document.createElement("h4");
        this.title2.setAttribute("class","title");
        this.title2.setAttribute("id","modal-title2");
        this.title2.innerHTML = "Organizer : "+this.getData().desc?this.getData().desc:"";

        this.title3 = document.createElement("h5");
        this.title3.setAttribute("class","title");
        this.title3.setAttribute("id","modal-title3");
        this.title3.innerHTML = "Agenda : "+this.getData().agenda?this.getData().agenda:"";

        this.title4 = document.createElement("h5");
        this.title4.setAttribute("class","title");
        this.title4.setAttribute("id","modal-title4");

        this.title5 = document.createElement("h1");
        this.title5.setAttribute("class","title");
        this.title5.setAttribute("id","modal-title5");

        this.title5.innerHTML = "Very draft version for POC.. More details could be added..."
        

        var invitees = "";
        for(var i=0;i<this.getData().invitees.length;i++){

            invitees = invitees + this.getData().invitees[i].name + ((i === this.getData().invitees.length-1)?"":",");
        }
        this.title4.innerHTML = "Invitees : "+invitees;

        this.modalContent.appendChild(this.modalSpan);
        this.modalContent.appendChild(this.title);
        this.modalContent.appendChild(this.title2);
        this.modalContent.appendChild(this.title3);
        this.modalContent.appendChild(this.title4);
        this.modalContent.appendChild(this.title5);

        this.modalContainer.appendChild(this.modalContent);

        var modal = document.getElementById("modal");
       
        modal.appendChild(this.modalContainer);
    };

    modalPopup.getInstance().ModalPopup.prototype.show = function(data){

        this.modalContainer.style.display = "block";
    };

    

    
    

    

})();

