// const client = require("@sendgrid/mail")

// function sendEmail(client, message, senderEmail, senderName) {
  
//   return new Promise((fulfill, reject) => {
//     const data = {
//       from: {
//         email: senderEmail,
//         name: senderName
//       },
//       subject: 'New Estimate',
//       to: senderEmail,
//       html: `Hey, you\'ve sent an email from Netlify Functions<br/>Message: ${message}`
//     }

//     client
//       .send(data)
//       .then(([response, body]) => {
//         fulfill(response)
//       })
//       .catch(error => reject(error))
//   })
// }

// exports.handler = function(event, context, callback) {
//   console.log("Made it to the handler")
//   const {
//     SENDGRID_API_KEY,
//     SENDGRID_SENDER_EMAIL,
//     SENDGRID_SENDER_NAME
//   } = process.env

//   const body = JSON.parse(event.body)
//   const message = body.message

//   client.setApiKey(SENDGRID_API_KEY)

//   sendEmail(
//     client,
//     message,
//     SENDGRID_SENDER_EMAIL,
//     SENDGRID_SENDER_NAME
//   )
//   .then(response => callback(null, { statusCode: response.statusCode }))
//   .catch(err => callback(err, null))
// }

// import { sendEmail } from "@netlify/emails";

// await sendEmail({
//   from: "",
//   to: "",
//   subject: "",
//   template: "sendGridEmail",
//   parameters: {
//     name: "", 
//     city: "", 
//     state: "", 
//     homePhone: "", 
//     cellPhone: "", 
//     email: ""
//   },
// });

import fetch from 'node-fetch';
import { sendEmail } from "@netlify/emails";

//const
// exports.handler
// exports.handler = async function (event, context) {
export async function handler(event, context) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const formData = JSON.parse(event.body);
  console.log("This is formData: " + formData.name)

  try{
      const response = await fetch(`${process.env.URL}/.netlify/functions/emails/sendGridEmail`, {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: "adamprinciotta@gmail.com",
        to: "adamprinciotta@gmail.com",
        subject: "test Subject",
        parameters: {
          name: formData.name,
          city: formData.city,
          state: formData.state,
          homePhone: formData.homePhone,
          cellPhone: formData.cellPhone,
          email: formData.email,
        },
      }),
    });
    console.log("This is the response: " + response.status)
    if(!response.ok){
      return{
        statusCode: response.status,
        body: JSON.stringify(`Email failed to send: ${await response.text()}`),
      };
    }

    console.log("Email should be sent")
    return {
      statusCode: 200,
      body: JSON.stringify("Email sent!"),
    };
  }
  catch(error){
    console.log("Error: " + error)
    return{
    statusCode: 500,
    body: JSON.stringify(`Server error: ${error}`)
    }
  }
};

// export { handler };

