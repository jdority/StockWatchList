@isTest
public class StockInformationCallTest {
	@isTest
    static void RemoteCallTest() {

        Test.StartTest();
        
        Test.setMock(HttpCalloutMock.class, new StockInformationHttpCalloutMock());
        
        string result = StockInfoCall.getStockInfo('CRM');
        system.assert(result != '');
        system.assert(result.contains('CRM'));
        Test.stopTest();
    }
    
}