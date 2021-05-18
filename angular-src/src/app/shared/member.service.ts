import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  selectedMember: Member = new Member;
  members: Member[] = [];
  readonly baseURL = 'http://127.0.0.1:3000/members'

  constructor(private http:HttpClient) { }

  postMember(mem:Member){
    return this.http.post(this.baseURL, mem);
  }

  getMemberList(){
    return this.http.get(this.baseURL)
  }
}
