import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlicuotaPage } from './alicuota.page';

describe('AlicuotaPage', () => {
  let component: AlicuotaPage;
  let fixture: ComponentFixture<AlicuotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlicuotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlicuotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
