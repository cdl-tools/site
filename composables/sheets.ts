import { fetchEvent, fetchEventList } from "~/util/sheets";

export const useEventList = () => {
  return useAsyncData(`event-list`, () => fetchEventList());
};

export const useLeaderboardData = (event: string) => {
  return useAsyncData(`event-leaderboard-${event}`, () => fetchEvent(event));
};
