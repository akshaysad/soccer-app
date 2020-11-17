import {ADD_NOTIFICATION, LOAD_API_LOADER} from "../constants/action-types";

export function addNotification(payload)
{
	return { 
		type: ADD_NOTIFICATION, payload 
	};
}

export function loadApiLoader(payload)
{
	return { 
		type: LOAD_API_LOADER, payload 
	};
}


