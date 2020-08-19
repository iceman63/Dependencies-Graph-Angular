import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { snowStateSelector } from '@app/core/store/core.selectors';
import { CoreState, SnowState } from '@app/core/store/models';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { SnowComponent } from './snow.component';

describe('SnowComponent', () => {
  let component: SnowComponent;
  let fixture: ComponentFixture<SnowComponent>;
  let mockStore: MockStore;
  let snowSelectorMock: MemoizedSelector<CoreState, SnowState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowComponent ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.inject(MockStore);

    snowSelectorMock = mockStore.overrideSelector(snowStateSelector, { activated: false });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not displayed', () => {
    expect(fixture.nativeElement.children.length).toBe(0);
  });

  it('should display snow mode', () => {
    snowSelectorMock.setResult({ activated: true });
    mockStore.refreshState();
    fixture.detectChanges();

    expect(fixture.nativeElement.children.length).toBe(1);

  });
});
