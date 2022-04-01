import * as vacancy from './vacancy'
import * as Applicant from './Applicant'
import * as intevew from './interview'
import * as result from './result'

console.log("_______________________________________________________")
console.log("Available Vacancy in Different Technology.. Hurry up!!")
console.log("_______________________________________________________")
for(let i = 0 ; i <vacancy.vacancy.length;i++){
    var aspnet = new vacancy.Vacancy(vacancy.vacancy[i].vacancy_Id,vacancy.vacancy[i].vacancy_name,vacancy.vacancy[i].vacancy_no);
   aspnet.showVacancie();
}

console.log("_______________________________________________________")
console.log("Applicant for This Vacancies")
console.log("_______________________________________________________")
for(let i = 0 ; i<Applicant.applicat_list.length ; i++){
    var x = new Applicant.Applicant_categoories()
    let y = x.applicants(Applicant.applicat_list[i])
    console.table([
        [y[0],y[1],y[2],y[3]]
    ])
}

console.log("_______________________________________________________")
console.log("Applicant Interview Schedule")
console.log("_______________________________________________________")
intevew.schedule()

console.log("_______________________________________________________")
console.log("Interview Result")
console.log("_______________________________________________________")
result.schedule() 