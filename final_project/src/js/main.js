var vm = new Vue({
	el: '#validation',
	data: {
		username: null,
		password: null,
		checkPassword: null
	},
	computed: {
		notSamePasswords() {
			if (this.passwordsFilled) {
				return (this.password !== this.checkPassword)
			} else {
				return false
			}
		},
		passwordsFilled() {
			return (this.password != '' && this.checkPassword != '')
		}
	}
})

document.onload = () => {
	let footer = document.getElementById("footer-content");

	footer.innerText = "@Copyright " + Date.now + " by Martin Jordanov"
}