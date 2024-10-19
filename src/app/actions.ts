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
