import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "money-sphere", // Unique app ID
    name: "MoneySphere",
    retryFunction: async (attempt) => ({
        delay: Math.pow(2, attempt) * 1000, // Exponential backoff
        maxAttempts: 2,
    }),
});
