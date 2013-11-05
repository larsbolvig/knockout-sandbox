(function($){

  $(function(){

    var nameViewModel = function(){
      this.firstName = ko.observable("Lars");
      this.lastName = ko.observable("Bolvig");
      this.fullName = ko.computed(function(){
        return this.firstName() + " " +this.lastName();
      }, this);
    };
    ko.applyBindings(new nameViewModel());

  });

})(jQuery);