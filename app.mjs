import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "NTgwMzk5MjUwNDI5NzA2MjUw.Gq7eWI.1VHF2ECij2XcN49gDFJSznop-L4Vw2OkhQ-dXo" // Authorization token
);

gateway.on("message", (m) => {
  if (m.channel_id === "875721887584485436") { // Channel ID
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    console.log(content, m.embeds[0])

    client.sendWebhook(
      "https://discord.com/api/webhooks/1001484249934872636/q_QVRpJPKnAwyP1WTIC2kHNtd1ll257tWx-W4AKHTVMyMCN4HDdDvfkOHSr8X2e28fal", // Webhook
      content
    );
  }
});
