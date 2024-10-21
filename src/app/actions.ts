export const checkWebsiteStatus = async (
  url: string
): Promise<"ACTIVE" | "INACTIVE"> => {
  try {
    const response = await fetch(url, { method: "HEAD" });

    if (response.ok) {
      return "ACTIVE";
    } else {
      return "INACTIVE";
    }
  } catch {
    return "INACTIVE";
  }
};

// Open Source Download Badge
const npmApi = "https://api.npmjs.org/downloads/point";
export interface NpmDownloadData {
  downloads: number;
  start: string;
  end: string;
  package: string;
}

export const getNpmDownloads = async (
  packageName: string,
  period: "last-week" | "last-month" | "last-day" = "last-week"
): Promise<number | null> => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000); // 10-second timeout

    const response = await fetch(
      `${npmApi}/${period}/${encodeURIComponent(packageName)}`,
      { signal: controller.signal, next: { revalidate: 60 * 60 * 24 } } // revalidate every 24 hours
    );

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Failed to fetch download data for ${packageName}`);
    }

    const data = await response.json();
    return data.downloads || 0;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error(`Fetch request for ${packageName} timed out`);
    } else {
      console.error(`Error fetching downloads for ${packageName}:`, error);
    }
    return null;
  }
};
