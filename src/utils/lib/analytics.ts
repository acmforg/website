/**
 * Safely track events with Umami analytics
 * This utility ensures that umami is available before attempting to track events
 */

/**
 * Check if Umami is available
 * @returns boolean indicating if Umami is available
 */
export const isUmamiAvailable = (): boolean => {
  return typeof window !== 'undefined' && !!window.umami
}

/**
 * Track an event with Umami analytics
 * @param eventName Name of the event to track
 * @param eventData Optional data to associate with the event
 * @returns boolean indicating if tracking was successful
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, any>,
): boolean => {
  if (isUmamiAvailable()) {
    try {
      window.umami.track(eventName, eventData)
      return true
    } catch (error) {
      console.error('Error tracking event:', error)
      return false
    }
  } else {
    console.warn('Umami analytics not available')
    return false
  }
}

/**
 * Track a page view with Umami analytics
 * @param url Optional URL to track (defaults to current URL)
 * @returns boolean indicating if tracking was successful
 */
export const trackPageView = (url?: string): boolean => {
  if (typeof window !== 'undefined' && window.umami?.trackView) {
    try {
      window.umami.trackView(url)
      return true
    } catch (error) {
      console.error('Error tracking page view:', error)
      return false
    }
  } else {
    console.warn('Umami analytics not available')
    return false
  }
}

/**
 * Identify a user session with Umami analytics
 * @param data Session data to associate with the current user
 * @returns boolean indicating if identification was successful
 */
export const identifyUser = (data: Record<string, any>): boolean => {
  if (typeof window !== 'undefined' && window.umami?.identify) {
    try {
      window.umami.identify(data)
      return true
    } catch (error) {
      console.error('Error identifying user:', error)
      return false
    }
  } else {
    console.warn('Umami analytics not available')
    return false
  }
}

/**
 * Track a form submission event
 * @param formName Name of the form being submitted
 * @param formData Data associated with the form submission
 * @returns boolean indicating if tracking was successful
 */
export const trackFormSubmission = (
  formName: string,
  formData?: Record<string, any>,
): boolean => {
  return trackEvent(`form_submit_${formName}`, formData)
}

/**
 * Track a button click event
 * @param buttonName Name of the button being clicked
 * @param buttonData Data associated with the button click
 * @returns boolean indicating if tracking was successful
 */
export const trackButtonClick = (
  buttonName: string,
  buttonData?: Record<string, any>,
): boolean => {
  return trackEvent(`button_click_${buttonName}`, buttonData)
}

/**
 * Track a campaign interaction event
 * @param campaignId ID of the campaign
 * @param interactionType Type of interaction (view, donate, share, etc.)
 * @param interactionData Additional data about the interaction
 * @returns boolean indicating if tracking was successful
 */
export const trackCampaignInteraction = (
  campaignId: string,
  interactionType: string,
  interactionData?: Record<string, any>,
): boolean => {
  return trackEvent(`campaign_${interactionType}`, {
    campaign_id: campaignId,
    ...interactionData,
  })
}

/**
 * Track a user profile interaction event
 * @param profileId ID of the user profile
 * @param interactionType Type of interaction (view, follow, etc.)
 * @param interactionData Additional data about the interaction
 * @returns boolean indicating if tracking was successful
 */
export const trackProfileInteraction = (
  profileId: string,
  interactionType: string,
  interactionData?: Record<string, any>,
): boolean => {
  return trackEvent(`profile_${interactionType}`, {
    profile_id: profileId,
    ...interactionData,
  })
}

/**
 * Track an organization interaction event
 * @param organizationId ID of the organization
 * @param interactionType Type of interaction (view, follow, etc.)
 * @param interactionData Additional data about the interaction
 * @returns boolean indicating if tracking was successful
 */
export const trackOrganizationInteraction = (
  organizationId: string,
  interactionType: string,
  interactionData?: Record<string, any>,
): boolean => {
  return trackEvent(`organization_${interactionType}`, {
    organization_id: organizationId,
    ...interactionData,
  })
}
