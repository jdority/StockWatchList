public class StockInfoCall {
    @AuraEnabled
    public static string getStockInfo(string symbol) {
        
        string jsonResult = '';
       	//System.debug('StockInfoCall.getStockInfo for symbol: ' + symbol);
        if (symbol != null && symbol != '') {
            HttpRequest req = new HttpRequest();
            req.setEndpoint('https://api.iextrading.com/1.0/stock/' + symbol + '/quote'); 
            req.setMethod('GET');
            Http http = new Http();
            try{
                HTTPResponse res = http.send(req);
                jsonResult = res.getBody();
            } catch(Exception e) 
            {
                System.debug(e.getMessage());
                jsonResult = '';
            }
        }
        return jsonResult;
	}    
}