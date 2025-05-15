const KEY = 'currentSubscription'

export const SubscriptionService = {
  getCurrent() {
    const data = localStorage.getItem(KEY)
    return data ? JSON.parse(data) : null
  },
  subscribe(plan) {
    localStorage.setItem(KEY, JSON.stringify(plan))
  },
  cancel() {
    localStorage.removeItem(KEY)
  }
}
