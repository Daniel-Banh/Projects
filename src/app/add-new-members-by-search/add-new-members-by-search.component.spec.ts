import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule } from 'igniteui-angular';
import { AddNewMembersBySearchComponent } from './add-new-members-by-search.component';

describe('AddNewMembersBySearchComponent', () => {
  let component: AddNewMembersBySearchComponent;
  let fixture: ComponentFixture<AddNewMembersBySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMembersBySearchComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMembersBySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
