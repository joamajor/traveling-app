import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { Friend } from '../../models/friend';

import { AuthService } from '../../services/auth.service';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  @Input() public user: User;
  public friend: Friend;

  public activeAction: boolean = false;
  public action: string = 'follow';

  constructor(
    
  ) {
    
  }

  ngOnInit() {
    
  }

}
