import { TestBed } from '@angular/core/testing';

import { ContactBotService } from './contact-bot.service';

describe('ContactBotService', () => {
  let service: ContactBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
