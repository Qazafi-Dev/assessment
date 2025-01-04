registerApplication({
  name: "@personal/app1",
  app: () => System.import("@personal/app1"),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@personal/app2",
  app: () => System.import("@personal/app2"),
  activeWhen: ["/app2"],
});

start();
