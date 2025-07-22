'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useAnalytics } from '@/utils/hooks/use-analytics'

interface PageViewTrackerProps {
  /**
   * Custom page name to track instead of the URL path
   */
  pageName?: string

  /**
   * Additional data to include with the page view event
   */
  pageData?: Record<string, any>
}

/**
 * Component that automatically tracks page views
 * Place this component in layout files to track page views for all pages
 */
export function PageViewTracker({ pageName, pageData }: PageViewTrackerProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { available, track, trackCurrentPageView } = useAnalytics()

  useEffect(() => {
    // Only track if Umami is available
    if (!available) return

    // Track the page view
    trackCurrentPageView()

    // Also track as a custom event with more data if provided
    if (pageName) {
      track('page_view', {
        page_name: pageName,
        page_path: pathname,
        ...pageData,
      })
    }
  }, [
    available,
    pathname,
    searchParams,
    pageName,
    pageData,
    track,
    trackCurrentPageView,
  ])

  // This component doesn't render anything
  return null
}

/**
 * Component that automatically tracks page views
 * Place this component in layout files to track page views for all pages
 */
export function DynamicPageViewTracker({
  pageName,
  pageData,
}: PageViewTrackerProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { available, track } = useAnalytics()

  useEffect(() => {
    // Only track if Umami is available
    if (!available) return

    // Also track as a custom event with more data if provided
    if (pageName) {
      track(pageName, {
        page_path: pathname,
        ...pageData,
      })
    }
  }, [available, pathname, searchParams, pageName, pageData, track])

  // This component doesn't render anything
  return null
}

export default PageViewTracker
