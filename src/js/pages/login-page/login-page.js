var loginPage = (function() {

	return{

        LoginPage: function(holder) {

            this.oDynamicFormFactory = new dynamicFormFactory.DynamicFormFactory(holder);
        }
            
    };

})();

(function() {

    loginPage.LoginPage.prototype.destroy = function(){
        
        this.oDynamicFormFactory.destroy();
        this.oDynamicFormFactory = null;
    };

    loginPage.LoginPage.prototype.createPage = function(){
        
        this.oDynamicFormFactory.renderForm();

    };

    loginPage.LoginPage.prototype.submitHandler = function(fn){

        this.oDynamicFormFactory.submitHandler(fn);
    };

    loginPage.LoginPage.prototype.cancelHandler = function(fn){

        //this.oDynamicFormFactory.cancelHandler(fn);
    };

    

    loginPage.LoginPage.prototype.setMetaData = function(value){

        this.oDynamicFormFactory.setMetaData(value);
        
    };

    loginPage.LoginPage.prototype.getModel = function(value){

        return this.oDynamicFormFactory.getModel();
        
    };
    

})();

