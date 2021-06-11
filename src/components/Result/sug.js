import { loadData, lineData } from "../Input";
import {run_diagnosis_with_failureRates,run_diagnosis_with_outageTime,run_diagnosis_with_circuitBreaker} from './CalculateData/diagnosis';

function fn() {
let fr = [];
for(let i=0;i<7;i++){
    let temp = run_diagnosis_with_failureRates(loadData,lineData,i);
    fr.push(temp);
}
let ot = [];
for(let i=0;i<7;i++){
    let temp = run_diagnosis_with_outageTime(loadData,lineData,i);
    ot.push(temp);
}
let cb = [];
for(let i=0;i<7;i++){
    let temp = run_diagnosis_with_circuitBreaker(loadData,lineData,i);
    cb.push(temp);
}
console.log("RAN");
return{
    fr,ot,cb
}
}

export default fn;