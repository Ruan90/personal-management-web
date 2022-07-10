import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(this.tokenService.checkToken()){
            const token = this.tokenService.getToken();
            const headers = new HttpHeaders().append('Authorization', token);
            req = req.clone({ headers });
        }
        return next.handle(req);
    }
}