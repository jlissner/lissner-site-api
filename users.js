import * as dynamoDB from './lib/dynamodb-lib';
import { success, failure } from './lib/response-lib';
import uuid from 'uuid';
import _kebabCase from 'lodash/kebabCase'
import _forEach from 'lodash/forEach'

const TableName = 'LissnerUsers'

export async function get(event, context, callback) {
  const params = {
    TableName,
  }

  try {
    const result = await dynamoDB.call('scan', params);

    callback(null, success(result.Items));
  } catch (err) {
    console.error(err);

    callback(null, failure({ status: false }));
  }
}

export async function create(event, context, callback) {
  const data = JSON.parse(event.body);
  const Item = {
    Id: data.Id,
  };

  const params = {
    TableName,
    Item,
  }

  try {
    const result = await dynamoDB.call('put', params);

    callback(null, success({ success: true, data: Item }));
  } catch (err) {
    console.error(err);

    callback(null, failure({ status: false }));
  }
}

export async function update(event, context, callback) {
  const data = JSON.parse(event.body);

  const params = {
    TableName,
    Key: {
      Id: data.Id,
    },
    UpdateExpression: 'SET favoriteRecipes = :favoriteRecipes',
    ExpressionAttributeValues: {
      ':favoriteRecipes': data.favoriteRecipes || null,
    }
  }

  try {
    const result = await dynamoDB.call('update', params);

    callback(null, success({ success: true, data }));
  } catch (err) {
    console.error(err);

    callback(null, failure({ status: false }));
  }
}