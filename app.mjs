import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "<<Authorization Token>>"
);
gateway.on("message", (m) => {
  if (m.channel_id === "<<Channel ID>>") {
    if (m.attachments.length !== 0){
     var attachment = m.attachments[0].url ? m.attachments[0].url : null
    }
    let message = [m.author.username + ' wrote ' +  m.content + ' - ' + attachment]
    console.log(message, 'content')

    client.sendWebhook(
      "<<Webhook>>",
      message[0]
    );
  }
});
