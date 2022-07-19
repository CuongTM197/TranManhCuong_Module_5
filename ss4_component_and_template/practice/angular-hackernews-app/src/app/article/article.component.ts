import {Component, OnInit} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://www.webworm.co/p/glassdoor'
    },
    {
      title: 'Game of Life',
      url: 'https://www.aclu.org/news/privacy-technology/new-records-detail-dhs-purchase-and-use-of-vast-quantities-of-cell-phone-location-data'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://www.economist.com/united-states/2022/07/07/to-hook-american-diners-an-invasive-species-of-carp-gets-a-new-name'
    }

  ];


  ngOnInit(): void {
  }

}
