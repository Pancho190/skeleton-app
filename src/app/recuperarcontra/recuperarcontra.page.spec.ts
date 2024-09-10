import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperarcontraPage } from './recuperarcontra.page';

describe('RecuperarcontraPage', () => {
  let component: RecuperarcontraPage;
  let fixture: ComponentFixture<RecuperarcontraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarcontraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
