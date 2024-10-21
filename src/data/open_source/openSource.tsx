import { border_beam } from "./border_beam/border_beam";
import { copy_to_clipboard } from "./copy_to_clipboard/copy_to_clipboard";
import { meteors } from "./meteors/meteors";
import { react_code_preview } from "./react_code_preview/react_code_preview";
import { react_fade_effects } from "./react_fade_effects/react_fade_effects";
import { react_gradient_animation } from "./react_gradient_animation/react_gradient_animation";
import { react_light_beam } from "./react_light_beam/react_light_beam";
import { react_package_paster } from "./react_package_paster/react_package_paster";
import { react_ui_kit } from "./react_ui_kit/react_ui_kit";

export interface OpenSourceType {
  publishDate: string;
  title: string;
  description: string;
  websiteUrl?: string;
  npmUrl: string;
  packageName: string;
  downloads?: number | null;
}
export const open_source_projects_map: OpenSourceType[] = [
  react_ui_kit,
  react_package_paster,
  copy_to_clipboard,
  react_code_preview,
  react_light_beam,
  border_beam,
  meteors,
  react_fade_effects,
  react_gradient_animation,
].sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);
