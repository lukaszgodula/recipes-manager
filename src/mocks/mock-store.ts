import { BehaviorSubject } from 'rxjs';

export class MockStore<T> {

  reducers = new Map<string, BehaviorSubject<any>>();

  /**
   * simple solution to support selecting/subscribing to this mockstore as usual.
   * @param name reducer name
   * @returns {undefined|BehaviorSubject<any>}
   */
  select(name) {
    if (!this.reducers.has(name)) {
      this.reducers.set(name, new BehaviorSubject({}));
    }
    return this.reducers.get(name);
  }

  /**
   * used to set a fake state
   * @param reducerName name of your reducer
   * @param data the mockstate you want to have
   */
  mockState(reducerName, data) {
    this.select(reducerName).next(data);
  }

  dispatch(data: any) {
    // spy me
  }
}
