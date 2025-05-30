export class SubscriptionPlan {
  constructor(id, nameKey, descriptionKey, price, stars) {
    this.id = id
    this.name = nameKey
    this.description = descriptionKey
    this.price = price
    this.stars = stars
  }
}

export const PLANS = [
  new SubscriptionPlan(
    'monthly',
    'subscription.plans.monthly',
    'subscription.plans.monthlyDescription',
    39,
    1
  ),
  new SubscriptionPlan(
    'quarterly',
    'subscription.plans.quarterly',
    'subscription.plans.quarterlyDescription',
    99,
    3
  ),
  new SubscriptionPlan(
    'yearly',
    'subscription.plans.yearly',
    'subscription.plans.yearlyDescription',
    179,
    5
  )
]
