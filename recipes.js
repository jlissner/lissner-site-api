import * as dynamoDB from './lib/dynamodb-lib';
import { success, failure } from './lib/response-lib';
import uuid from 'uuid';
import _kebabCase from 'lodash/kebabCase'
import _forEach from 'lodash/forEach'

export async function get(event, context, callback) {
  const params = {
    TableName: "LissnerRecipes"
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

  _forEach(data.ingredients, (ingredient) => ingredient.title = ingredient.title ? ingredient.title : null)
  _forEach(data.directions, (direction) => direction.title = direction.title ? direction.title : null)
  const Item = {
    Id: uuid.v4(),
    recipeUrl: `/${_kebabCase(data.title)}`,
    author: data.author || null,
    description: data.description || null,
    note: data.note || null,
    title: data.title || null,
    cookTime: data.cookTime || null,
    serves: data.serves || null,
    ingredients: data.ingredients || null,
    directions: data.directions || null,
    tags: data.tags || null,
    createdBy: event.requestContext.identity.cognitoIdentityId,
  };

  const params = {
    TableName: "LissnerRecipes",
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

  _forEach(data.ingredients, (ingredient) => ingredient.title = ingredient.title ? ingredient.title : null)
  _forEach(data.directions, (direction) => direction.title = direction.title ? direction.title : null)

  const params = {
    TableName: "LissnerRecipes",
    Key: {
      Id: data.Id,
    },
    UpdateExpression: "SET author = :author, description = :description, note = :note, title = :title, cookTime = :cookTime, serves = :serves, ingredients = :ingredients, directions = :directions, tags = :tags, recipeUrl = :recipeUrl, comments = :comments",
    ExpressionAttributeValues: {
      ":author": data.author || null,
      ":description": data.description || null,
      ":note": data.note || null,
      ":title": data.title || null,
      ":cookTime": data.cookTime || null,
      ":serves": data.serves || null,
      ":ingredients": data.ingredients || null,
      ":directions": data.directions || null,
      ":tags": data.tags || null,
      ":recipeUrl": `/${_kebabCase(data.title)}` || null,
      ":comments": data.comments || null,
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