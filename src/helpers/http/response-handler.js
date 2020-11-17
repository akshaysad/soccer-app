export const responseHandler = {
    response
};

function response(response)
{
    switch(response.status)
    {
        case 200:
            return response.data;
            break;
        case 201:
            return true;
            break;
        default:
            return true;
    }
}