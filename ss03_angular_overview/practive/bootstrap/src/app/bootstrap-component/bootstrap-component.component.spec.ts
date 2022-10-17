import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponentComponent } from './bootstrap-component.component';

describe('BootstrapComponentComponent', () => {
  let component: BootstrapComponentComponent;
  let fixture: ComponentFixture<BootstrapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
