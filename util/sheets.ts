import { CDL_HISTORY_SHEET } from "~/constants";
import { fetchSheet } from "@katlyn/clipsheet";

export type GSheetTab = { name: string; gid: string };

export async function fetchSheetTabs(key: string) {
  const url = new URL("https://valor.instinct.mystic.services/api/sheetTabs");
  url.searchParams.set("key", key);
  return $fetch<GSheetTab[]>(url.toString());
}

function pascalCase(s: string) {
  return s
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export async function fetchEventList() {
  const ignoredTabs = [
    "CDL Entry",
    "CDEX Entry",
    "Databank",
    "Group Scores",
    "2023",
    "GO Fest",
  ];
  const tabs = await fetchSheetTabs(CDL_HISTORY_SHEET);
  return tabs
    .filter(
      (tab) => !tab.name.startsWith("ALL") && !ignoredTabs.includes(tab.name),
    )
    .map((tab) => ({ ...tab, name: pascalCase(tab.name) }));
}

export interface LeaderboardRow {
  username: string;
  team: string;
  country: string;
  xsWeight: number;
  xsHeight: number;
  xlWeight: number;
  xlHeight: number;
  start: number;
  end: number;
  shiny: number;
  community: string;
  xlWtRank: number;
  scoreRank: number;
  league: string;
}

export type LeaderboardRows = LeaderboardRow[];

export async function fetchEvent(id: string): Promise<LeaderboardRows> {
  const data = await fetchSheet(CDL_HISTORY_SHEET, id, undefined, {
    A: "username",
    B: "team",
    C: "country",
    D: "xsWeight",
    E: "xsHeight",
    F: "xlWeight",
    G: "xlHeight",
    H: "start",
    I: "end",
    J: "shiny",
    K: "score",
    L: "community",
    M: "xlWtRank",
    N: "scoreRank",
    O: "league",
  });

  // FIXME: For some reason typescript doesn't pay attention to ParsedRow typings here
  return data as unknown as LeaderboardRows;
}
