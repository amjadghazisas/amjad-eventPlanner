var dynamicFormFactory = (function() {

	return{

        DynamicFormFactory: function(holder) {

                this._data = undefined;
                this._holder = holder;
                this._setMetaData = undefined;
                this._model = {};
                this._form = undefined;
            }
            
    };

})();

(function() {

    dynamicFormFactory.DynamicFormFactory.prototype.destroy = function(){
          
        this._data = null;
        this._holder = null;
        this._setMetaData = null;
        this._model = null;
        this._submitHandler = null;
        this._cancelHandler = null;
        this._form.parentNode.removeChild(this._form);
        this._form = null;
    };


    dynamicFormFactory.DynamicFormFactory.prototype.submitHandler = function(fn){

        this._submitHandler = fn;
    };

    dynamicFormFactory.DynamicFormFactory.prototype.cancelHandler = function(fn){

        this._cancelHandler = fn;
    };

    
    
    dynamicFormFactory.DynamicFormFactory.prototype.setMetaData = function(value){
          
        this._setMetaData = value;
        
     };

     dynamicFormFactory.DynamicFormFactory.prototype.renderForm = function(){
        
        var that = this;
        this._form = document.createElement("form");
        this._form.setAttribute('method',"post");
        this._form.setAttribute('action',"");
        this._form.setAttribute('class',"dynamicForm");

        for(var i=0;i<this._setMetaData.fields.length;i++){

            var formField = this.factory(this._setMetaData.fields[i]);

            if(this._setMetaData.fields[i].prop){
                formField.prop = this._setMetaData.fields[i].prop;
            }

            if(this._setMetaData.fields[i].prop){

                that._model[this._setMetaData.fields[i].prop] = undefined;
            }

            

            formField.addEventListener("change",function(event){
                
                if(event.target.getAttribute("data-type") === "custom-date"){
                    that.validateDate();
                }
                
                that._model[event.target.prop] = event.target.value;
            });

            this._form.appendChild(formField);
        }

        this._holder.appendChild(this._form);
        
     };

     dynamicFormFactory.DynamicFormFactory.prototype.factory = function(field){
        var that = this;
        var formField = document.createElement(field.elementType);
        formField.setAttribute('class',field.classes);

         //Doing this since we do not want to use HTML controls :(
        if(field.data_type === "custom-date"){

            formField.setAttribute('data-type',field.data_type);
            formField.setAttribute('placeholder',"DD-MM-YYYY");
        }

        if(field.type){

           
            formField.setAttribute('type',field.type);          
            if(field.type === "submit"){
                
                formField.setAttribute('value',field.value);
                formField.addEventListener("click",function(event){
                    event.preventDefault();          
                    
                    if(that.validateModel()){
                       
                        that._submitHandler(that._selectField?that._selectField.selectedIndex:undefined);
                    }else {
                        alert("All Fields Are Mandatory");
                    }
                    
                });
                
            }
            if(field.type === "cancel"){
                
                formField.setAttribute('value',field.value);
                formField.addEventListener("click",function(){
                    event.preventDefault();           
                    that._cancelHandler();
                });
                
            }

            

        }

        if(field.genre === "simple"){
        
            formField.innerHTML = (typeof(field.value) === "object")?field.value.fn():field.value;

        }else if(field.genre === "complex"){

            if(field.elementType === "select"){
                
                this._selectField = formField;
                var data = field.value.fn();

                for(var i=0;i<data.length;i++){

                    option = document.createElement("option");
                    option.setAttribute('value',data[i].key);
                    option.innerHTML = data[i].name;
                    formField.appendChild(option);
                }
            }
        }

        if(field.style){
           
            formField.style = field.style;

            //IE screwed up.. doesnt like above line. 
            //Ugly fix for now, normally would use delegates for handling browser compatability issues
            if(formField.style !== field.style){

                for(var styleProp in field.IEStyles){

                    formField.style[styleProp] = field.IEStyles[styleProp];
                }
            }
        }
        
        return formField;
        
     };

     dynamicFormFactory.DynamicFormFactory.prototype.getModel = function(){
        return this._model;
     };

     dynamicFormFactory.DynamicFormFactory.prototype.validateModel = function(){
         
        var model = this.getModel();

        for(var i in model){
             
            if (model[i] === undefined || model[i].length < 1){

                return false;
            }
        }

        return true;

     }

     dynamicFormFactory.DynamicFormFactory.prototype.validateDate = function(){
       
        // regular expression to match required date format
        var re = /^\d{1,2}\-\d{1,2}\-\d{4}$/;

        if(event.target.value != '' && !event.target.value.match(re)) {
        alert("Invalid date format, use DD-MM-YYYY format, You Entered: " + event.target.value);
        
         event.target.value = "";
         event.target.focus();
         //return false;
        }
        
     };

     

     

    

})();

