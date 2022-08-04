

  $(document).ready(function() {
   
    $("#basic-form").validate({
        rules: {
              name : {
                  required: true,
                  minlength: 3
              },
              age: {
                  required: true,
                  number: true,
                  min: 18
              },
              email: {
                  required: true,
                  email: true
              },
              pwd: {
                  required: true,
                  email: true
              },
              myDropDown:{
                required:  true     
                   
              },
              darkmode :{
                required: true
              },
              optradio :{
                required:true
              },
              'files[]':{
                required:true
              },
              
              weight: {
                  required: {
                  depends: function(elem) {
                      return $("#age").val() > 50
                  }
                  },
                  number: true,
                  min: 0
              }
        },
            messages : {
              name: {
                  minlength: "Name should be at least 3 characters"
              },
              age: {
                  required: "Please enter your age",
                  number: "Please enter your age as a numerical value",
                  min: "You must be at least 18 years old"
              },
              email: {
                  email: "The email should be in the format: abc@domain.tld"
              },
              pwd: {
                  password: "The password should be in the format: abcd1234$%&"
              },
              myDropDown :{
                 select:'Please select an opt'
              },
              darkmode:{
                checkbox:'sef'
              },
              optradio :{
                 radio:'Please select option'
              },
              'files[]' :{
                 required:'Please select images'
              },
              weight: {
                  required: "People with age over 50 have to enter their weight",
                  number: "Please enter your weight as a numerical value"
              }
            },
            errorPlacement: function(error, element) 
            {
                if ( element.is(":checkbox") ) 
                {
                    error.appendTo( element.parents('.mySwitch') );
                }else if(element.is(":radio")){
                    error.appendTo( element.parents('.radio-option') );
                }
                else 
                { // This is the default behavior 
                    error.insertAfter( element );
                }
             }
            
        });
   
       
    $('#btn').on('click',function(){
         $('#basic-form').valid()
    })

        
});