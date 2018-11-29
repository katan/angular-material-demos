import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SessionStorageService } from '@app/core/services/session-storage.service';
import { LoggerService } from '@app/core/services/logger.service';
import { API } from '@app/core/settings/index';
import { ApiHelper } from '@app/helpers/index';
import { ApiResponse, LoginRequest } from '@app/models/index';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _module: string;
	private url: string;

	constructor(
		private http: HttpClient,
		private sessionStorage: SessionStorageService,
		private logger: LoggerService
	) {
		this._module = 'authentication';
		this.url = ApiHelper.getApiUrl();
	}

	public login(userData: LoginRequest): Observable<ApiResponse> {
		const loginUrl = `${this.url}${ApiHelper.getApiUrn(this._module, 'login')}`;

		return this.http.post(loginUrl, userData).pipe(
			map((apiRes: ApiResponse) => {
				if (apiRes.IdError !== 0) {
					throw apiRes;
				}
				this.updateAuthenticationSession(apiRes);

				return apiRes;
			})
		);
	}

	public logout(): Promise<boolean> {
		return new Promise((resolve) => {
			// Call the server to remove the token
			const url = `${this.url}${ApiHelper.getApiUrn(this._module, 'logout')}`;
			this.http.get(url).subscribe(
				(() => {
					this.removeLocalSession();
					resolve(true);
				}),
				(error => {
					this.logger.error(error);
					this.removeLocalSession();
					resolve(true);
				})
			);
		});
	}

	public refresh(): Observable<any> {
		const url = `${this.url}${ApiHelper.getApiUrn(this._module, 'refresh')}`;
		// try to refresh the jwt token
		return this.http.get(url);
	}

	public updateAuthenticationSession(response: ApiResponse): void {
		// get payload data
		const payLoad = JSON.parse(response.PayLoad);

		// Save the login timestamp
		this.sessionStorage.set('timestamp', Date.now(), true);
		// Save user Guid
		this.sessionStorage.set('userGuid', payLoad.userData.Token);
		// Save user data
		this.sessionStorage.set('userData', payLoad.userData);
		// Save JWT token
		this.updateTokenSession(payLoad.token);
	}

	public updateTokenSession(token: string): void {
		this.sessionStorage.set('token', token);
	}

	public passwordRecovery(recovery: any): boolean {
		// TODO call to API 2.0 logout
		return true;
	}

	public hasLogged(): boolean {
		const userDataString = this.sessionStorage.get('userData');
		const userData = userDataString && JSON.parse(userDataString.toString());
		const userGuid = this.sessionStorage.get('userGuid');
		const token = this.sessionStorage.get('userGuid');

		return userData && userGuid && token && userData.Token === userGuid;
	}

	public getAuthorizationToken(): string {
		return this.sessionStorage.get('token').toString();
	}

	public getEnvironmentGuid(): string {
		return this.sessionStorage.get('environmentGuid').toString();
	}

	public getApiToken(): string {
		return API.TOKEN;
	}

	public removeLocalSession(): void {
		this.sessionStorage.clear();
	}
}
