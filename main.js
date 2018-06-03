(function() {

    "user strict";
    document.addEventListener('DOMContentLoaded', ready, false);

    function ready(){

        var oLoginPage;

        // This will show app in modal
        var oModalPopup = new modalPopup.getInstance();
        var oModalContainer = oModalPopup.getContainer();
        oModalPopup.show();
        //end
        
        // This will show app in page
        //var oModalContainer = document.getElementById('app');
        //
        var oLandingPage;
        var oCreateEventPage;
        var oEventDetailsPage;
        var loginStatus;
        var oIconBar;
        var delegates = {regular:regularFeatureDelegate.RegularFeatureDelegate,premium:premiumFeatureDelegate.PremiumFeatureDelegate};

        function buildLoginPage(){

            oLoginPage = new loginPage.LoginPage(oModalContainer);//"app");
            oLoginPage.setMetaData(loginFormData);
            oLoginPage.createPage();

            oLoginPage.submitHandler(function(status){
                loginStatus = dataService.validateUser(oLoginPage.getModel());

                if(loginStatus){

                    oIconBar = new iconBar.IconBar(oModalPopup.getContainer());
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
            oLandingPage.createPage(oModalContainer);//"app");

            oLandingPage.eventClickhandler(function(item){
                oLandingPage.destroy();

                oEventDetailsPage = new eventDetailsPage.EventDetailsPage(oModalContainer);//'app');
                oEventDetailsPage.setBackHandler(function(){
                   
                    oEventDetailsPage.destroy();
                    buildLandingPage();

                });
                oEventDetailsPage.setData(item);
            });
        }

        function buildEventPage(){
           
            oCreateEventPage = new createEventPage.CreateEventPage(oModalContainer);//"app");
      
        }
        
        buildLoginPage();


    }    

})();