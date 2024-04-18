// Write your solution in this file
const employee = {
    name: "Spencer",
    streetAddress: "2 Mount Joy",
  };
function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const employees = { ...employee };
  
    employees[key] = value;
  
    return  employees ;
  }
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  
    employee[key] = value;
  
    return  employee ;
  }

  function deleteFromEmployeeByKey(employee, key) {
    
    const employees = { ...employee };

    delete employees.name;
  
    return  employees ;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee.name;
  
    return  employee ;
  }
