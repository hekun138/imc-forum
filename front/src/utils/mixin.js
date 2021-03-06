import { mapActions, mapGetters } from 'vuex'

export const loginMixin = {
  computed: {
    ...mapGetters([
      'formStatus',
      'sid'
    ])
  },
  methods: {
    ...mapActions([
      'setFormStatus',
      'setSid'
    ]),
    linkToLogin: function () {
      this.$router.push('/form/login')
      this.setFormStatus(0)
    },
    linkToRegister: function () {
      this.$router.push('/form/register')
      this.setFormStatus(1)
    },
    linkToForget: function () {
      this.$router.push('/form/forget')
      this.setFormStatus(2)
    }
  }
}
