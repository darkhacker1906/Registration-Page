export interface FormField {
    name: string;
    label: string;
    type: string;
    value:any;
    options?: string[];
  }
  
 export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirm_password: string;
    age: string;
    gender: string;
    comment: string;
    mobileNo: string;
  }