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
