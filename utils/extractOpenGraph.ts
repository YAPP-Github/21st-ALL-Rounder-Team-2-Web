export const extractOpenGraph = (html: string = "") => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const ogData: {
    [key: string]: string | undefined;
  } = {};

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
