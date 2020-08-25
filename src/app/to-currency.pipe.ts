import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCurrency'
})
export class ToCurrencyPipe implements PipeTransform {

  transform(currencyCents: number): string {
    return currencyCents.toFixed(2);
  }
}
