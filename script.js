/*let child = document.body.firstChild;
console.log(child);

//nextSibling - следующий (младший) брат
// previousSibling - старший брат

let caption = child.nextSibling;
console.log(caption);
*/

//let caption = document.body.firstElementChild;
//let form = caption.nextElementSibling;

let forms = document.forms[0];
//console.log(forms);

//let contactForm = document.forms["contact-Form"]
const contactForm = document.forms.contactForm;
//console.log(contactForm.id);
//console.log(contactForm.method);
//console.log(contactForm.elements); //покажет те элементы формы котор отправляются на сервер
let resultBlock = document.body.lastElementChild.previousElementSibling.lastElementChild;
console.log(resultBlock);

const sendForm = function(e) { //e - событие
	e.preventDefault(); //удалить событие которое было на этом теге по умолчанию (в нашем случает type=submit больше не будет перезагружать таблицу как следствие форма больше никуда не отправится).
	//console.log(e);

	let data = {};
	for(let i = 0; i < contactForm.elements.length; i++){

		let child = contactForm.elements[i];
		//console.log(child); //каждый элемент формы
		//console.log(child.nodeName);
		if(child.nodeName !== "BUTTON") {
			//console.log(child.id, child.value);
			data[child.name] = child.value;
		}
	}
	console.log(data);

	let table = `<table>`;
		for(let k in data){
			table += "<tr>";
			table += `<th>${k}</th>`;
			table += `<td>${data[k]}</td>`;
			table += "</tr>";
		}
		table += `</table>`;
		resultBlock.innerHTML = table;
		contactForm.reset();
}

let sub = contactForm.elements[contactForm.elements.length - 1];
//console.log("Кнопка", sub);

sub.onclick = sendForm;

let select = contactForm.elements[0];
let types = ["Сервис", "Консультация", "Ошибка", "Другое"];


for(let type of types) {
	let opt = new Option(type);
	//console.log(opt);

	//select.add(opt);
	select.add(opt, select[0]);

	select[0].selected = true;
}

/*let resultBlock = document.body.lastElementChild.previousElementSibling.lastElementChild;
console.log(resultBlock);*/



