/*  JavaScript 7th Edition
    Project 3
    

    Filename: p3.js
*/

//Employee names
var employeeNames = ['Joe Goldman', 'Amanda Hui','Rick Bash', 'Amo Tu','Rex Meo'];
//Number of hours worked
var workHours = [50,30,28,43,29];

function paySalary(employeeNames, workHours) {
    return employeeNames +" Total Salary this week: $"+ (workHours<=40?workHours*11: 40*11+(workHours-40)*15);
}

    var data="<option value='-1'>Select a name</option>";
    for(var i=0; i<employeeNames.length; i++){
        data += "<option value='"+i+"'>"+employeeNames[i]+"</option>";
    }
    document.getElementById("employeeList").innerHTML = data;



//Add paySalary function when page loads 
//window.addEventListener("load", paySalary);

//for (i = 0; i < employeeName.length; i++)
//document.getElementById("employee").onclick = paySalary;

//var option = "";
//for(var i=0; i<employeeName.length; i++)
//{
  // option += '<option value="'> + employeeName[i]+ '">' + employeeName[i] + "</option>"
//}
//document.getElementById('employeeName').innerHTML = option 



    //While work hours less than 40 count each hour for $11
    /*
    if ( workHours[i] <= 40) {
        let x = 11;
        let salaryFirst = x * workHours;
    } else { //While work hours more than 40 count each hour for $15 plus adding the base rate of $11 for 40 hours 
        let x = 15
        let salarySecond = ((workHours%40) * x) + (40 * 11);
    }
    //Calculate total salary
    let totalSalary = salaryFirst + salarySecond;

    //Print out total salary
    return employeeName "Total Salary this week: $" + totalSalary);*/
