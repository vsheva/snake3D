import { Event } from './eventTypes'

export interface ProtocolEvent extends Event {
  time: number
}
export type Protocol = ProtocolEvent[]
