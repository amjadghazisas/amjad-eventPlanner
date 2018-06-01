var createEventPage = (function() {

	return{

        CreateEventPage: function(holder) {

            this.oDynamicFormFactory = new dynamicFormFactory.DynamicFormFactory(holder);
        }
            
    };

})();

(function() {

    createEventPage.CreateEventPage.prototype.destroy = function(){
        
        this.oDynamicFormFactory.destroy();
        this.oDynamicFormFactory = null;
    };
    

    createEventPage.CreateEventPage.prototype.createPage = function(){
        
        this.oDynamicFormFactory.renderForm();

    };

    createEventPage.CreateEventPage.prototype.submitHandler = function(fn){

        this.oDynamicFormFactory.submitHandler(fn);
    };

    createEventPage.CreateEventPage.prototype.cancelHandler = function(fn){

        this.oDynamicFormFactory.cancelHandler(fn);
    };

    

    createEventPage.CreateEventPage.prototype.setMetaData = function(value){

        this.oDynamicFormFactory.setMetaData(value);
        
    };

    createEventPage.CreateEventPage.prototype.getModel = function(value){

        return this.oDynamicFormFactory.getModel();
        
    };

    

    
    
    
    

    

})();

