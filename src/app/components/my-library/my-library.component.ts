import {Component, OnInit, ViewChild} from '@angular/core';

// read books from json file
import json from 'src/assets/books.json';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {

  // define colums displayed in the table
  displayedColumns: string[] = ['title', 'author', 'date', 'image'];

  // read books data from json file
  books = new MatTableDataSource(json);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.books.sort = this.sort;
  }

}
