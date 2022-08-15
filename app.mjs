import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "<< Authorization Token >>"
);
gateway.on("message", (m) => {
  if (m.channel_id === "<< Channel ID >>") {
    let content = m.content
    let attachment = m.attachments[0] ? m.attachments[0].url : ''
    let message = content + ' ' + attachment

    client.sendWebhook(
      "<< Discord Webhook >>",
      message
    );
  }
});
