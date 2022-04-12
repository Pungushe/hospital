  $(document).ready(function() {

  var verify = $('#chk_td').length;
    if (verify==0){
      $('#no-data').text('Нет такого пациента');
    }
  });

  setInterval(function(){
    var date = new Date();
    $("#clock").html(
      (date.getHours() < 10 ? '0' : '') + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":" + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
      );
  }, 500);

  function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  function validateAll(){

    var name =$("#name").val();
    var phone =$("#phone").val();
    var email =$("#email").val();
    var age =$("#age").val();
    var gender =$("#gender").val();

    if (name == ''){
        swal("Opsss !" , "Поле имя не может быть пустым", "error")
        return false;
    }

    else if (name==name.toUpperCase()){
      swal("Opsss !", "Имя недопустимо большими буквами", "error")
      $("#name").val();
      return false;
    }

    else if (name.split('').length < 2){
        swal("Opsss !", "Нужна также Фамилия", "info")
        return false;
    }

    else if (phone == ''){
        swal("Opsss !", "Поле телефон не может быть пустым", "error")
        return false;
    }
    else if (email == ''){
        swal("Opsss !", "Поле email не может быть пустым", "error")
        return false;
    }
    else if (!(validateEmail(email))){
        swal("Opsss !", "Вставьте правильный email адрес", "error")
        var email = $("#email").val("");
        return false;
    }
    else if (age == ''){
        swal("Opsss !", "Поле возраст не может быть пустым", "error")
        return false;
    }
    // else if (age > 100){
    //     swal("Отклонен !", "Максималное значение 100 лет", "error")
    //     $("#age").val();
    //     return false;
    // }
    else if (gender == ''){
      swal("Opsss !", "Поле пол не может быть пустым", "error")
      return false;
    }
    else {
      return true;
    }
  }
  $('#btn-add').bind('click', validateAll)

  // Только буквы
  // $(document).ready(function() {
  //     jQuery('input[name="name"]').keyup(function(){
  //         var letter = jQuery(this).val();
  //         var allow=letter.replace (/[^a-zA-Z _]/g, '')
  //         jQuery(this).val(allow);
  //       });

  // Не позвволяет начинать с пробела
  $('input').on("keypress", function(e){
    if(e.which===32 && !this.value.length)
    e.preventDefault();
    // });
  });

  // Либо имя либо Фамилия
  $(document).ready(function() {
    $('#name').keyup(function(){
        var name = $('#name').val();
        if (name.split(' ').length==3){
          swal('Opsss !', 'Имя или Фамилия','info');
          $('#name').val("");
          return false;
        }
    })
  });

  // Первая буква заглавная
  $('#name').keyup(function(){
    var txt = $(this).val();
    $(this).val(txt.replace(/^(.)|\s(.)/g, function($1){
      return $1.toUpperCase();
    }));
  });

  // Телефон
  $(document).ready(function() {
    $('#phone').inputmask("(99) 99999-9999", {"onincomplete": function() {
          swal('Opsss !', 'Неполные телефонные данные. Пожалуйста проверьте','info');
          return false;
        }
      })
    });

  // Email
  $(document).ready(function() {
    $('#email').keyup(function() {
      this.value =this.value.toLowerCase();
      });
    });

  // Превышение возраста 100
  $(document).ready(function() {
    $('#age').keyup(function() {
      var age = $("#age").val();
      if (age > 100) {
        swal("Отклонен !", "Максималное значение 100 лет", "info");
        $("#age").val("");
      return false;
      }
    });
  });
  
  // В возрасте только числа
  $('#age').keyup(function() {
    if (!/^[0-9]*$/.test(this.value)) {
      this.value = this.value.split(/[^0-9]/).join('');
    }      
  });
  // В возрасте не допустим 0
  $('#age').on("input", function() {
    if (/^0/.test(this.value)) {
      this.value = this.value.replace(/^0/, '');
    }      
  });
