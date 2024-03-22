import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEdicaoComponent } from './dialog-edicao.component';

describe('DialogEdicaoComponent', () => {
  let component: DialogEdicaoComponent;
  let fixture: ComponentFixture<DialogEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEdicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
