import {
  AudioLines,
  BarChart3,
  Calculator,
  CalendarDays,
  GraduationCap,
  Kanban,
  Wallet,
} from 'lucide-react'

import { CONNECT_LOGOS } from './brandLogoMaps'
import { connectsWith, insteadOfLabel, replaceRows, type ReplaceIcon } from '../content/shared'
import { color, depth, onDark, radius, type } from '../lib/theme'

/**
 * El bloque «en lugar de»: cada módulo de SellNode contra la herramienta que
 * absorbe. Lo usan la home y /demo, así que vive acá y no dentro de una página.
 *
 * Las tarjetas y no una tabla porque el protagonista tiene que ser el módulo de
 * SellNode; la herramienta que se cae va debajo, tachada.
 */

const REPLACE_ICONS = {
  calendar: CalendarDays,
  kanban: Kanban,
  calculator: Calculator,
  graduation: GraduationCap,
  audio: AudioLines,
  wallet: Wallet,
  chart: BarChart3,
} as const

export function ReplaceIconChip({ name }: { name: ReplaceIcon }) {
  const Icon = REPLACE_ICONS[name]
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{
        width: 36,
        height: 36,
        borderRadius: radius.sm,
        border: `1px solid rgba(236,60,50,0.24)`,
        backgroundColor: 'rgba(236,60,50,0.08)',
      }}
    >
      <Icon size={17} strokeWidth={1.7} color={color.red} />
    </div>
  )
}

export function ReplaceGrid() {
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        style={{ marginTop: 48 }}
      >
        {replaceRows.map(row => (
          <div
            key={row.inside}
            className="hairline flex items-start gap-3 sm:gap-3.5 md:gap-4 p-4 sm:p-5"
            style={{
              borderRadius: radius.md,
              backgroundColor: color.surface,
              boxShadow: depth.card,
            }}
          >
            <ReplaceIconChip name={row.icon} />
            <div style={{ minWidth: 0 }}>
              <div style={{ ...type.h3, fontSize: 14.5, lineHeight: '20px', color: onDark.primary }}>
                {row.inside}
              </div>
              {/* En móvil el rótulo va en la misma línea que la herramienta:
                  en línea aparte sumaba 18px por tarjeta y eran siete. */}
              <div className="mt-1.5 sm:mt-[7px] flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 sm:block">
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: onDark.faint,
                  }}
                >
                  {insteadOfLabel}
                </span>
                <span
                  className="sm:block sm:mt-[3px]"
                  style={{
                    fontSize: 13,
                    lineHeight: '19px',
                    color: onDark.tertiary,
                    textDecoration: 'line-through',
                    textDecorationColor: 'rgba(236,60,50,0.5)',
                  }}
                >
                  {row.outside}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lo que sigue conectado. En móvil el rótulo va en su propia línea:
          en línea con los chips dejaba uno solo arriba y el resto huérfano. */}
      <div
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        style={{ marginTop: 28 }}
      >
        <span
          className="flex-shrink-0"
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: onDark.tertiary,
          }}
        >
          {connectsWith.title}
        </span>
        <div className="flex flex-wrap gap-2.5">
          {connectsWith.items.map(name => {
            const Logo = CONNECT_LOGOS[name]
            return (
              <span
                key={name}
                className="inline-flex items-center gap-2.5"
                style={{
                  padding: '9px 16px',
                  borderRadius: radius.pill,
                  border: `1px solid ${onDark.line}`,
                  backgroundColor: 'rgba(246,245,240,0.03)',
                  fontSize: 13,
                  color: onDark.secondary,
                }}
              >
                {Logo && <Logo size={20} />}
                {name}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}
