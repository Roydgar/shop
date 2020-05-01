/**
 * Shallow Test
 */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective } from './shared/testing-helpers';

let fixture: ComponentFixture<AppComponent>;


describe('AppComponent', () => {
  let links: RouterLinkStubDirective[];
  let linkElements: DebugElement[];

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);


    fixture.detectChanges();

    linkElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkStubDirective)
    );
    links = linkElements.map(
      d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective
    );

  });

  it('router links should be present in the template', () => {
    expect(links.length).toBe(5, 'should have 5 links');
    expect(links[0].linkParams).toBe(
      '/home',
      'home link'
    );
    expect(links[1].linkParams).toBe('/products', 'products link');
    expect(links[2].linkParams).toBe('/cart', 'cart link');
    expect(links[3].linkParams).toBe('/login', 'login link');
    expect(links[4].linkParams).toBe('/admin', 'admin link');
  });

  it('can click on a link in the template', () => {
    const productLinkDe = linkElements[0];
    const productLink = links[0];

    expect(productLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    productLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(productLink.navigatedTo).toBe('/home');
  });
});
