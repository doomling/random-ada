var body = document.getElementById('lista');

listItem = document.getElementById('entry');

listMaster = document.getElementById('todo');

var even = false;

function addToList () {
	console.log(entry.value);
	var li = document.createElement('li');
	li.textContent = entry.value;
	listMaster.appendChild(li);

		if (even == true) {
		li.setAttribute('class','list-alternative');	
		even = false;
		} else {
			even = true;
		}

	entry.value = "";
}

//parrafo.setAttribute('class','text');