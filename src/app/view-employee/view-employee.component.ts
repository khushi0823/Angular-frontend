import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {
  id:number;
  employee:Employee;
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService){
    

  }

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

      this.employee=new Employee();
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee=data;
      });
  }

}
