import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule } from 'igniteui-angular';
import { AddANewUserComponent } from './add-a-new-user.component';

describe('AddANewUserComponent', () => {
  let component: AddANewUserComponent;
  let fixture: ComponentFixture<AddANewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddANewUserComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddANewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
