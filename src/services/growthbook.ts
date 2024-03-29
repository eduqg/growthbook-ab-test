import { GrowthBook } from "@growthbook/growthbook-react";

export const growthbook = new GrowthBook({
  apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY,
  enableDevMode: true,
  subscribeToChanges: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system, can add google event here
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key
    });
  },
  // attributes: {
    // id: 'id-51', // Determina qual test a/b o usuário irá cair
    // admin: false // Se uma regra forcedRule para admin for true, mesmo quando a feature nao estiver em produção, posso testa la (para QA, devs)
  // }
});