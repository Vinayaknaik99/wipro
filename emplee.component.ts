import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './Emplee.component.html',
  styleUrls: ['./Emplee.component.css']
})

export class EmployeeComponent {
  @Input() employee: any; // Accept employee data as input
  showDetails() {
    alert('Showing details for ' + this.employee.name);
  }
}

