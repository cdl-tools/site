import { CDL_HISTORY_SHEET } from '@/constants'
import { fetchSheet } from '@katlyn/clipsheet'
import type { ParsedRow } from '@katlyn/clipsheet/parser'

export type GSheetTab = { name: string; gid: string }

export async function fetchSheetTabs(key: string): Promise<GSheetTab[]> {
  const url = new URL('https://valor.instinct.mystic.services/api/sheetTabs')
  url.searchParams.set('key', key)
  const response = await fetch(url)
  if (response.status !== 200) {
    throw new Error('Fetching sheet not OK')
  }
  return await response.json()
}

export async function fetchEvents() {
  const ignoredTabs = ['CDL Entry', 'Databank', 'Group Scores', '2023', 'GO Fest']
  const tabs = await fetchSheetTabs(CDL_HISTORY_SHEET)
  return tabs.filter((tab) => !tab.name.startsWith('ALL') && !ignoredTabs.includes(tab.name))
}

interface LeaderboardRow {
  username: string
  team: string
  country: string
  xsWeight: number
  xsHeight: number
  xlWeight: number
  xlHeight: number
  start: number
  end: number
  shiny: number
  community: string
  xlWtRank: number
  scoreRank: number
}

export async function fetchEvent(id: string): Promise<LeaderboardRow[]> {
  const data = await fetchSheet(CDL_HISTORY_SHEET, id, undefined, {
    A: 'username',
    B: 'team',
    C: 'country',
    D: 'xsWeight',
    E: 'xsHeight',
    F: 'xlWeight',
    G: 'xlHeight',
    H: 'start',
    I: 'end',
    J: 'shiny',
    K: 'score',
    L: 'community',
    M: 'xlWtRank',
    N: 'scoreRank'
  })

  // FIXME: For some reason typescript doesn't pay attention to ParsedRow typings here
  return data as unknown as LeaderboardRow[]
}
