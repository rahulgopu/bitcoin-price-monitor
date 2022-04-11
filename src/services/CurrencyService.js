import { currencies } from "./currenciesList";

export class CurrencyService {
    
    getSupportedCurrencies() {
        return currencies;
    }
}