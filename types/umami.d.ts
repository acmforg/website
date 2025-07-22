/**
 * Event data type for Umami tracking
 * Values can be string, number, or boolean
 */
type UmamiEventData = Record<string, string | number | boolean>

/**
 * Session data type for Umami identification
 */
type UmamiSessionData = Record<string, string | number | boolean>

/**
 * Payload type for direct tracking
 */
interface UmamiTrackPayload {
  /**
   * The URL to associate with the event (defaults to current URL)
   */
  url?: string

  /**
   * The website ID to associate with the event
   */
  website?: string

  /**
   * The hostname to associate with the event (defaults to current hostname)
   */
  hostname?: string

  /**
   * The referrer to associate with the event (defaults to document.referrer)
   */
  referrer?: string

  /**
   * The event name
   */
  event_name: string

  /**
   * The event data
   */
  event_data?: UmamiEventData
}

/**
 * Umami Analytics global object
 */
interface Umami {
  /**
   * Track a page view or custom event
   * @param url Optional URL to track (defaults to current URL)
   */
  trackView: (url?: string) => void

  /**
   * Track a custom event with optional event data
   * @param eventName Name of the event to track
   * @param eventData Optional data to associate with the event
   */
  track: (eventName: string, eventData?: UmamiEventData) => void

  /**
   * Track a custom event with a complete payload object
   * @param payload The complete tracking payload
   */
  track: (payload: UmamiTrackPayload) => void

  /**
   * Identify a user session with custom data
   * @param data Session data to associate with the current user
   */
  identify: (data: UmamiSessionData) => void
}

// Make umami available as a global variable
declare global {
  interface Window {
    umami: Umami
  }

  /**
   * Global umami object
   */
  var umami: Umami
}

// // For module imports (optional)
// declare module "umami" {
//   export default Umami;
// }
