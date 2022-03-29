$(window).on("scroll", function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
     $(".navbar").css("background", "#f8f9fa");
     $(".navbar").css("border-radius", "0px 0px 15px 15px");
  } else {
     $(".navbar").css("background", "#eeebdd");
  }
});


$("#go-fb").click(function () {
  window.location.href = "https://www.facebook.com/";
})

$("#go-tl").click(function () {
  window.location.href = "https://t.me/";
})

$("#go-ig").click(function () {
  window.location.href = "https://www.instagram.com/";
})

$("#go-github").click(function () {
  window.location.href = "https://www.github.com/";
})

// Formspree
var form = document.getElementById("formcontact");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);

    var nama = document.getElementById("Nama").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Pesan").value;
    if (nama != "" && email != "" && message != "") {
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "<div class='alert alert-warning pt-2 pb-2' role='alert'><i class='fas fa-check me-1'></i>Thanks for your message!</div>";
        form.reset()
      }).catch(error => {
        status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fas fa-exclamation me-1'></i>Oops! There was a problem submitting your form</div>"
      });
    }else if(nama == "") {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fas fa-exclamation me-1'></i> Full Name field is empty</div>";
    }else if (email == "") {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fas fa-exclamation me-1'></i>Email field is empty</div>";
    }else if (message == "") {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fas fa-exclamation me-1'></i>You must type your message</div>";
    }else {
      status.innerHTML = "<div class='alert alert-danger pt-2 pb-2' role='alert'><i class='fas fa-exclamation me-1'></i>You must fill this form first!</div>";
    }

    
  }
  form.addEventListener("submit", handleSubmit)

  // Media query 
  function myFunction(x) {  
      if (x.matches) { // Jika kueri media cocok
         if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            $(".navbar").css("background", "#f8f9fa");
            $(".navbar").css("border-radius", "0px 0px 15px 15px");
         } else {
            $(".navbar").css("background", "#eeebdd");
            // $(".navcolps").css("margin-top", "25px");
         }
      }
   }
   
   var x = window.matchMedia("(max-width: 600px)")
   myFunction(x) // Panggil fungsi listener pada saat dijalankan
   x.addListener(myFunction) // Lampirkan fungsi listener pada perubahan status