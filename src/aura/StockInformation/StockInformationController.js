({
	doInit : function(component, event, helper) {
        
        //The framework  doesn't seem to allow reusing the action var on multiple calls
        //since they are executed async, therefore multiple vars pointing to the same controller
		var action = component.get("c.getStockInfo");
        var action2 = component.get("c.getStockInfo");
        var action3 = component.get("c.getStockInfo");

        var stockObj = {"symbol":"","price":"","high":"","low":"","change":"","increase":""};
        var stockArr = new Array();
        
        if(component.get("v.firstSymbol") == null || component.get("v.firstSymbol") == '') {
            component.set("v.firstSymbol", "CRM"); //if nothing is provided, get the Salesforce price
        }
        action.setParams({ symbol : component.get("v.firstSymbol") });
        action.setCallback(this, function(a) {
            if (a.getReturnValue() !== null && a.getReturnValue() !== '' && !a.getReturnValue().includes('Unknown symbol')) {
                var result = JSON.parse(a.getReturnValue());
                if(result.symbol === undefined) {
                    helper.processBadSymbol(component, component.get("v.firstSymbol"), stockArr);
                } else {
                    helper.parseAndPopulate(component, result, stockArr);
                }                
            }
            else {helper.processBadSymbol(component, component.get("v.firstSymbol"), stockArr);}
        });
        $A.enqueueAction(action);
        
        if(component.get("v.secondSymbol") != null && component.get("v.secondSymbol") !== '') {
            action2.setParams({ symbol : component.get("v.secondSymbol") });
            action2.setCallback(this, function(a) {
                if (a.getReturnValue() !== null && a.getReturnValue() !== '' && !a.getReturnValue().includes('Unknown symbol')) {
                    var result = JSON.parse(a.getReturnValue());
                    if(result.symbol === undefined) {
                        helper.processBadSymbol(component, component.get("v.secondSymbol"), stockArr);
                    } else {
                    	helper.parseAndPopulate(component, result, stockArr);
                    }
                }
                else {helper.processBadSymbol(component, component.get("v.secondSymbol"), stockArr);}
            });
            $A.enqueueAction(action2);
        }
        
        if(component.get("v.thirdSymbol") != null && component.get("v.thirdSymbol") !== '') {
            action3.setParams({ symbol : component.get("v.thirdSymbol") });
            action3.setCallback(this, function(a) {
                if (a.getReturnValue() !== null && a.getReturnValue() !== '' && !a.getReturnValue().includes('Unknown symbol')) {
                    var result = JSON.parse(a.getReturnValue());
                    if(result.symbol === undefined) {
                        helper.processBadSymbol(component, component.get("v.thirdSymbol"), stockArr);
                    } else {
                    	helper.parseAndPopulate(component, result, stockArr);
                    }
                }
                else {helper.processBadSymbol(component, component.get("v.thirdSymbol"), stockArr);}
            });
            $A.enqueueAction(action3);
        }
        
	},
})