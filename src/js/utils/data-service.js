var dataService = (function() {
    
    //In real world will be an ajax call to get the data
	return{

        setCurrentUser(value){
        
            this.currentUser = value;

        },

        getCurrentUser(){
        
            return this.currentUser;

        },

        getCategories: function() {

           return this.categories;
        
        },

        getEventList: function() {

            return this.eventList;
         
         },

         getUsers: function() {

            return this.allUsers;
         
         },

        // This is a very temporary code and will normally point to an auth service
        validateUser(obj){
        
            for(var i=0;i<this.sampleUsers.users.length;i++){
        
                   if(obj.userName === this.sampleUsers.users[i].userName){

                     if(obj.password === this.sampleUsers.users[i].password){
                        
                        this.setCurrentUser(this.sampleUsers.users[i]);
                        return true;
                     }
                   }
            }

        },

        sampleUsers:{

            users:[

                {userName:"aghazi",password:"amjad",name:"Amjad Ghazi", type:"premium"},
                {userName:"jtrot",password:"trot",name:"Jonathan Trot", type:"regular"}
            ]
        },

         currentUser:{name:"Amjad", type:"premium"},

         allUsers: {

            data:[
        
                {name:"Amjad Ghazi"},
                {name:"Jonathan"},
                {name:"Lesli"}
            ]
            
        },

        categories: {

            uid:"categories00678",

            selectedKey: "personal",
            selectedIndex: 0,

            data:[
        
                {name:"Personal Occassions", key:"personal", desc:"Explore a variety of personal events created by folks"},
                {name:"Official Events", key:"official", desc:"Office activities and events scheduled by your colleagues"},
                {name:"Urgent Meetings", key:"urgent", desc:"Do not miss out on urgent meetings and plans"},
                {name:"Informal", key:"informal", desc:"Informal and fun events"},
                {name:"Family", key:"family", desc:"Family comes first, explore.."},
                {name:"Activities", key:"activities", desc:"All fun and important activities"},
                {name:"Other Events", key:"others", desc:"Everything else can be found here"}
            ]
            
        },

        eventList:{

            uid:"eventList00678",

            personal:[
        
                {name:'Birthday Party',  desc:"Amjad Ghazi, 30\-05\-2018", invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"},
                
                {name:'Birthday Party',  desc:"Jonathan, 30\-05\-2018", invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"}                      
            ],
        
            official:[
                {name:'Annual Party',  desc:"Amjad Ghazi, 30\-05\-2018" , invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"},
                {name:'Farewell Party',  desc:"Jonathan, 30\-05\-2018" , invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"} 
                
            ],
        
            urgent:[
        
                {name:'Retrospective',  desc:"Amjad Ghazi, 30\-05\-2018", invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"},
                {name:'Investigation Plan',  desc:"Amjad Ghazi, 30\-05\-2018", invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"}
                
            ],

            family:[{name:'Family Party',  desc:"Jonathan, 30\-05\-2018", invitees:[
                      
                {name:"Jonathan"},
                {name:"Amjad"},
                {name:"James"},
                {name:"Mary"},
                {name:"Lisa"},
                {name:"Akbar"},
                {name:"Ravi"},
                {name:"Lesli"},
                {name:"Shawn"}
            ], agenda:"Celebrate My Birthday Party..!!!"}],

            informal:[{name:'Informal Party',  desc:"Jonathan, 30\-05\-2018", invitees:[
                      
                {name:"Jonathan"},
                {name:"Amjad"},
                {name:"James"},
                {name:"Mary"},
                {name:"Lisa"},
                {name:"Akbar"},
                {name:"Ravi"},
                {name:"Lesli"},
                {name:"Shawn"}
            ], agenda:"Celebrate My Birthday Party..!!!"}],

            activities:[{name:'Avtivity Party',  desc:"Jonathan, 30\-05\-2018", invitees:[
                      
                {name:"Jonathan"},
                {name:"Amjad"},
                {name:"James"},
                {name:"Mary"},
                {name:"Lisa"},
                {name:"Akbar"},
                {name:"Ravi"},
                {name:"Lesli"},
                {name:"Shawn"}
            ], agenda:"Celebrate My Birthday Party..!!!"}],
        
            others:[
        
                {name:'Other Party',  desc:"William, 30\-05\-2018", invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"},
                {name:'Annual Prty',  desc:"Amjad Ghazi, 30\-05\-2018", invitees:[
                      
                    {name:"Jonathan"},
                    {name:"Amjad"},
                    {name:"James"},
                    {name:"Mary"},
                    {name:"Lisa"},
                    {name:"Akbar"},
                    {name:"Ravi"},
                    {name:"Lesli"},
                    {name:"Shawn"}
                ], agenda:"Celebrate My Birthday Party..!!!"}
                
            ]
        
        }
    };

})();