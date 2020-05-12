

  var orglUnencTxt = document.getElementById("enc"),
      encBtn  = document.getElementById("encbtn"),
      encTxt  = document.getElementById("encTxt"),
      orglEncTxt = document.getElementById("unenc"),
      unencBtn  = document.getElementById("unencbtn"),
    //  unencTxt  = document.getElementById("unencTxt"),
      encKeyInput  = document.getElementById("encKey"),
      encKey;
      txt     = '';

     //Encrypt Button
      encBtn.onclick = function () {
        encKey = encKeyInput.value;

        txt = '';
        var ltrs = orglUnencTxt.value;
        for (var i = 0; i < ltrs.length; i++) {
          txt += String.fromCharCode(ltrs.charCodeAt(i) * encKey);

        }
        encTxt.innerHTML = txt;
      }

     //Unencrypt Button
      unencBtn.onclick = function () {
        encKey = encKeyInput.value;
        txt ='';
        var ltrs = orglEncTxt.value;
        for (var i = 0; i < ltrs.length; i++) {
          txt += String.fromCharCode(ltrs.charCodeAt(i) / encKey);
        }
        encTxt.textContent =   txt.split('').join(' ');;
      }
