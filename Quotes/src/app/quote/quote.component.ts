import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote []=[
    new Quote(1,'Alex','Have faith and believe it will manifest','inspiration','from the secrets of life'),
 
  ];


  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sur you want to delete ${this.quotes[index].name}`)
      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    
    this.quotes.push(quote);
    

  }
  
  constructor() { }

  ngOnInit() {
  }

}
