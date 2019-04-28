import * as dynamoDB from './lib/dynamodb-lib';
import { success, failure } from './lib/response-lib';

export async function get(event, context, callback) {
  const params = {
    TableName: "LissnerRecipesFlavorQuotes"
  }

  try {
    const result = await dynamoDB.call('scan', params);

    callback(null, success(result.Items));
  } catch (err) {
    console.error(err);

    callback(null, failure({ status: false }));
  }
}