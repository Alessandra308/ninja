document.getElementById("compartilharLocalizacao").addEventListener("click", function() {
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition, showError);
 } else {
 alert("Geolocaliza��o n�o � suportada por este navegador.");
 }
});
function showPosition(position) {
 var data = {
 latitude: position.coords.latitude,
 longitude: position.coords.longitude
 };
 // Envie os dados de localiza��o para seu servidor ou API para armazenamento
 console.log(data);
}
function showError(error) {
 switch (error.code) {
 case error.PERMISSION_DENIED:
 alert("Usu�rio negou a solicita��o de Geolocaliza��o.");
 break;
 case error.POSITION_UNAVAILABLE:
 alert("Localiza��o n�o dispon�vel.");
 break;
 case error.TIMEOUT:
 alert("A solicita��o de localiza��o expirou.");
 break;
 case error.UNKNOWN_ERROR:
 alert("Ocorreu um erro desconhecido.");
 break;
 }
}