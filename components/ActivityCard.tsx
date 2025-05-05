// components/ActivityCard.tsx
import { Activity } from '@/data/jours'
import { GlassContainer } from './GlassContainer'

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <GlassContainer className="p-4 flex flex-col gap-1">
      <div className="flex items-center gap-3">
        {activity.icon && (
          <i className={`icon-${activity.icon} text-xl opacity-70`} />
        )}
        <div className="flex-1">
          <h3 className="font-medium">{activity.title}</h3>
          {activity.subtitle && (
            <p className="text-xs opacity-60">{activity.subtitle}</p>
          )}
        </div>
        {activity.start && (
          <time className="text-xs font-mono opacity-60 shrink-0">
            {activity.start}
            {activity.end && `–${activity.end}`}
          </time>
        )}
      </div>

      <p className="text-sm mt-2">{activity.description}</p>
      {activity.location && (
        <p className="text-xs mt-1 opacity-60">
          📍 <span className="font-medium">{activity.location}</span>
        </p>
      )}
    </GlassContainer>
  )
}
