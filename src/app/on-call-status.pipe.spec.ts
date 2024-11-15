import { OnCallStatusPipe } from './on-call-status.pipe';

describe('OnCallStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new OnCallStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
