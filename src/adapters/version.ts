import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from 'aws-lambda';

const handler: Handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = true;
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      context,
      environment: process.env,
      input: event,
    }),
  };
  return response;
};

export { handler };
