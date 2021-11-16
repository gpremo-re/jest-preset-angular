import path from 'path';

import { jsonNoCache as runWithJsonNoCache } from '../run-jest';
import { runYarnInstall } from '../utils';

const DIR = path.join(__dirname, '..', 'custom-typings');

beforeAll(() => {
  runYarnInstall(DIR);
});

test(`successfully runs the tests inside ${DIR} with isolatedModules: false`, () => {
  const { json } = runWithJsonNoCache(DIR);

  expect(json.success).toBe(true);
});

test(`successfully runs the tests inside ${DIR} with isolatedModules: true`, () => {
  const { json } = runWithJsonNoCache(DIR, ['-c=jest-isolated.config.js']);

  expect(json.success).toBe(true);
});