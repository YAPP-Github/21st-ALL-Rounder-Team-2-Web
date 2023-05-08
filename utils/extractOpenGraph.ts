export type OgData = {
  [key: string]: string | undefined;
};

export const extractOpenGraph = (html: string = "") => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const ogData: OgData = {};

  const metaTags = doc.querySelectorAll('meta[property^="og:"]');
  metaTags.forEach((tag: Element) => {
    const property = tag.getAttribute("property");
    const content = tag.getAttribute("content");
    const key = property?.replace("og:", "");
    if (key) {
      ogData[key] = content || undefined;
    }
  });

  return ogData;
};
