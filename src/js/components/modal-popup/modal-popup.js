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
    /* Not required in our case
    window.onclick = function(event) {
        if (event.target === something) {
            event.target.style.display = "none";
        }
    }*/

    modalPopup.getInstance().ModalPopup.prototype.renderPopup = function(data){
     
        var that = this;

        this.modalContainer = document.createElement("div");
        this.modalContainer.setAttribute("class","modalContainer");
        this.modalContainer.setAttribute("id","modal-Container");

        this.modalContent = document.createElement("div");
        this.modalContent.setAttribute("class","modalContent");
        this.modalContent.setAttribute("id","modal-Content");

        //this.modalSpan = document.createElement("span");
        //this.modalSpan.setAttribute("class","modalClose");
       // this.modalSpan.setAttribute("id","modal-Close");
       // this.modalSpan.innerHTML = "&times;";

        //this.modalSpan.addEventListener("click",function(event){
              
           // that.modalContainer.style.display = "none";

        //});

       // this.modalContent.appendChild(this.modalSpan);
        this.modalContainer.appendChild(this.modalContent);

        var modal = document.getElementById("modal");
       
        modal.appendChild(this.modalContainer);
    };

    modalPopup.getInstance().ModalPopup.prototype.getContainer = function(){

        if(!this.modalContainer){

            this.renderPopup();
        }
        
        return this.modalContent;
    };

    modalPopup.getInstance().ModalPopup.prototype.show = function(data){

        this.modalContainer.style.display = "block";
    };

    

    
    

    

})();

