export class SubscriptionPlan {
  constructor(id, name, description, price, stars) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.stars = stars
  }
}

export const PLANS = [
  new SubscriptionPlan(
    'monthly',
    'Plan Mensual',
    'Plan con acceso a 7 días de la semana. 100% garantizado los scooters.',
    39,
    1
  ),
  new SubscriptionPlan(
    'quarterly',
    'Plan Trimestral',
    'Plan con acceso a 30 días continuos con beneficios de retiro preferencial.',
    99,
    3
  ),
  new SubscriptionPlan(
    'yearly',
    'Plan Anual',
    'Plan con acceso con todos los beneficios durante 1 año.',
    179,
    5
  )
]
