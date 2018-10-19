import { select, Store } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Observable } from 'rxjs/Observable';
import { publishReplay, refCount } from 'rxjs/operators';

export class StoreUtil {
  public static select<TStore, TResult>(store: Store<TStore>, selector: MemoizedSelector<TStore, TResult>): Observable<TResult> {
    return store.pipe(select(selector), publishReplay(1), refCount());
  }
}
