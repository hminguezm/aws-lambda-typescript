import { APIGatewayEvent, Context } from 'aws-lambda';
import { handler } from '../adapters/version';

describe('version handler', () => {
  const event = {
    body: 'Test Body',
  } as APIGatewayEvent;
  const context = {} as Context;
  const callback = () => {
    console.log('error');
  };

  it('returns a 200 statusCode', async () => {
    expect.hasAssertions();
    const result = await handler(event, context, callback);
    expect(result.statusCode).toBe(200);
  });
  it('an inputted event', async () => {
    expect.hasAssertions();
    const result = await handler(event, context, callback);
    const parsedResultBody = JSON.parse(result.body);
    expect(parsedResultBody.input).toStrictEqual(event);
  });
});
