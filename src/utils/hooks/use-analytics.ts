import { useCallback, useEffect, useState } from 'react'
import {
  identifyUser,
  isUmamiAvailable,
  trackButtonClick,
  trackCampaignInteraction,
  trackEvent,
  trackFormSubmission,
  trackOrganizationInteraction,
  trackPageView,
  trackProfileInteraction,
} from '../lib/analytics'

/**
 * Hook for using Umami analytics in React components
 * Provides methods for tracking events and checking if Umami is available
 */
export function useAnalytics() {
  const [available, setAvailable] = useState(false)

  // Check if Umami is available on mount and after a short delay
  useEffect(() => {
    // Initial check
    setAvailable(isUmamiAvailable())

    // Check again after a short delay to account for script loading
    const timer = setTimeout(() => {
      setAvailable(isUmamiAvailable())
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Track page view on component mount
  const trackCurrentPageView = useCallback(() => {
    return trackPageView()
  }, [])

  // Memoized tracking functions
  const track = useCallback(
    (eventName: string, eventData?: Record<string, any>) => {
      return trackEvent(eventName, eventData)
    },
    [],
  )

  const trackButton = useCallback(
    (buttonName: string, buttonData?: Record<string, any>) => {
      return trackButtonClick(buttonName, buttonData)
    },
    [],
  )

  const trackForm = useCallback(
    (formName: string, formData?: Record<string, any>) => {
      return trackFormSubmission(formName, formData)
    },
    [],
  )

  const trackCampaign = useCallback(
    (
      campaignId: string,
      interactionType: string,
      interactionData?: Record<string, any>,
    ) => {
      return trackCampaignInteraction(
        campaignId,
        interactionType,
        interactionData,
      )
    },
    [],
  )

  const trackProfile = useCallback(
    (
      profileId: string,
      interactionType: string,
      interactionData?: Record<string, any>,
    ) => {
      return trackProfileInteraction(
        profileId,
        interactionType,
        interactionData,
      )
    },
    [],
  )

  const trackOrganization = useCallback(
    (
      organizationId: string,
      interactionType: string,
      interactionData?: Record<string, any>,
    ) => {
      return trackOrganizationInteraction(
        organizationId,
        interactionType,
        interactionData,
      )
    },
    [],
  )

  const identify = useCallback((data: Record<string, any>) => {
    return identifyUser(data)
  }, [])

  return {
    available,
    track,
    trackButton,
    trackForm,
    trackCampaign,
    trackProfile,
    trackOrganization,
    trackCurrentPageView,
    identify,
  }
}
