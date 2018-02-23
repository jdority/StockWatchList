({
    parseAndPopulate : function (component, result, stockArr) {
        stockObj = new Object();
        stockObj.symbol = result.symbol;
        component.set("v.stale", "");
        stockObj.price = result.close;
        stockObj.price = parseFloat(Math.round(stockObj.price * 100) / 100).toFixed(2); //round up and format to 2 decimals
        stockObj.high = result.week52High;
        stockObj.high = parseFloat(Math.round(stockObj.high * 100) / 100).toFixed(2); //round up and format to 2 decimals
        stockObj.low = result.week52Low;
        stockObj.low  = parseFloat(Math.round(stockObj.low * 100) / 100).toFixed(2); //round up and format to 2 decimals
        stockObj.change = result.change;

        //Determine the change for visual representation (red/green)
        var nbr = new Number(stockObj.change);
        if(Math.sign(nbr) > 0) {
            stockObj.increase = true;
        }
        
        stockArr.push(stockObj);
        component.set("v.stockList", stockArr);        
        
    },
    processBadSymbol : function (component, symbol, stockArr) {
        var stockObj = new Object();
        stockObj.symbol = symbol;
        stockObj.price = 'NA';
        stockObj.high = 'NA';
        stockObj.low = 'NA';
        stockObj.change = 'NA';
        stockArr.push(stockObj);
        component.set("v.stockList", stockArr);
    }
})