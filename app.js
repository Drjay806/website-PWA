if ("serviceWorker" in navigator) {
  // defer service worker installation until page completes loading
  window.addEventListener("load", () => {
    //then register our service worker
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => {
        //display a success message
        console.log("Service Worker Registration (Scope: ${reg.scope})");
      })
      .catch((error) => {
        // display an error message
        console.log("Service Worker Error (${error})");
      });
  });
} else {
  //happens when the app isn't served over a TLS connection (HTTPS)
  //or if ther browser doesn't support the service worker
  console.log("Service Worker not avalible");
}
