import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule, IgxAvatarModule } from 'igniteui-angular';
import { AboutUsPageComponent } from './about-us-page.component';

describe('AboutUsPageComponent', () => {
  let component: AboutUsPageComponent;
  let fixture: ComponentFixture<AboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsPageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
