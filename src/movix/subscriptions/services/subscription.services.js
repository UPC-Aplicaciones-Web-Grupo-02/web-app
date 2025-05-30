import axios from 'axios'

const API = 'http://localhost:3000'

export const SubscriptionService = {
  async fetchAll() {
    const res = await axios.get(`${API}/subscriptions`)
    return res.data
  },

  async getCurrent() {
    const res = await axios.get(`${API}/userSubscription`)
    const subs = res.data
    return subs.length ? subs[subs.length - 1] : null // toma la última suscripción
  },

  async create(plan) {
    return axios.post(`${API}/userSubscription`, plan)
  },

  async cancel(id) {
    return axios.delete(`${API}/userSubscription/${id}`)
  }
}
