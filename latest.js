var TABLE_DATA = {
	
	"rows" : [{
		"Price": 100,
		"id": 4,
		"Product": "produ1"
	},
	{
		"Price": 300,
		"id": 2,
		"Product": "produ2"
	},
	{
		"Price": 200,
		"id": 3,
		"Product": "produ3"
	},
	{
		"Price": 100,
		"id": 6,
		"Product": "produ4"
	},
	{
		"Price": 500,
		"id": 5,
		"Product": "produ5"
	},
	{
		"Price": 300,
		"id": 1,
		"Product": "produ5"
	}]
}

var timer; 
var arr = TABLE_DATA.rows;

insertRows = (tempArr) => {
	tempArr = tempArr ? tempArr : TABLE_DATA.rows;
	const columns = document.querySelectorAll('th');
	let table = document.getElementsByTagName('table')[0];
	let tbody;
	/*let tbody = document.getElementById('tablebody') ? document.getElementById('tablebody') : {
			document.createElement('tbody');
			tbody.setAttribute('id','tablebody');
			table.appendChild(tbody);
	}*/
	
	if(document.getElementById('tablebody')){
		tbody = document.getElementById('tablebody');
	}else{
		tbody = document.createElement('tbody');
		tbody.setAttribute('id','tablebody');
		table.appendChild(tbody);
	}
	let rows = tempArr;
	let i;
	for(i=0;i<rows.length;i++){
		
		let tr = document.createElement('tr');
		
		let j;
		for(j=0;j<Object.keys(rows[i]).length;j++){
			let td = document.createElement('td');
			//let textNode = document.createTextNode(rows[i][Object.keys(rows[i])[j]]);
			let textNode = document.createTextNode(rows[i][columns[j].innerText]);
			td.appendChild(textNode);
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
}

sort = () => {
		TABLE_DATA.rows.sort((a,b) => {
			return  a.Price === b.Price?  a.id - b.id : a.Price - b.Price;
		})
		document.getElementById('tablebody').innerHTML = '';
		insertRows(TABLE_DATA.rows);
}

shuffle = () => {
	
  var m = arr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;

}

reorder = () => {
	var tempArr;
	timer = setInterval(() => {
		tempArr = shuffle();
		document.getElementById('tablebody').innerHTML = '';
		insertRows(tempArr);
	}, 1000);
}

stop = () => {
	clearInterval(timer);
}