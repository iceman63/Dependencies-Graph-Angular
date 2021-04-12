// import { Injectable } from '@angular/core';
// import { User } from '@app/core/models';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { distinctUntilChanged, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserSecurityService {

//   #userChanged: BehaviorSubject<User>;

//   set user(value: User) {
//     if (this.#userChanged.value === value) {
//       return;
//     }

//     this.#userChanged.next(value);
//   }

//   get user(): User {
//     return this.#userChanged.value;
//   }

//   constructor() {
//     this.#userChanged = new BehaviorSubject<User>(null);
//   }

//   observe(): Observable<User> {
//     return this.#userChanged.asObservable();
//   }

//   hasUser(): boolean {
//     return this.user !== null;
//   }

//   observeRight(right: string): Observable<boolean> {
//     return this.observe().pipe(
//       map(x => this.hasRight(right)),
//       distinctUntilChanged()
//     );
//   }

//   hasRight(right: string) {
//     if (!this.user) {
//       return false;
//     }

//     return this.user.roles.some(x => x === right);
//   }
// }
