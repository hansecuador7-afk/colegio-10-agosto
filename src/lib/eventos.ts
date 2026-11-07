import type { CollectionEntry } from 'astro:content';

export type Evento = CollectionEntry<'eventos'>;

const longDateFormatter = new Intl.DateTimeFormat('es-EC', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const shortMonthFormatter = new Intl.DateTimeFormat('es-EC', {
  month: 'short',
  timeZone: 'UTC',
});

export function formatLongDate(date: Date): string {
  return longDateFormatter.format(date);
}

export function getDateBadge(date: Date): { day: string; month: string } {
  return {
    day: String(date.getUTCDate()).padStart(2, '0'),
    month: shortMonthFormatter
      .format(date)
      .replace('.', '')
      .toLocaleUpperCase('es-EC'),
  };
}

export function eventSlug(evento: Evento): string {
  return evento.id.replace(/\.md$/, '');
}

export function eventHref(evento: Evento): string {
  return `/eventos/${eventSlug(evento)}`;
}

export function sortEventsAsc(events: Evento[]): Evento[] {
  return [...events].sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
}

export function sortEventsDesc(events: Evento[]): Evento[] {
  return [...events].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function isUpcoming(date: Date): boolean {
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const eventDay = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return eventDay >= today;
}

export function splitEvents(events: Evento[]): { upcoming: Evento[]; past: Evento[] } {
  const ordered = sortEventsAsc(events);
  return {
    upcoming: ordered.filter((evento) => isUpcoming(evento.data.date)),
    past: sortEventsDesc(ordered.filter((evento) => !isUpcoming(evento.data.date))),
  };
}
