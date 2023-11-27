import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDDBComponent } from './cruddb.component';

describe('CRUDDBComponent', () => {
  let component: CRUDDBComponent;
  let fixture: ComponentFixture<CRUDDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDDBComponent]
    });
    fixture = TestBed.createComponent(CRUDDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
