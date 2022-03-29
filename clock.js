let isim = prompt("İsminizi giriniz:");
var tarih = new Date();

if(isim!=null){
    document.querySelector("#myName").innerHTML = isim;
    document.querySelector(".text1").style.color="orange";
    document.querySelector("#myName").style.color="red";
    saat = tarih.getHours();
    dakika = tarih.getMinutes();
    saniye = tarih.getSeconds();
    gün = tarih.getDay();

    if(gün==1){
     gün= "Pazartesi";
    }if(gün==2){
        gün = "Salı";
      }if(gün==3){
      gün= "Çarşamba";
      }if(gün==4){
        gün= "Perşembe";
        }if(gün==5){
            gün= "Cuma";
            }if(gün==6){
                gün= "Cumartesi";
                }else{
                    gün= "Pazar";
                }

      
    document.querySelector("#myClock").innerHTML ="0"+ saat + ":0" + dakika + ":" + saniye + "  " + gün ;
    document.querySelector("#myClock").style.color="yellow";



   
}

