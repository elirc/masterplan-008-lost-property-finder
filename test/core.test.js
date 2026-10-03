import { test } from 'node:test';
import assert from 'node:assert/strict';

import { findBefore, isDateOnly } from '../public/core.js';
import { fixture } from '../public/fixtures.js';
test('strict cutoff excludes the equality boundary', () => { assert.deepEqual(findBefore(fixture,'2026-10-03').map(x=>x.id),['LP-01','LP-02']); });
test('empty and all-result cases', () => { assert.deepEqual(findBefore(fixture,'2026-10-01'),[]); assert.equal(findBefore(fixture,'2026-10-06').length,5); assert.deepEqual(findBefore([],'2026-10-03'),[]); });
test('real dates and leap years are validated', () => { assert.equal(isDateOnly('2024-02-29'),true); for(const d of ['2026-02-29','2026-04-31','2026-13-01','2026-1-01','0000-01-01']) assert.equal(isDateOnly(d),false); assert.equal(isDateOnly('2000-02-29'),true); assert.equal(isDateOnly('1900-02-29'),false); });
test('malformed cutoff is rejected', () => { for(const d of ['',null,'2026-02-30']) assert.throws(()=>findBefore(fixture,d)); });
test('source records are untouched and returned objects are independent shallow copies', () => { const input=fixture.map(x=>Object.freeze({...x})); Object.freeze(input); const result=findBefore(input,'2026-10-03'); result[0].label='changed'; assert.equal(input[0].label,'Blue umbrella'); assert.equal(input.length,5); });
test('malformed records, duplicates and non-arrays are rejected', () => { assert.throws(()=>findBefore({},'2026-10-03')); assert.throws(()=>findBefore([...fixture,fixture[0]],'2026-10-03')); assert.throws(()=>findBefore([{id:'x',label:'x',foundOn:'bad'}],'2026-10-03')); });
