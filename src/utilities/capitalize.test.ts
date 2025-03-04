import { test, expect } from 'vitest';
import capitalize from './capitalize';

test('capitalizes the word', () => {
    const input = 'word';
    const expected = 'Word';

    expect(capitalize(input)).toBe(expected);
});
