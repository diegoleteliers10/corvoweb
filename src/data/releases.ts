// Live Corvo release data from the GitHub API, with a safe offline fallback.
// Asset names follow the verified release layout (DMG per arch on macOS,
// MSI + portable ZIP on Windows, AppImage + DEB on Linux).
// Promise chains only; no exceptions thrown.

export type ReleaseDownload = {
  platform: string;
  detail: string;
  os: "macos" | "windows" | "linux";
  filename: string;
  url: string;
};

export type ReleaseItem = {
  tag: string;
  version: string;
  date: string;
  title: string;
  isLatest: boolean;
  highlights: string[];
  downloads: ReleaseDownload[];
  htmlUrl: string;
};

const REPO = "diegoleteliers10/corvo";
const API = `https://api.github.com/repos/${REPO}/releases?per_page=20`;
const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`;
const DOWNLOAD_BASE = `https://github.com/${REPO}/releases/download`;

type GitHubAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  name: string | null;
  published_at: string;
  html_url: string;
  body: string | null;
  assets: GitHubAsset[];
};

const assetUrl = (assets: GitHubAsset[], name: string, tag: string): string => {
  const hit = assets.find((a) => a.name === name);
  return hit ? hit.browser_download_url : `${DOWNLOAD_BASE}/${tag}/${name}`;
};

const buildDownloads = (tag: string, version: string, assets: GitHubAsset[]): ReleaseDownload[] => [
  {
    platform: "macOS",
    detail: "Apple Silicon · DMG",
    os: "macos",
    filename: "corvo-aarch64-apple-darwin.dmg",
    url: assetUrl(assets, "corvo-aarch64-apple-darwin.dmg", tag),
  },
  {
    platform: "macOS",
    detail: "Intel · DMG",
    os: "macos",
    filename: "corvo-x86_64-apple-darwin.dmg",
    url: assetUrl(assets, "corvo-x86_64-apple-darwin.dmg", tag),
  },
  {
    platform: "Windows",
    detail: "Installer · MSI",
    os: "windows",
    filename: `Corvo_${version}_x64.msi`,
    url: assetUrl(assets, `Corvo_${version}_x64.msi`, tag),
  },
  {
    platform: "Windows",
    detail: "Portable · ZIP",
    os: "windows",
    filename: "corvo-x86_64-pc-windows-msvc.zip",
    url: assetUrl(assets, "corvo-x86_64-pc-windows-msvc.zip", tag),
  },
  {
    platform: "Linux",
    detail: "Universal · AppImage",
    os: "linux",
    filename: `Corvo_${version}_amd64.AppImage`,
    url: assetUrl(assets, `Corvo_${version}_amd64.AppImage`, tag),
  },
  {
    platform: "Linux",
    detail: "Debian / Ubuntu · DEB",
    os: "linux",
    filename: `corvo_${version}_amd64.deb`,
    url: assetUrl(assets, `corvo_${version}_amd64.deb`, tag),
  },
];

const bulletsOf = (body: string | null): string[] => {
  if (!body) return [];
  return body
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- ") || l.startsWith("* "))
    .map((l) => l.replace(/^[-*]\s+/, "").trim())
    .filter((l) => l.length > 0);
};

// Shown only when the GitHub API is unreachable at build time.
// Kept current by .github/workflows/refresh.yml — do not bump by hand.
const FALLBACK_TAG = "v0.5.1";

const fallbackItem = (): ReleaseItem => {
  const version = FALLBACK_TAG.replace(/^v/, "");
  return {
    tag: FALLBACK_TAG,
    version,
    date: "",
    title: `Corvo ${FALLBACK_TAG}`,
    isLatest: true,
    highlights: ["See the release notes on GitHub for this version."],
    downloads: buildDownloads(FALLBACK_TAG, version, []),
    htmlUrl: RELEASES_PAGE,
  };
};

const toItem = (gh: GitHubRelease, index: number): ReleaseItem => {
  const tag = gh.tag_name;
  const version = tag.replace(/^v/, "");
  const bullets = bulletsOf(gh.body);
  const title =
    gh.name && gh.name.trim() !== "" && gh.name.trim() !== tag
      ? gh.name.replace(/^Release\s+/i, "").trim()
      : `Corvo ${tag}`;
  return {
    tag,
    version,
    date: gh.published_at ? gh.published_at.slice(0, 10) : "",
    title,
    isLatest: index === 0,
    highlights: bullets.slice(0, 4),
    downloads: buildDownloads(tag, version, gh.assets ?? []),
    htmlUrl: gh.html_url || `${RELEASES_PAGE}`,
  };
};

let cached: Promise<ReleaseItem[]> | null = null;

export const fetchReleases = (): Promise<ReleaseItem[]> => {
  if (cached) return cached;
  cached = fetch(API, {
    headers: { Accept: "application/vnd.github+json", "User-Agent": "corvo-site" },
  })
    .then((res) => {
      if (!res.ok) return [fallbackItem()];
      return res.json().then((data: unknown) => {
        if (!Array.isArray(data) || data.length === 0) return [fallbackItem()];
        return (data as GitHubRelease[]).map(toItem);
      });
    })
    .catch(() => [fallbackItem()]);
  return cached;
};

export const fetchLatest = (): Promise<ReleaseItem> =>
  fetchReleases().then((all) => all[0] ?? fallbackItem());
