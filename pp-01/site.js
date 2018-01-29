
  $('#contactform').on("submit",
  function (e){

    var email = $('#email').val();
    var validfilter = /.+@.+/ ;

    e.preventDefault();

    if (!validfilter.test(email))
    {
      console.log('not valid email');
      $('#contactform').append('<li>You need to enter a vaild email</li>');

      return false;
    }

    else
    {
        $('#contactform').append('<h1>Everything had been entered correctly!!!</h1>');
        return true;
    }
  }
);
