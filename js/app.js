'use strict'

const margherita = {
	name: 'マルゲリータ',
	price: 1050,
	piece: 0
}


const siciliana = {
	name: 'シチリアーナ',
	price: 1150,
	piece: 0
}

const marinara = {
	name: 'マリナーラ',
	price: 850,
	piece: 0
}

const tuttifrutti = {
	name: 'Tutti Frutti',
	price: 1600,
	piece: 0
}

const focaccia = {
	name: 'フォカッチャ',
	price: 500,
	piece: 0
}

const arancini = {
	name: 'アランチーニ',
	price: 650,
	piece: 0

}

const cartInside = [];

function pcsTotal(cartArray) {
	let total = 0;
	for (let i = 0; i < cartArray.length; i++) {
		total = total + cartArray[i].piece;
	}
	return total;
}

function priceTotal(cartArray) {
	let total = 0;
	for (let i of cartArray) {
		total = total + i.price * i.piece;
	}
	return total;
}

function priceSubtotal(item) {
	let total = item.price * item.piece;
	return total;
}

function enteringData(cartArray) {
	document.getElementById('delivery-aside-pcs').textContent = `総量：${pcsTotal(cartArray)}個`;
	document.getElementById('delivery-aside-sum').textContent = `合計：${priceTotal(cartArray)}`;
}

/* index html 画像切替え 
==========================*/
// let cafeImage = [
// 	"images/bakery.jpg",
// 	"images/pizza.jpg",
// 	"images/panini.jpg"
// ]

// function* newIdx(index) {
// 	while (index < cafeImage.length) {
// 		yield index;
// 		index++;
// 		if (index === cafeImage.length) index = 0;
// 	}
// }

// let iterator = newIdx(0);

// function chgImg() {
// 	let i = iterator.next().value;
// 	let img = cafeImage[i];
// 	console.log(img);
// 	document.querySelector('.first-container-image-box img').src = img
// }
// setInterval(chgImg, 5000);

function viewSlide(className, slideNo = -1) {
	let imgArray = document.querySelectorAll(className);
	if (slideNo >= 0) {
		//初回以外は現在のスライドを消す
		imgArray[slideNo].style.opacity = 0;
	}
	slideNo++;

	if (slideNo >= imgArray.length) {
		slideNo = 0; //次のスライドがなければ最初のスライドへ戻る
	}
	imgArray[slideNo].style.opacity = 1;
	let msec = document.getElementById('slide_speed').value;
	setTimeout(function () {
		viewSlide(className, slideNo);
	}, 3000/* msec */);
}

window.addEventListener('load', function () {
	viewSlide('.first-container-image-box img')
})

//load イベントは HTML ページに含まれる画像やスタイルシートなどすべてのリソースの読み込みが完了した時点で発生するイベントです。
// window オブジェクトで発生します。





/* マルゲリータ 
=========================*/

document.getElementById('btn-margherita').onclick = function (e) {
	e.preventDefault();
	if (margherita.piece === 0) {
		margherita.piece += 1;
		cartInside.push(margherita);
	} else {
		margherita.piece += 1;
	}
	console.log(cartInside);
	enteringData(cartInside);

	let tr = '';
	let item = 0;
	for (item of cartInside) {
		tr = tr + `<tr>`;
		for (let p in item) {
			tr = tr + `<td>${item[p]}</td>`
		}
		tr = tr + `</tr>`;
	}

	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
}


/* シチリアーナ */

document.getElementById('btn-siciliana').addEventListener('click', function (e) {
	e.preventDefault();

	if (siciliana.piece === 0) {
		siciliana.piece += 1;
		cartInside.push(siciliana);
	} else {
		siciliana.piece += 1;
	}
	console.log(cartInside);
	enteringData(cartInside);

	let tr = '';
	let item = 0;
	for (item of cartInside) {
		tr = tr + `<tr>`;
		for (let p in item) {
			tr = tr + `<td>${item[p]}</td>`
		}
		tr = tr + `</tr>`;
	}

	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
});

/*マリナーラ */
document.getElementById('btn-marinara').onclick = function (e) {
	e.preventDefault();
	if (marinara.piece === 0) {
		marinara.piece += 1;
		cartInside.push(marinara);
	} else {
		marinara.piece += 1;
	}
	console.log(cartInside);
	enteringData(cartInside);

	let tr = '';
	let item = 0;
	for (item of cartInside) {
		tr = tr + `<tr>`;
		for (let p in item) {
			tr = tr + `<td>${item[p]}</td>`
		}
		tr = tr + `</tr>`;
	}

	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
}

/*TuttiFrutti*/
document.getElementById('btn-tuttifrutti').onclick = function (e) {
	e.preventDefault();
	if (tuttifrutti.piece === 0) {
		tuttifrutti.piece += 1;
		cartInside.push(tuttifrutti);
	} else {
		tuttifrutti.piece += 1;
	}
	console.log(cartInside);
	enteringData(cartInside);


	let tr = '';
	let item = 0;
	for (item of cartInside) {
		tr = tr + `<tr>`;
		for (let p in item) {
			tr = tr + `<td>${item[p]}</td>`
		}
		tr = tr + `</tr>`;
	}

	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
}

/*フォカッチャ */
document.getElementById('btn-focaccia').addEventListener('click', function (e) {
	e.preventDefault();
	if (focaccia.piece === 0) {
		focaccia.piece += 1;
		cartInside.push(focaccia);
	} else {
		focaccia.piece += 1;
	}
	console.log(cartInside);
	enteringData(cartInside);


	let tr = '';
	let item = 0;
	for (item of cartInside) {
		tr = tr + `<tr>`;
		for (let p in item) {
			tr = tr + `<td>${item[p]}</td>`
		}
		tr = tr + `</tr>`;
	}

	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
})

/*アランチーニ*/

document.getElementById('btn-arancini').onclick = function (e) {
	e.preventDefault();
	if (arancini.piece === 0) {
		arancini.piece += 1;
		cartInside.push(arancini);
	} else {
		arancini.piece += 1;
	}
	console.log(cartInside);
	enteringData(cartInside);

	let tr = '';
	let item = 0;
	for (item of cartInside) {
		tr = tr + `<tr>`;
		for (let p in item) {
			tr = tr + `<td>${item[p]}</td>`
		}
		tr = tr + `</tr>`;
	}

	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
}

/* お会計 to payment page */


document.getElementById('btn-payment-page').onclick = function () {
	const jsonData = JSON.stringify(cartInside);
	localStorage.setItem('cartInside', jsonData);
}




// function pcsTotal() {
// 	let total = 0;
// 	for (let i of cartInside) {
// 		total = total + i.piece;
// 	}
// 	return total;
// }




// for (let item = 0; item < cartInside.length; item++) {
// 	let tbody = tbody + `<tbody>`;

// 	for (let i of cartInside[i]) {
// 		tr = tr + `<tr>`;
// 		for (let p in i) {
// 			tr = tr + `<td>${i[p]}</td>`
// 		}
// 		tr = tr + `</tr>`;
// 	}
// 	tbody = tbody + `</tbody>`
// }
// document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);


// for (let siciliana of cartInside) {
// 	tr = tr + '<tr>';
// 	for (let p in siciliana) {
// 		tr = tr + `<td>${siciliana[p]}</td>`;
// 	}
// 	tr = tr + '</tr>';
// }



// let tr = "";

// 	for (let siciliana of cartInside) {
// 		tr = tr + '<tr>';
// 		for (let p in siciliana) {
// 			tr = tr + `<td>${siciliana[p]}</td>`;
// 		}
// 		tr = tr + '</tr>';
// 	}
// 	document.getElementById('sub-ordered').insertAdjacentHTML('beforeend', tr);
// <tbody>の記述をつける！！！！


