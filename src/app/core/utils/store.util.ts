import 'rxjs/add/operator/publishReplay';

import { Store } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Observable } from 'rxjs/Observable';

export class StoreUtil {
    // use to share the same store value across multiple AsyncPipe uses (by default,
    // AsyncPipe creates new subscription for each pipe occurence)
    public static select<TStore, TResult>(store: Store<TStore>, selector: MemoizedSelector<TStore, TResult>): Observable<TResult> {
      return store.select(selector).publishReplay(1).refCount();
    }
  }
