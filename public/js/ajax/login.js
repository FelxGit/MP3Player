
$("#login-btn").click(function(){

    // $(this).prop('disabled', true);

    let form_data = new FormData
    form_data.append('email', $("input[name=email]").val())
    form_data.append('password', $("input[name=password]").val())
    form_data.append('remember', $("input[name=remember]").val())

    $.ajax({
        type: "post",
        url: '/login',
        processData: false,
        contentType: false,
        data: form_data,
        success: function (data) {
            
            // set item to access accross the app
            localStorage.setItem('mp3player.user', JSON.stringify(data.user))
            localStorage.setItem('mp3player.jwt', data.token)

            $('#login-btn').prop('disabled', false);
            // alert(data.url)   
            window.location = data.url
        },
        error: function (data) {
            
            if( data.status === 422 ) {
                var errors = $.parseJSON(data.responseText);
                $.each(errors, function (key, value) {
                    // console.log(key+ " " +value);
                $('#error').addClass("alert alert-danger");
    
                    if($.isPlainObject(value)) {
                        $.each(value, function (key, value) {                       
                            // console.log(key+ " " +value);
                        $('#error').show().append(value+"<br/>");
    
                        });
                    }else{
                    $('#error').show().append(value+"<br/>"); //this is my div with messages
                    }
                });
            }
            else{
                alert('SERVER ERR0R: Try again later.')
            }

            $('#login-btn').prop('disabled', false);
        }
    });
  });