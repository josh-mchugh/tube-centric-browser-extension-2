import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
