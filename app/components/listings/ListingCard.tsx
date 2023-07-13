'use client'
import { Listing, Reservation } from '@prisma/client'
import React, { useCallback } from 'react'

import { SafeUser } from '@/app/types'
import { useRouter } from 'next/navigation'
import { useCountry } from '@/app/hooks/useCountries'

interface ListingCardProps {
  data: Listing
  reservation?: Reservation
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser?: SafeUser | null
}

export function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}: ListingCardProps) {
  const router = useRouter()
  const { getByValue } = useCountry()

  const location = getByValue(data.locationValue)

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      onAction?.(actionId)
    },
    [onAction, actionId],
  )
  return <div>Listing card!</div>
}
