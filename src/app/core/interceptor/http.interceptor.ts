import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment/environment';

export const httpInterceptor: HttpInterceptorFn = ( req, next ) => {
	const token = environment.TOKEN;
	const authRequest = req.clone( {
		setHeaders: {
			Authorization: `Bearer ${ token }`
		}
	} )
	return next( authRequest );
};
