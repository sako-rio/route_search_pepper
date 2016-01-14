$(document).ready(function() {
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
    var mainText = '送信中　' + spaceString + 'ε-(´∀｀; )';
    $mainText.text(mainText);
    setTimeout(sending, 1000);
  }

  sending();
});
