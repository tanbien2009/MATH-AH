function test(){
  alert("App đang chạy OK");
}

// đăng ký service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
