import { describe, it, expect } from 'vitest';
import { danishIsYesterday } from '../index';

describe('danishIsYesterday', () => {
  it('skal returnere sandt for i gårs dato', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(danishIsYesterday(yesterday)).toBe(true);
  });

  it('skal returnere falsk for i dag', () => {
    expect(danishIsYesterday(new Date())).toBe(false);
  });

  it('skal returnere falsk for i morgen', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(danishIsYesterday(tomorrow)).toBe(false);
  });

  it('skal returnere sandt for i gårs dato som streng', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(danishIsYesterday(yesterday.toISOString())).toBe(true);
  });

  it('skal returnere falsk for i dags dato som streng', () => {
    expect(danishIsYesterday(new Date().toISOString())).toBe(false);
  });

  it('skal returnere falsk for i morgen dato som streng', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(danishIsYesterday(tomorrow.toISOString())).toBe(false);
  });
});
