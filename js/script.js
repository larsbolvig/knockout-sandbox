var my = my || {};
(function($){

    $(function(){

        // Viewmodel using the revealing module pattern and namespacing
        my.customViewModel = function(){
            var
                firstName = ko.observable("Lars"),
                lastName = ko.observable("Bolvig"),
                fullName = ko.computed(function(){
                    return firstName() + " " +lastName();
                });
            return {
                firstName: firstName,
                lastName: lastName,
                fullName: fullName
            };
        } ();
        
        ko.applyBindings(my.customViewModel);

    });

})(jQuery);