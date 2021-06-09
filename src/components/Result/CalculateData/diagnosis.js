import { readExcel,calculate_indices } from './helperFn';

export const run_diagnosis_with_failureRates = (loadData, lineData, Indice_num) => {  
    //name of xlfile, name/accordingly_no. of indices to be reduced

    const { bus, link, N, La, addInfo } = readExcel(loadData,lineData);

    const initialList = calculate_indices(bus, link, N, La, addInfo);

    saifi = [], saidi = [], caidi = [], tens = [], aens = [], asai = [], asui = []
    index_list = [saifi, saidi, caidi, tens, aens, asai, asui]

    for (let i = 0; i < bus; i++) {

        let temp = addInfo[i].f
        addInfo[i].f *= 0.9          // 10 % decrease

        let List = calculate_indices(bus, link, N, La, addInfo)

        for (let j = 0; j < 7; j++)    index_list[j].push(List[j])

        addInfo[i].f = temp;
    }

    let minvalue = 10e8, index = 0;
    for (let i = 0; i < bus; i++) {
        if (index_list[Indice_num][i] < minvalue) {
            minvalue = index_list[Indice_num][i]
            index = i
        }
    }
    console.log(index);
    // index -> At which bus by reducing 10% failure rate, gives min value of initialList[Indice_num] ?

    if (minvalue <= 0.99 * initialList[Indice_num]) {
        const ansIndices = []
        for (let i = 0; i < 7; i++) ansIndices.push(index_list[i][index])
        return {
            index,
            ansIndices
        }
    }
    else return "Optimal Condition"
};

export const run_diagnosis_with_outageTime = (loadData, lineData, Indice_num) => {  
    //name of xlfile, name/accordingly_no. of indices to be reduced

    const { bus, link, N, La, addInfo } = readExcel(loadData,lineData);

    const initialList = calculate_indices(bus, link, N, La, addInfo)

    saifi = [], saidi = [], caidi = [], tens = [], aens = [], asai = [], asui = []
    index_list = [saifi, saidi, caidi, tens, aens, asai, asui]

    for (let i = 0; i < bus; i++) {

        let temp = addInfo[i].o
        addInfo[i].o *= 0.9          // 10 % decrease

        let List = calculate_indices(bus, link, N, La, addInfo)

        for (let j = 0; j < 7; j++)    index_list[j].push(List(j))

        addInfo[i].o = temp
    }

    let minvalue = 10e8, index = 0
    for (let i = 0; i < bus; i++) {
        if (index_list[Indice_num][i] < minvalue) {
            minvalue = index_list[Indice_num][i]
            index = i
        }
    }

    if (minvalue <= 0.99 * initialList[Indice_num]) {
        const ansIndices = []
        for (let i = 0; i < 7; i++) ansIndices.push(index_list[i][index])

        return {
            index,
            ansIndices
        }
    }
    else return "Optimal Condition"
};

export const run_diagnosis_with_circuitBreaker = (loadData, lineData, Indice_num) => {  
    //name of xlfile, name/accordingly_no. of indices to be reduced

    const { bus, link, N, La, addInfo } = readExcel(loadData,lineData);

    const initialList = calculate_indices(bus, link, N, La, addInfo)

    saifi = [], saidi = [], caidi = [], tens = [], aens = [], asai = [], asui = []
    index_list = [saifi, saidi, caidi, tens, aens, asai, asui]

    for (let i = 0; i < bus; i++) {

        if (addInfo[i].cb === 0) {

            addInfo[i].cb = 1          //  Added a Cbreaker

            let List = calculate_indices(bus, link, N, La, addInfo)

            for (let j = 0; j < 7; j++)    index_list[j].push(List(j))

            addInfo[i].cb = 0
        }
    }

    let minvalue = 10e8, index = 0
    for (let i = 0; i < bus; i++) {
        if (index_list[Indice_num][i] < minvalue) {
            minvalue = index_list[Indice_num][i]
            index = i
        }
    }

    if (minvalue <= 0.99 * initialList[Indice_num]) {
        const ansIndices = []
        for (let i = 0; i < 7; i++) ansIndices.push(index_list[i][index])

        return {
            index,
            ansIndices
        }
    }
    else return "Optimal Condition";
};
