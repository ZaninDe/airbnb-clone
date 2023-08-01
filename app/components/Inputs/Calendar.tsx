'use client'

import { DateRange, Range, RangeKeyDict } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface CalendarProps {
  value: Range
  onChange: (value: RangeKeyDict) => void
  disabledDates?: Date[]
}

export const Calendar = ({ value, onChange, disabledDates }: CalendarProps) => {
  return <DateRange />
}
