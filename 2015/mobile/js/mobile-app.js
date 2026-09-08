var myf7 = new Framework7();
var $$ = Framework7.$;
var yapc2015 = angular.module('yapc2015', ['ngSanitize']);

var get_current_date = function(){
  var default_date = '2015-08-21';
  var d = new Date();
  var localTime = d.getTime();
  var localOffset = d.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var offset = +9.0;
  var result = utc - (3600000 * offset);
  var today = new Date(result);
  today = d.getFullYear() + '-' + ("0"+(d.getMonth()+1)).slice(-2) + '-' + d.getDate();
  var list = ['2015-08-20', '2015-08-21', '2015-08-22'];
  $.each(list, function(){
    if(today == this) default_date = this;
  });
  return default_date;
};

function get_param(key) {
  var url = location.href;
  parameters = url.split("?");
  params = (parameters[1] || "").split("&");
  var params_array = [];
  for ( i = 0; i < params.length; i++ ) {
    neet = params[i].split("=");
    params_array.push(neet[0]);
    params_array[neet[0]] = neet[1];
  }
  var value = params_array[key] || null;
  return value;
}

function set_param(key, value) {
  var uri = location.href;
  var re = new RegExp("([?&])" + key + "=.*?(&|$)");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    uri = uri + separator + key + "=" + value;
  }
  window.history.pushState(null,null,uri);
}

var current_date;
var get_path_date = function(){ var m = location.pathname.match(/schedule-(\d{4}-\d{2}-\d{2})-(?:pc|sp)\.html$/); return m ? m[1] : null; };
var param_date = get_param('date') || get_path_date();
if(param_date) {
  var list = ['2015-08-20', '2015-08-21', '2015-08-22'];
  $.each(list, function(){
    if(param_date == this) current_date = this;
  });
}else{
  current_date = get_current_date();
}

yapc2015.directive("highlight", function() {
  return function(scope, element, attrs) {
    element.on('mouseleave', function(event) {
      element.removeClass(attrs.highlight)
    })
    element.on('mousedown', function(event) {
      element.addClass(attrs.highlight)
    })
  }
});

yapc2015.controller('DateController', function($scope){
  $scope.change_date = function(){
    $('.tab-link').each(function(){
      if($(this).attr('data-date') == current_date){
        $(this).addClass('active');
      }else{
        $(this).removeClass('active');
      }
    });
  };
  $('.tab-link').click(function(){
    current_date = $(this).attr('data-date');
    set_param('date', current_date);
    $scope.change_date();
    var scope = angular.element($('#schedule')).scope();
    scope.$apply(function(){
      scope.load();
    });
  });
});

yapc2015.controller('ScheduleController', function($scope, $http){
  var venue = {
    1 : 'Track A 国際会議場',
    2 : 'Track B (701-702)',
    3 : 'Track C (703)',
    4 : 'Track D (605-606)',
    5 : 'Track E (607-608)',
    6 : 'レセプションホール 1F'
  };
  $scope.load = function(){
    myf7.showPreloader();
    $http.get('/2015/talk/schedule-' + current_date + '.json').success(function(data) {
      var talks = [];
      $.each(data.talks_by_venue, function(){
        $.each(this, function(){
          var talk = this;
          var start_time = talk.start_on.match(/\d{2}:\d{2}/)[0];
          talk.start_time = start_time;
          talk.venue_name = venue[talk.venue_id];
          talks.push(talk);
        });
      });
      $.each(data.events_by_venue[3], function(){
        var talk = this;
        var start_time = talk.start_on.match(/\d{2}:\d{2}/)[0];
        talk.start_time = start_time;
        talk.venue_name = venue[talk.venue_id];
        talks.push(talk);
      });
      talks.sort(function(a,b){
        return a.start_time - b.start_time;
      });
      var talk_set = {};
      $.each(talks, function(){
        var talk = this;
        if ( talk_set[talk.start_time] == undefined ) {
          talk_set[talk.start_time] = [talk];
        }else{
          talk_set[talk.start_time].push(talk);
        }
      });
      $scope.talk_set = talk_set;
      myf7.hidePreloader();
    });
  };
});

yapc2015.controller('TalkController', function($scope, $element){
  $scope.detail = false;
  $scope.show_detail = function(id){
    var elem = angular.element('.talk-' + id).html();
    myf7.popup(elem);
  };
});

yapc2015.controller('ToolbarController', function($scope){
  $scope.scroll_to_top = function(){
    $('.page-content').animate({scrollTop: $('.messages').height() }, 'slow');
  };
  $scope.show_map = function(){
    var elem = angular.element('#map').html();
    console.log(elem);
    myf7.popup(elem);
  };
});
