import { userContact } from "./../contact";
import { Component, OnInit } from "@angular/core";
import { contacts } from "../contacts";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.contacts = contacts
  }
addContact(newContact): void{
  console.log("Add contact has been called");
  this.contacts.unshift(newContact);
  alert("new contact added");
}
}
