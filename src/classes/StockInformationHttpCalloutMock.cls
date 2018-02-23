@isTest
global class StockInformationHttpCalloutMock implements HttpCalloutMock {
	// Implement this interface method
    global HTTPResponse respond(HTTPRequest req) {
        // Create a fake response
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('{"symbol":"CRM"}');
        res.setStatusCode(200);
        return res;
    }
}