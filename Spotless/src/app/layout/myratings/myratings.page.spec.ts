import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyratingsPage } from './myratings.page';

describe('MyratingsPage', () => {
  let component: MyratingsPage;
  let fixture: ComponentFixture<MyratingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyratingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyratingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
