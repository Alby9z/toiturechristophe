import ServicePage from './ServicePage'
import services from '@/data/services.json'

export function Couverture() {
  return <ServicePage service={services.find((s) => s.id === 'couverture')} />
}

export function Zinguerie() {
  return <ServicePage service={services.find((s) => s.id === 'zinguerie')} />
}

export function Etancheite() {
  return <ServicePage service={services.find((s) => s.id === 'etancheite')} />
}
