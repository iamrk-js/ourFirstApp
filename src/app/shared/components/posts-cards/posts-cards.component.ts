import { Component, OnInit } from '@angular/core';
import { posts } from '../../const/posts';
import { Ipost } from '../../models/student.interface';

@Component({
  selector: 'app-posts-cards',
  templateUrl: './posts-cards.component.html',
  styleUrls: ['./posts-cards.component.scss']
})
export class PostsCardsComponent implements OnInit {
  postsData : Array<Ipost> = posts; // Array of Objects
  constructor() { }

  ngOnInit(): void {
  }

}
