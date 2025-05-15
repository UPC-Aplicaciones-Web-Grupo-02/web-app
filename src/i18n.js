import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    subscription: {
      title: 'Subscription',
      description: 'In Movix we offer three subscription plans with unique benefits.',
      descriptionCurrent: 'This is your current subscription, you can change it whenever you want.',
      success: 'Payment was successful. Contact the owner to proceed.',
      canceled: 'Subscription cancelled successfully.',
      successTitle: 'Payment Successful',
      successMessage: 'Contact the owner to proceed with the pickup.',
      plans: {
        monthly: 'Monthly Plan',
        quarterly: 'Quarterly Plan',
        yearly: 'Annual Plan',
        monthlyDescription: 'Access 7 days a week. 100% guaranteed scooters.',
        quarterlyDescription: '30 days continuous access with preferred pickup benefits.',
        yearlyDescription: 'Full benefits access for 1 year.'
      }
    },
    modal: {
      pay: 'Subscribe',
      cancel: 'Cancel',
      confirmCancel: 'Are you sure you want to cancel your membership?',
      noRefund: 'There will be no refund.',
      back: 'Go back',
      confirm: 'Confirm',
      successTitle: 'Payment Successful',
      successDescription: 'Contact the owner to proceed with the pickup.',
      paymentTitle: 'Medio de pago',
      warningDescription: 'Remember to enter real data or the payment will be denied.',
      close: 'Close',
      ok: 'Accept',
      change: 'Change',
      changeTitle: 'Are you sure you want to change your membership?',
      changeDescription: 'It will be complemented with your current membership.'
    },
    form: {
      cardNumber: 'Card Number',
      expiration: 'Expiration Date',
      cvv: 'CVV',
      account: 'Destination Account',
      totalToPay: 'Total to pay'
    },
    sidebar: {
      mySubscription: 'My Subscription',
      profile: 'Profile',
      logout: 'Logout'
    }
  },
  es: {
    subscription: {
      title: 'Suscripción',
      description: 'En Movix contamos con tres planes de suscripción que te brindarán beneficios únicos.',
      descriptionCurrent: 'Esta es tu suscripción actual, puedes cambiarla cuando gustes.',
      success: 'Pago realizado con éxito. Contacta al dueño para proceder.',
      canceled: 'Suscripción cancelada exitosamente.',
      successTitle: 'Pago realizado con éxito',
      successMessage: 'Contáctate con el dueño para realizar el recojo.',

      plans: {
        monthly: 'Plan Mensual',
        quarterly: 'Plan Trimestral',
        yearly: 'Plan Anual',
        monthlyDescription: 'Acceso de lunes a domingo. Scooters 100% garantizados.',
        quarterlyDescription: '30 días de acceso con beneficios de recojo preferencial.',
        yearlyDescription: 'Acceso total a los beneficios durante 1 año.'
      }
    },
    modal: {
      pay: 'Suscríbete',
      cancel: 'Cancelar',
      confirmCancel: '¿Estás segur@ de cancelar tu membresía?',
      noRefund: 'No habrá reembolso del dinero.',
      back: 'Regresar',
      confirm: 'Confirmar',
      successTitle: 'Pago realizado con éxito',
      successDescription: 'Contáctate con el dueño para realizar el recojo.',
      paymentTitle: 'Medio de pago',
      warningDescription: 'Recuerda poner los datos reales o el pago será denegado.',
      close: 'Cerrar',
      ok: 'Aceptar',
      change: 'Cambiar',
      changeTitle: '¿Estás segur@ que deseas cambiar tu membresía?',
      changeDescription: 'Se complementará con tu actual membresía.'
    },
    form: {
      cardNumber: 'Número de tarjeta',
      expiration: 'Fecha de vencimiento',
      cvv: 'Números posteriores',
      account: 'Cuenta destino',
      totalToPay: 'Total a pagar'
    },
    sidebar: {
      mySubscription: 'Mi suscripción',
      profile: 'Perfil',
      logout: 'Cerrar sesión'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'es',
  messages
})

export default i18n
