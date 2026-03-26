'use client';

import { useState } from 'react';

interface SchedulingCalendarProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const timeSlots = [
  { time: '09:00', label: '9:00 AM', available: true },
  { time: '10:00', label: '10:00 AM', available: true },
  { time: '11:00', label: '11:00 AM', available: true },
  { time: '12:00', label: '12:00 PM', available: false },
  { time: '13:00', label: '1:00 PM', available: true },
  { time: '14:00', label: '2:00 PM', available: true },
  { time: '15:00', label: '3:00 PM', available: true },
  { time: '16:00', label: '4:00 PM', available: false },
  { time: '17:00', label: '5:00 PM', available: true },
];

export default function SchedulingCalendar({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: SchedulingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const selected = new Date(selectedDate);
    return (
      date.getFullYear() === selected.getFullYear() &&
      date.getMonth() === selected.getMonth() &&
      date.getDate() === selected.getDate()
    );
  };

  const handleDateClick = (day: number) => {
    if (!isDateDisabled(day)) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const formattedDate = date.toISOString().split('T')[0];
      onDateChange(formattedDate);
    }
  };

  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Calendar Grid */}
      <div className="space-y-4">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-lg font-bold text-slate-900">{monthName}</h3>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-bold text-slate-600 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells for days before month starts */}
          {emptyDays.map(i => (
            <div key={`empty-${i}`} className="aspect-square"></div>
          ))}

          {/* Days of month */}
          {days.map(day => {
            const disabled = isDateDisabled(day);
            const selected = isDateSelected(day);
            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
            const isToday =
              date.toDateString() === new Date().toDateString();

            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                disabled={disabled}
                className={`
                  aspect-square rounded-lg font-semibold text-sm transition-colors
                  ${
                    disabled
                      ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                      : selected
                      ? 'bg-blue-600 text-white'
                      : isToday
                      ? 'bg-blue-100 text-blue-900 border-2 border-blue-400'
                      : 'bg-white text-slate-900 border border-slate-200 hover:border-blue-400'
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div className="space-y-4 lg:pt-0 pt-6 lg:border-t-0 border-t border-slate-200">
        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-4">Select a Time</h4>
          {!selectedDate ? (
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-sm text-slate-600">
              Select a date first to view available time slots.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots.map(slot => (
                <button
                  key={slot.time}
                  onClick={() => onTimeChange(slot.time)}
                  disabled={!slot.available}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-semibold transition-colors
                    ${
                      !slot.available
                        ? 'bg-red-50 text-red-400 cursor-not-allowed opacity-50'
                        : selectedTime === slot.time
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-blue-50'
                    }
                  `}
                  title={!slot.available ? 'Not available' : undefined}
                >
                  <div>{slot.label}</div>
                  {!slot.available && <div className="text-xs">Unavailable</div>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Summary */}
        {selectedDate && selectedTime && (
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <p className="text-sm text-slate-600">📅 Meeting scheduled for:</p>
            <p className="font-bold text-green-900">
              {new Date(selectedDate).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })} at {timeSlots.find(s => s.time === selectedTime)?.label}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
