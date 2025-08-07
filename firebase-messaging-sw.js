importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAbsVCpF09twr4wpCYHB_cbA1oNkCuqtj0",
  projectId: "site-mundoteknologia",
  messagingSenderId: "171461943616",
  appId: "1:171461943616:web:07cb0ada17038be0641aa5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/images/wii.png' // Altere para o ícone desejado
    }
  );
});