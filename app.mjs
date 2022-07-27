import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "<< Authorization Token >>"
);
gateway.on("message", (m) => {
  if (m.channel_id === "<< Channel ID >>") {
    let attachment = m.attachments[0] ? m.attachments[0].url : ''
    let message = [m.content + ' ' + attachment]
    console.log(message)

    client.sendWebhook(
      "<< Discord Webhook >>",
      message[0]
    );
  }
});
