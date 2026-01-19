import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
employee:Employee={
  id:0,
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  position:''
}
errorMessage:string='';
constructor(private employeeService:EmployeeService, private router:Router){}
onSubmit():void {
  console.log(this.employee);
  this.employeeService.createEmployee(this.employee).subscribe({
    next:(employee)=>{
      console.log('Employee created successfully:',employee);
     this.router.navigate(['/']);
    }

    ,error:(error)=>{
      console.error('Error creating employee:',error);
      this.errorMessage='Failed to create employee. Please try again.';  
    }
  });
}
}
