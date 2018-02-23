# StockWatchList by Patrick Quackenbush
For use by Attendees of TrailheadX to use as a template component.
The Stock Watchlist Component allows you to specify up to three stocks to display information for. It displays the closing price as well as the high and low price for the day. Stock info is coming from the free IEX Trading API (Yahoo is retiring their finance APIs after acquisition). There are positive and negative visualizations (red/green) for the price change since prior day close. Invalid symbols will display as NA.

Clicking the symbol link opens the stock in Yahoo's finance page.

Component works on any LEX page as well as LEX Communities. Demo candy for investor or advisor personas. Great way to quickly demo a working external API call as well.

Setup Instruction
Simply install the package and drop on any LEX page. Component is configurable for up to three stock symbols. If no symbols are provided, it will always display Salesforce's stock price. Invalid symbols display as NA.


