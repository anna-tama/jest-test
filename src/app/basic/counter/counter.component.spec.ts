import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement; //test HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement; //test HTMLElement
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('increaseBy debe incrementar basado en el argumento', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });

  test('hacer click en los botones debe ++ y --', () => {
    const buttons = compiled.querySelectorAll('button');

    buttons[0].click(); //el primer botón es el de incremento
    expect(component.counter).toBe(11);

    buttons[1].click(); //el segundo botón es el de decremento
    buttons[1].click(); //el segundo botón es el de decremento
    expect(component.counter).toBe(9);
  });


  test('cambiar el conunter debe actualizar la etiqueta h1', () => {
    component.increaseBy(10);
    fixture.detectChanges(); //actualiza

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');
  });

});
