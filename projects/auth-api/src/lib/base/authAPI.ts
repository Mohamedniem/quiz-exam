import { Observable } from "rxjs";

export abstract class authAPI {
    constructor() {}
    abstract login(data:any):Observable<any>;
    abstract register(data:any):Observable<any>;
    abstract logout():Observable<any>;
    abstract forgetpassword(data:any):Observable<any>
    abstract verifycode(data:any):Observable<any>
    abstract resetpassword(data:any):Observable<any>
    
}