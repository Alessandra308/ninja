document.getElementById("compartilharLocalizacao").addEventListener("click", function() {
 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(showPosition, showError);
 } else {
 alert("Geolocalização não é suportada por este navegador.");
 }
});
function showPosition(position) {
 var data = {
 latitude: position.coords.latitude,
 longitude: position.coords.longitude
 };
 // Envie os dados de localização para seu servidor ou API para armazenamento
 console.log(data);
}
function showError(error) {
 switch (error.code) {
 case error.PERMISSION_DENIED:
 alert("Usuário negou a solicitação de Geolocalização.");
 break;
 case error.POSITION_UNAVAILABLE:
 alert("Localização não disponível.");
 break;
 case error.TIMEOUT:
 alert("A solicitação de localização expirou.");
 break;
 case error.UNKNOWN_ERROR:
 alert("Ocorreu um erro desconhecido.");
 break;
 }
}