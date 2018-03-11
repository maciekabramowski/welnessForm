$(document).ready(function(){

  //adding new additional info field
  $('#newAddInfoField').click(function(){
    $('#additionalInfoFields').append('<input class="additionalInfo" type="text" name="additionalInfo" placeholder="Additional info">');
  });


 //on submit
  $('form').on('submit', function(){

      //taking values of simple inputs
      var projectName = $('#projectName');
      var titleHead = $('#titleHead');
      var titleBody = $('#titleBody');
      var titleBody2 = $('#titleBody2');
      var productLink = $('#productLink');
      var category = $('#category');
      var zoom1 = $('#zoom1');
      var zoom2 = $('#zoom2');
      var zoom3 = $('#zoom3');
      var zoom4 = $('#zoom4');
      var description = $('#description');
      var msrpPrice = $('#msrpPrice');
      var yourPrice = $('#yourPrice');
      var discount = $('#save');
      var buttonSrc = $('#buttonSrc')
      var useCode = $('#useCode')
      // var  = $('#')
      // var  = $('#')
      // var  = $('#')
      // var  = $('#')


      //taking values of array inputs
      // var additionalInfos = [];
      // $('.additionalInfo').each(function(){
      //   value = $(this).val();
      //   additionalInfos.push({additionalInfo: value});
      // });
      // console.log(additionalInfos);

      // var additionalInfos = {additionalInfo: "blablabla"};

      //creating object to send
      var todo = {projectName: projectName.val(),
                  titleHead: titleHead.val(),
                  titleBody: titleBody.val(),
                  titleBody2: titleBody2.val(),
                  productLink: productLink.val(),
                  category: category.val(),
                  zoom1: zoom1.val(),
                  zoom2: zoom2.val(),
                  zoom3: zoom3.val(),
                  zoom4: zoom4.val(),
                  description: description.val(),
                  msrpPrice: msrpPrice.val(),
                  yourPrice: yourPrice.val(),
                  discount: discount.val(),
                  buttonSrc : buttonSrc.val(),
                  useCode : useCode.val(),
                  additionalInfos: {lala: "lala"},
                };



        console.log(todo);

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          // location.reload();
        }
      });

      return false;

  });

  // $('li').on('click', function(){
  //     var item = $(this).text().replace(/ /g, "-");
  //     $.ajax({
  //       type: 'DELETE',
  //       url: '/todo/' + item,
  //       success: function(data){
  //         //do something with the data via front-end framework
  //         location.reload();
  //       }
  //     });
  // });

});
