export const calculateLoadValues = (b, adj, para, obj) => {
    para.vis[b] = 1;
    para.path.push(b);
    obj.curro = obj.curro * obj.currf + para.addInfo[b].f * para.addInfo[b].o;
    obj.currf += para.addInfo[b].f;
    obj.curro /= obj.currf;
    // var refPass={currf,curro};
    // if(adj[b].length===0)
    // para.allPath.push(para.path);
    adj[b].map((pnt) => {
        // console.log(pnt);
        if (para.vis[pnt] !== 1) {
            if (para.addInfo[pnt])
                if (para.addInfo[pnt].cb)
                    calculateLoadValues(pnt, adj, para, {
                        currf: obj.currf,
                        curro: obj.curro,
                    });
                else {
                    calculateLoadValues(pnt, adj, para, obj);
                }
        }
        // elses{
        // para.allPath.push(para.path);
        // }
    });
    para.l[b] = obj.currf;
    para.r[b] = obj.curro;
    para.path.pop();
    para.vis[b] = -1;
}


// Reading our test file
export const readExcel = (loadData,lineData) => {

    let bus = new Set();
    let link = [];

    lineData.forEach((row) => {
        //  console.log(row.keys[1]);
        bus.add(row.S);
        bus.add(row.R);
        let send = row.S;
        let receive = row.R;
        link.push({ from: send, to: receive });
    });
    
    let N = new Array(bus.size + 1);
    let La = new Array(bus.size + 1);
    let addInfo = new Array(bus.size + 1);

    lineData.forEach((row) => {
        let cb = row.CB === "Y" ? 1 : 0;
        addInfo[row.S] = {
            cb,
            f: row.F,
            o: row.O,
        };
    });

    loadData.forEach((row) => {
        N[row.bus] = row.N;
        La[row.bus] = row.L;
    });
    //  console.log(addInfo);
    //  console.log(N);
    //  console.log(La);
    return { bus: bus.size, link, N, La, addInfo };
}

export const calculate_indices = (bus, link, N, La, addInfo) => {
    let l = new Array(bus + 1);
    let r = new Array(bus+ 1);
    let path = new Array();
    let adj = new Array(bus + 1);
    let vis = new Array(bus + 1);

    for (let i = 0; i <= bus; i++) {
        adj[i] = new Array();
        vis[i] = 0;
    }

    //  console.log(adj);
    let para = {
        l,
        r,
        N,
        La,
        vis,
        path,
        addInfo,
        // allPath
    };

    link.forEach((row) => {
        //  console.log(typeof(row.to));
        adj[row.from].push(row.to);
    });

    //  for(let i=1;i<=bus.size;i++)
    //  console.log(adj[i]);
    for (let i = 1; i < bus + 1; i++) {
        if (para.vis[i] === 0) {
            calculateLoadValues(1, adj, para, { curro: 0, currf: 0 });
        }
    }
    //  console.log(para.l);
    //  console.log(para.r);
    //  calculateDependencyLoadPoint(para,dependencySet);

    //CALCULATING INDICES
    var totalConsumer = 0;
    var SAIFI = 0,
        SAIDI = 0,
        CAIDI = 0,
        TENS = 0,
        AENS = 0,
        ASAI = 0,
        ASUI = 0;
    for (let i = 1; i <= bus; i++) {
        if (para.l[i]) {
            // console.log(para.N);
            SAIFI += para.l[i] * para.N[i];
            SAIDI += para.l[i] * para.r[i] * para.N[i];
            TENS += para.La[i] * para.l[i] * para.r[i];
            totalConsumer += para.N[i];
        }
    }
    SAIFI /= totalConsumer;
    SAIDI /= totalConsumer;
    CAIDI = SAIDI / SAIFI;
    AENS = TENS / totalConsumer;
    ASAI = 1 - (SAIDI / 8760);
    ASUI = 1 - ASAI;
    // Customer oriented reliability indices
    console.log(SAIFI);
    console.log(SAIDI);
    console.log(CAIDI);
    console.log(ASAI);
    console.log(ASUI);
    // Energy oriented reliability indices
    console.log(TENS);
    console.log(AENS);

    return [SAIFI, SAIDI, CAIDI, TENS, AENS, ASAI, ASUI];
};