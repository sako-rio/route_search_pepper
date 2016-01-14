$(document).ready(function() {
  var session = new QiSession;
  var $mainText = $('body').find('.mainText');
  var chuuten = '';
  function spacePadding(i) {
    if (i == 4) {
      i = 0;
      chuuten = '';
    }

    var result;
    var space = '　';
    while (i < 4) {
      space += '　';
      i++;
    }

    result = chuuten + space;
    return result;
  }

  function sending() {
    chuuten = chuuten + '・';
    var spaceString = spacePadding(chuuten.length);
    var mainText = emailaddress.ipaddress + '@' + emailaddress.domain + 'へ送信中　' + spaceString + 'ε-(´∀｀; )';
    $mainText.text(mainText);
    setTimeout(sending, 1000);
  }

  function GetQueryString() {
    var result = {};
    if (1 < window.location.search.length) {
      var query = window.location.search.substring(1);
      var parameters = query.split('&');
      for (var i = 0; i < parameters.length; i++) {
        var element = parameters[ i ].split('=');
        var paramName = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);
        result[ paramName ] = paramValue;
      }
    }

    return result;
  }

  var emailaddress  = GetQueryString();
  session.service('ALMemory').done(
    function(ALMemory) {
      ALMemory.raiseEvent('outPutUserEmailAddress', emailaddress);
    });

  sending();
});
