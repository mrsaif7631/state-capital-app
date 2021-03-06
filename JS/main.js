
const find = document.getElementById('find');
const matchList = document.getElementById('match-list');
//search states.json and filter it
const searchStates = async searchText =>{
    const res = await fetch(`/state-capital-app/data/states.json`);
    const states = await res.json();
    //Get matches to current text input
    let matches = states.filter(state =>{
        const regex = new RegExp(`^${searchText}`,'gi');
        return state.name.match(regex)|| state.abbr.match(regex);
    
    });
    if(searchText.length === 0) {
matches = [];
matchList.innerHTML='';
    }
    outputHtml (matches);
};
//show results in  HTML
const outputHtml = matches => {
    if(matches.length >0){
        const html=matches.map(match => `
        <div class="output">${match.name}(${match.abbr}) <span class="ch-color">${match.capital}</span></div>`).join('');
        matchList.innerHTML=html;
    }
};
find.addEventListener("input", () => searchStates(find.value));

