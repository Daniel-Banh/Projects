import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule } from 'igniteui-angular';
import { ChatsMainInterfaceComponent } from './chats-main-interface.component';

describe('ChatsMainInterfaceComponent', () => {
  let component: ChatsMainInterfaceComponent;
  let fixture: ComponentFixture<ChatsMainInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsMainInterfaceComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsMainInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
