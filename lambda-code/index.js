const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' }); // Set your region

exports.handler = async (event) => {
  const subject = 'test subject from lambda';
  const body = 'test body from lambda';

  const params = {
    Source: 'michaeltylerpalermo@gmail.com', // Replace with your verified SES email
    Destination: {
      ToAddresses: ['michaeltylerpalermo@gmail.com'], // Replace with recipient email
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: body,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const response = await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
      },
      body: JSON.stringify({ message: 'Email sent successfully', response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
