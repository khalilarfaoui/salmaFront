import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const userId = sessionStorage.getItem('userId');
    console.log(userId, "in sessions")
    if (userId) {
      const authReq = req.clone({
        headers: req.headers.set('userId', userId)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
