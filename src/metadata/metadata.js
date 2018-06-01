var loginFormData = {

    fields: [

        {elementType:"h3", classes:"form-label", value:"User Name :", genre:"simple"},
        {elementType:"input", classes:"form-input", value:"", genre:"simple",prop:"userName"},
        {elementType:"h3", classes:"form-label", value:"Enter Password", genre:"simple"},
        {elementType:"input", type:"password", classes:"form-input", value:"", genre:"simple", prop:"password"},       
        {elementType:"input", type:"submit", classes:"formSubmit", value:"Login", genre:"simple", style:"display:block;margin-top:1%", IEStyles:{display:"block",marginTop:"1%"}}
        
    ]};

var createEventFormData = {

    fields: [

        {elementType:"h3", classes:"form-label", value:"Event Title :", genre:"simple"},
        {elementType:"input", classes:"form-input", value:"", genre:"simple",prop:"name", style:"min-width:500px", IEStyles:{minWidth:"500px"}},
        {elementType:"h3", classes:"form-label", value:"Select A Category :", genre:"simple"},
        {elementType:"select", classes:"form-select",value:{

            fn:function(){ return dataService.getCategories().data},
            key:"key"

        }, genre:"complex", style:"max-width:400px", IEStyles:{maxWidth:"400px"}},
        {elementType:"h3", classes:"form-label", value:"What's Your Agenda :", genre:"simple"},
        {elementType:"input", classes:"form-input", value:"", genre:"simple", prop:"agenda", style:"min-width:500px", IEStyles:{minWidth:"500px"}},
        {elementType:"h3", classes:"form-label", value:"Venue :", genre:"simple"},
        {elementType:"input", classes:"form-input", value:"", genre:"simple", prop:"venue", style:"min-width:500px", IEStyles:{minWidth:"500px"}},
        {elementType:"h3", classes:"form-label", value:"Date :", genre:"simple"},
        {elementType:"input", data_type:"custom-date", classes:"form-input", value:"", genre:"simple", prop:"dateOfEvent", style:"max-width:400px", IEStyles:{maxWidth:"500px"}},
        {elementType:"h3", classes:"form-label", value:"Invitees :", genre:"simple"},
        {elementType:"h4", classes:"form-label", 
        
              value:{

                    fn:function(){

                        var invitees = "";
        
                        for(var i=0;i<dataService.getUsers().data.length;i++){
        
                             invitees = invitees + dataService.getUsers().data[i].name + ((i===dataService.getUsers().data.length-1)?"":",");
                        }

                        return invitees;
                    }
               }, genre:"simple", style:"border: solid 1px black;max-width:500px"
        },
        {elementType:"input", type:"submit", classes:"formSubmit", value:"Create Event", genre:"simple", style:"margin-right:1%", IEStyles:{marginRight:"1%"}},
        {elementType:"button", type:"cancel", classes:"formCancel", value:"Cancel", genre:"simple", style:"margin-right:1%", IEStyles:{marginRight:"1%"}}
        
    ]};

   