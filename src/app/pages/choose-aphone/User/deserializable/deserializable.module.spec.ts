import { DeserializableModule } from './deserializable.module';

describe('DeserializableModule', () => {
  let deserializableModule: DeserializableModule;

  beforeEach(() => {
    deserializableModule = new DeserializableModule();
  });

  it('should create an instance', () => {
    expect(deserializableModule).toBeTruthy();
  });
});
