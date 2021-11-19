import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render Voltios = Resistencia eléctrica • Intensidad de corriente', () => {
    let de = fixture.debugElement.query(By.css('h4'));
    let el: HTMLElement = de.nativeElement;
    // Assert
    expect(el.innerText).toContain('Voltios = Resistencia eléctrica • Intensidad de corriente');
  });

  it('should call calcular method', () => {
    // Arrange
    component.r = 2;
    component.i = 2;
    // Act
    component.calcular();
    // Assert
    expect(component.resultado).toBe(4);
  });

  it('should add r & i when i click the calcular button', () => {
    // Arrange 
    component.r = 2.5;
    component.i = 2.5;
    let additionButton = fixture.debugElement.query(By.css('.btn'));
    // Act
    additionButton.triggerEventHandler('click', null);
    // Assert
    expect(component.resultado).toBe(6.25);
  });

  it('should replace the formula V = R • I by what you write', () => {
    // Arrange
    component.r = 2.65;
    component.i = 9.6546;
    // Act
    component.calcular();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.formula span h4'));
    let el: HTMLElement = de.nativeElement;
    // Assert
    expect(el.innerText).toContain('25.58469 v = 2.65 • 9.6546');
  });

  it('should render result in h4', () => {
    // Arrange
    component.r = 5;
    component.i = 5;
    // Act
    component.calcular();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('h4'));
    let el: HTMLElement = de.nativeElement;
    // Assert
    expect(el.innerText).toContain('25');
  });

  it('should only accept numbers', () => {
    // Arrange
    component.r = 'e+';
    component.i = 'hola';
    // Act
    component.calcular();
    // Assert
    expect(component.resultado).toEqual(NaN);
  });

  it('should accept decimals', () => {
    // Arrange
    component.r = 14.55;
    component.i = 2.85;
    // Act
    component.calcular();
    // Assert
    expect(component.resultado).toBe(41.4675);
  });

  it('should capture the typed', () => {
    // Arrange
    component.r = 123;
    component.i = 556;
    // Act
    component.calcular();
    // Assert
    expect(component.resultado).toBe(68388);
  });
});