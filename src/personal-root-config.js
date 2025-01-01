registerApplication({
  name: "@personal/app1",
  app: () => System.import("http://localhost:3000/static/js/main.js"),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@personal/app2",
  app: () => System.import("http://localhost:3001/static/js/main.js"),
  activeWhen: ["/app2"],
});

start();
