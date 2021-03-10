module.exports = {
	// post: () => {
	// 	let url = "src/apis/user.php";

	// 	let query = {
	// 		username: "test",
	// 		password: "test"
	// 	};

	// 	// return new Promise((resolve, reject) => {
	// 		fetch(url, {
	// 			method: "POST",
	// 			body: JSON.stringify(query)
	// 		})
	// 			.then(data => data)
	// 			.then((data) => {
	// 				console.log(data)
	// 			})
	// 			// .catch((error) => {
	// 			// 	console.log(error)
	// 			// 	reject(error)
	// 			// });
	// 	// })

	// 	console.log(query)
	// }
	post: () => {
			let xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function() {
				if (this.readyState === 4 && this.status === 200) {
					// Typical action to be performed when the document is ready:
					console.log(this.responseText)
				}
			};

			xhttp.open("POST", "php/user.php", true);
			xhttp.send();
		
	},
	post2: (test) => {
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				// console.log(this.responseText)
				return this.responseText;
				// if (this.responseText != "cookieNo" && this.responseText != "cookieFake") {
				// 	document.querySelector("#signInContainer").innerHTML = this.responseText;
				// 	mechanics.userMenuMechanics();
				// 	mechanics.userCommentsMechanics();
				// 	mechanics.userSectionMechanics();
				// }
			}
		}

		xhr.open("POST", `php/user.php`, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(`user=${test}`);
	}
}