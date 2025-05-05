'use client'

import React, { useCallback } from 'react'
import { useAnalytics } from '@/utils/hooks/use-analytics'

interface TrackEventProps {
  /**
   * Name of the event to track
   */
  eventName: string

  /**
   * Additional data to include with the event
   */
  eventData?: Record<string, any>

  /**
   * Children components
   */
  children: React.ReactNode

  /**
   * HTML element to render (defaults to div)
   */
  as?: React.ElementType

  /**
   * Additional props to pass to the element
   */
  [key: string]: any
}

/**
 * Component that tracks events when clicked
 * Wrap interactive elements with this component to automatically track clicks
 */
export function TrackEvent({
  eventName,
  eventData,
  children,
  as: Component = 'div',
  ...props
}: TrackEventProps) {
  const { track } = useAnalytics()

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // Track the event
      track(eventName, eventData)

      // Call the original onClick handler if provided
      if (props.onClick) {
        props.onClick(e)
      }
    },
    [eventName, eventData, props.onClick, track],
  )

  // Render the component with the click handler
  return (
    <Component {...props} onClick={handleClick}>
      {children}
    </Component>
  )
}

export default TrackEvent
