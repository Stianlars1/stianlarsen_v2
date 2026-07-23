import { dotviewer } from "./dotviewer/dotviewer";
import { framesnapper } from "./framesnapper/framesnapper";
import { station } from "./station/station";

export interface MacosApp {
  publishDate: string;
  name: string;
  tagline: string;
  websiteUrl: string;
  icon: string;
  githubUrl?: string;
}

export const macosApps: MacosApp[] = [station, framesnapper, dotviewer].sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);
