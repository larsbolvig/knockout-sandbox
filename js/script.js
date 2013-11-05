(function($){

  $(function(){
    var viewModel = {
      firstName: ko.observable("Lars")
    };
    ko.applyBindings(viewModel);
  });

})(jQuery);