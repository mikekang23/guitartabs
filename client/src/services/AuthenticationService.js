import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   remail: 'testing@gmail.com',
//   password: '123456'
// })