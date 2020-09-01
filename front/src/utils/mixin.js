import { mapActions, mapGetters } from 'vuex'

export const loginMixin = {
  computed: {
    ...mapGetters([
      'formStatus'
    ])
  },
  methods: {
    ...mapActions([
      'setFormStatus'
    ]),
    linkToLogin: function () {
      this.$router.push('/form/login')
      this.setFormStatus(true)
    },
    linkToRegister: function () {
      this.$router.push('/form/register')
      this.setFormStatus(false)
    }
  }
}
