// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hero } = initSchema(schema);

export {
  Hero
};