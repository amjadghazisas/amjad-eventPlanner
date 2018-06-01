(function() {

    "user strict";
    document.addEventListener('DOMContentLoaded', ready, false);

    function ready(){

        var oLoginPage;
        var oModalPopup = new modalPopup.getInstance();
        var oLandingPage;
        var oCreateEventPage;
        var loginStatus;
        var oIconBar;
        var delegates = {regular:regularFeatureDelegate.RegularFeatureDelegate,premium:premiumFeatureDelegate.PremiumFeatureDelegate};

        function buildLoginPage(){

            oLoginPage = new loginPage.LoginPage("app");
            oLoginPage.setMetaData(loginFormData);
            oLoginPage.createPage();

            oLoginPage.submitHandler(function(status){
                loginStatus = dataService.validateUser(oLoginPage.getModel());

                if(loginStatus){

                    oIconBar = new iconBar.IconBar("iconContainer");
                    oIconBar.setDelegate(new delegates[dataService.getCurrentUser().type]);
                    oIconBar.renderIconBar();
                    oIconBar.newEventHandler(function(){
             
                         oIconBar.hide();
                         oLandingPage.destroy();
                         buildEventPage();
                         oCreateEventPage.setMetaData(createEventFormData);
                         oCreateEventPage.createPage();
                         
                         oCreateEventPage.submitHandler(function(index){
                             var newEventItem = oCreateEventPage.getModel();
                             var data = dataService.getEventList()[dataService.getCategories().data[index].key];
                             dataService.getCategories().selectedKey = dataService.getCategories().data[index].key;
                             dataService.getCategories().selectedIndex = index;
                             newEventItem.desc = dataService.getCurrentUser().name + ", "+newEventItem.dateOfEvent+", "+newEventItem.venue;
                             newEventItem.invitees = dataService.getUsers().data;
                             data.splice(0, 0, newEventItem);
             
                             oCreateEventPage.destroy();
                             buildLandingPage();
                         });
             
                         oCreateEventPage.cancelHandler(function(){
             
                             oCreateEventPage.destroy();
                             buildLandingPage();
                         });
                    });

                    buildLandingPage();
                    oLoginPage.destroy();

                }else{

                    alert("login failed");
                }

            });
        };

        function buildLandingPage(){
            
            oIconBar.show();
            oLandingPage = new landingPage.LandingPage();
            oLandingPage.createPage("app");

            oLandingPage.eventClickhandler(function(item){
                oModalPopup.setData(item);
                oModalPopup.show();
            });
        }

        function buildEventPage(){
           
            oCreateEventPage = new createEventPage.CreateEventPage("app");
      
        }
        
        buildLoginPage();


    }    

})();