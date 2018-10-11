import { FalloutModule } from './fallout.module';

describe('FalloutModule', () => {
  let falloutModule: FalloutModule;

  beforeEach(() => {
    falloutModule = new FalloutModule();
  });

  it('should create an instance', () => {
    expect(falloutModule).toBeTruthy();
  });
});
