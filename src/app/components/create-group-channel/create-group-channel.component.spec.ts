import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupChannelComponent } from './create-group-channel.component';

describe('CreateGroupChannelComponent', () => {
  let component: CreateGroupChannelComponent;
  let fixture: ComponentFixture<CreateGroupChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroupChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
