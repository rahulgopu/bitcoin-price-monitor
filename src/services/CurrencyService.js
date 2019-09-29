const currencies  = require('./currenciesList');

export class CurrencyService {
    
    getSupportedCurrencies() {
        return currencies;
    }
}