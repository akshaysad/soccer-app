

export const errorHandler = {
    response
};

function response(error) {
    if (error != undefined && error.response != undefined && error.response.status != undefined) {
        switch (error.response.status) {
            case 400:
                return false;
            case 401:

                window.location.reload();
                break;
            case 403:
                return false;
                break;
            case 404:
                return false;
                break;
            case 422:
                return error.response.data;
                break;
            case 500:
                return false;
            default:
                return error.response.data;
        }
    }
}
