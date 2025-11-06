document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById("titulo").classList.remove("hidden");
        document.getElementById("titulo").style.opacity = "1";
        document.getElementById("textinho").classList.remove("hidden");
        document.getElementById("textinho").style.opacity = "1";
        document.getElementById("textinho1").classList.remove("hidden");
        document.getElementById("textinho1").style.opacity = "1";
        document.getElementById("scroll").classList.remove("hidden");
        document.getElementById("scroll").style.opacity = "1";
    
       
     
    }, 1000);
});


function downloadPDF() {
  const pdfPath = 'img/pdf.pdf';
  window.open(pdfPath, '_blank'); // abre em nova guia e não afeta a atual
}

