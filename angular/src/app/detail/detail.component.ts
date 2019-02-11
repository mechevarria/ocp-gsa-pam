import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaseService } from '../table/lease.service';
import { Lease } from '../table/lease';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  lease: Lease;

  constructor(private route: ActivatedRoute, private leaseService: LeaseService, private messageService: MessageService) {
    this.lease = null;
  }

  update(): void {
    this.messageService.success('Updated lease');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(routeParams => {
      if (routeParams.id) {
        this.leaseService.get(routeParams.id).subscribe(res => {
          this.lease = res;
        });
      }
    });
  }
}