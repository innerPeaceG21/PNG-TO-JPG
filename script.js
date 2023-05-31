document.getElementById("convertBtn").addEventListener("click", function() {
    var input = document.getElementById("imageInput");
    var file = input.files[0];
    
    if (file) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          var dataUrl = canvas.toDataURL("image/jpeg");
          
          document.getElementById("preview").src = dataUrl;
          document.getElementById("downloadLink").href = dataUrl;
          document.getElementById("downloadLink").style.display = "block";
        };
        
        img.src = e.target.result;
      };
      
      reader.readAsDataURL(file);
    }
  });
  