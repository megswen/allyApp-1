$(document).ready(function(){
    $('.connect').hide();
    //$('#toid').hide();
    //$('#helpid').hide();
    //$('#parentid').hide();
    $.ajax({
      url: "/users/authenticate",
      type: 'GET',
      success: function(res) {
          if(typeof res !== "undefined" && res !== "" && res){
            $('#loggedin').html(res.username);
            $('#fromid').val(res.id);
            $('.login-link').attr("href", "/messages/all/"+res.id);
            $('#help_userid').val(res.id).hide();
            $('#help_username').val(res.username).hide();
            $('.connect').show();
            $('.help-login-protected').html('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Add to Ally Blog</button>');
            
          } 
      }
    });

  
  $("#login").validate({
    rules: {
      username : {
        required: true,
        minlength: 5
      },
      passHash: {
        required: true,
        minlength: 8
      }
    }
  });

  $("#register").validate({
    rules: {
      username : {
        required: true,
        minlength: 5
      },
      passHash: {
        required: true,
        minlength: 8
      },
      passHash2 : {
        minlength : 8,
        equalTo : "#passHash"
      }
    }
  });








  
});