function orderCake(cakeName) {
  let phone = "6381520658"; // replace with YOUR WhatsApp number
  let message = "Hello, I want to order " + cakeName;
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}