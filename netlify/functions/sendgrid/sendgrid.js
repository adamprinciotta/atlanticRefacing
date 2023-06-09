import axios from 'axios';

export async function handler(event, context) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const formData = JSON.parse(event.body);

  try {
    const response = await axios.post(`${process.env.URL}/.netlify/functions/emails/sendGridEmail`, {
      from: "adamprinciotta@gmail.com",
      to: "adamprinciotta@gmail.com",
      subject: "New Estimate Request",
      parameters: {
        name: formData.name,
        city: formData.city,
        state: formData.state,
        homePhone: formData.homePhone,
        cellPhone: formData.cellPhone,
        email: formData.email,
      },
    }, {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
    });

    if (!response.status === 200) {
      return {
        statusCode: response.status,
        body: JSON.stringify(`Email failed to send: ${response.statusText}`),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify("Email sent!"),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(`Server error: ${error}`)
    };
  }
};
