/* empty css                          */
import 'reading-time';
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderComponent, j as Fragment, m as maybeRenderHead, s as spreadAttributes, k as renderSlot, l as renderHead, A as AstroError, n as UnknownContentCollectionError, o as renderUniqueStylesheet, p as renderScriptElement, q as createHeadAndContent, u as unescapeHTML } from '../astro_3bPw8lcR.mjs';
import 'kleur/colors';
/* empty css                          */
/* empty css                                                                   */
import 'clsx';
import { p as prependForwardSlash } from '../astro/assets-service_7vmPvtio.mjs';
import { optimize } from 'svgo';

const siteConfig = {
  title: "The Robellion",
  description: "",
  lang: "en-US",
  profile: {
    author: "Robel Schwarz",
    description: "subjectively objectively always correct"
  }
};
const socialLinks = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/itsrobel",
    handle: "itsrobel"
  },
  {
    icon: "mdi:instagram",
    friendlyName: "Instagram",
    link: "https://www.instagram.com/the_robellion/",
    handle: "the_robellion"
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/robel-schwarz/",
    handle: "robel-schwarz"
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:itsrobel.schwarz@gmail.com",
    handle: "itsrobel.schwarz"
  }
  // {
  //   icon: "mdi:rss",
  //   friendlyName: "rss",
  //   link: "/rss.xml",
  // },
];
const NAV_LINKS = [
  // {
  //   title: "Home",
  //   path: "/",
  // },
  {
    title: "About",
    path: "/blog/void"
  },
  {
    title: "Blog",
    path: "/blog"
  },
  {
    title: "Projects",
    path: "/projects"
  }
];

const $$Astro$d = createAstro("https://astro-theme-cody.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, articleDate, image = "/card.png" } = Astro2.props;
  const titleSeparator = "|";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><!-- <meta name="generator" content={Astro.generator} /> --><!-- Font preloads --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${siteTitle}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(siteConfig.profile.author, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(siteConfig.profile.author, "content")}><meta property="article:published_time"${addAttribute(articleDate, "content")}>` })}`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/stef/itsrobel/src/components/BaseHead.astro", void 0);

const $$Astro$c = createAstro("https://astro-theme-cody.netlify.app");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/stef/itsrobel/src/components/HeaderLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$b = createAstro("https://astro-theme-cody.netlify.app");
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate(_a || (_a = __template(["", `<button id="themeToggle" class="transition-all relative" aria-label="toggle theme" data-astro-cid-x3pjskd3> <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-x3pjskd3> <path class="sun opacity-100 transition-all dark:scale-0 dark:opacity-0" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-x3pjskd3></path> <path class="moon opacity-0 transition-all dark:scale-100 dark:opacity-100" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-x3pjskd3></path> </svg> </button>  <script>
  const theme = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
      return 'light';
  })();

  if (theme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  window.localStorage.setItem('theme', theme);

  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "/home/stef/itsrobel/src/components/ThemeToggle.astro", void 0);

const $$Astro$a = createAstro("https://astro-theme-cody.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  const url = new URL(Astro2.request.url);
  return renderTemplate`${maybeRenderHead()}<header class="group relative mb-8 flex justify-between items-center gap-4" id="main-header" data-astro-cid-3ef6ksr2> <div class="block" data-astro-cid-3ef6ksr2> <a class="title whitespace-nowrap" href="/"${addAttribute(url.pathname === "/" ? "page" : false, "aria-current")} data-astro-cid-3ef6ksr2>${siteConfig.title}</a> </div> <nav class="mt-8 bg-surface/95 sm:bg-bgColorSoild absolute hidden top-8 w-full sm:h-10 sm:block sm:static sm:mt-0 group-[.menu-open]:z-50 group-[.menu-open]:flex" id="navigation-menu" aria-label="main menu" data-astro-cid-3ef6ksr2> <div class="space-y-1 px-2 pb-3 pt-2 sm:flex sm:px-0 sm:py-0 sm:space-y-0 sm:space-x-2" data-astro-cid-3ef6ksr2> ${NAV_LINKS.map((nav) => renderTemplate`${renderComponent($$result, "HeaderLink", $$HeaderLink, { "class": "block py-3 ", "href": nav.path, "title": nav.title, "aria-current": url.pathname === nav.path ? "page" : false, "data-astro-prefetch": true, "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`${nav.title}` })}`)} <!-- <HeaderLink  --> <!-- 	class="sm:hidden block py-2 sm:py-0"  --> <!-- 	href="/tags" --> <!-- 	title="tags" --> <!-- 	aria-current={url.pathname === "tags" ? "page" : false} --> <!-- 	data-astro-prefetch --> <!-- >Tags</HeaderLink> --> </div> </nav> <div class="flex gap-2 items-center justify-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "nav-button", "nav-button", { "data-astro-cid-3ef6ksr2": true }, { "default": () => renderTemplate` <div class="sm:hidden" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>open main menu</span> <button class="group flex items-center justify-center" type="button" id="navigation-menu-btn" aria-label="Open main menu" aria-expanded="false" aria-haspopup="menu" data-astro-cid-3ef6ksr2> <!-- icon when menu is closed --> <svg class="transform transition-all duration-150 ease-out group-aria-expanded:scale-0 group-aria-expanded:opacity-0 h-6 w-6 block group-aria-expanded:hidden" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" data-astro-cid-3ef6ksr2></path> </svg> <!-- icon when menu is open --> <svg class="transform transition-all duration-150 ease-out h-6 w-6 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100 hidden group-aria-expanded:block" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> ` })} </div> </header>  `;
}, "/home/stef/itsrobel/src/components/Header.astro", void 0);

const $$Astro$9 = createAstro("https://astro-theme-cody.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="hidden md:flex mt-auto w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top font-semibold sm:flex-row sm:justify-between sm:text-xs text-textColor mb-8"> <div class="me-0 sm:me-4">
Copyright &copy; ${year}${" "} ${siteConfig.profile.author} </div> <!-- <nav --> <!-- 	aria-label="More on this site" --> <!-- 	class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-accent" --> <!-- > --> <!-- 	{ --> <!-- 		NAV_LINKS.map((link) => ( --> <!-- 			<a --> <!-- 				href={link.path} --> <!-- 				class="px-4 py-2 sm:px-2 sm:py-0 sm:hover:text-textColor sm:hover:underline" --> <!-- 			> --> <!-- 				{link.title} --> <!-- 			</a> --> <!-- 		)) --> <!-- 	} --> <!-- </nav> --> </footer>`;
}, "/home/stef/itsrobel/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro("https://astro-theme-cody.netlify.app");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = "", description = siteConfig.description, image } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <section class="cody-bg"> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})}
</html</body></html>`;
}, "/home/stef/itsrobel/src/layouts/Base.astro", void 0);

const dateOptions = {
  locale: "en-GB",
  options: {
    day: "numeric",
    month: "short",
    year: "numeric"
  }
};
const dateFormat = new Intl.DateTimeFormat(
  dateOptions.locale,
  dateOptions.options
);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(dateOptions.locale, {
      ...dateOptions.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

function getAllTags(posts) {
  return posts.flatMap(({ data }) => data.tags ? [...data.tags] : []);
}
function getUniqueTags(posts) {
  return [...new Set(getAllTags(posts))];
}
function getUniqueTagsWithCount(posts) {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://astro-theme-cody.netlify.app", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/angels.md": () => import('../angels_BSEWyYaU.mjs'),"/src/content/blog/kings.md": () => import('../kings_BZbnP_bP.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_DR82HkSF.mjs'),"/src/content/blog/void.md": () => import('../void_CRLr_-_b.mjs'),"/src/content/project/project-1.md": () => import('../project-1_Byt3O-z8.mjs'),"/src/content/project/project-2.md": () => import('../project-2_Btm96N1u.mjs'),"/src/content/project/project-3.md": () => import('../project-3_Ce4eAdkS.mjs'),"/src/content/project/project-4.md": () => import('../project-4_uBMegOW9.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"angels":"/src/content/blog/angels.md","kings":"/src/content/blog/kings.md","using-mdx":"/src/content/blog/using-mdx.mdx","void":"/src/content/blog/void.md"}},"project":{"type":"content","entries":{"project-1":"/src/content/project/project-1.md","project-2":"/src/content/project/project-2.md","project-3":"/src/content/project/project-3.md","project-4":"/src/content/project/project-4.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/angels.md": () => import('../angels_D6JNfBIw.mjs'),"/src/content/blog/kings.md": () => import('../kings_CAz4YXl0.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_BaBSaqsn.mjs'),"/src/content/blog/void.md": () => import('../void_D_2l5ePf.mjs'),"/src/content/project/project-1.md": () => import('../project-1_CJ8WJiqz.mjs'),"/src/content/project/project-2.md": () => import('../project-2_CPXQvDMr.mjs'),"/src/content/project/project-3.md": () => import('../project-3_Dk4LYayy.mjs'),"/src/content/project/project-4.md": () => import('../project-4_xpYsdjD7.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

async function getAllPosts() {
  return await getCollection("blog", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate(posts) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.pubDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.pubDate).valueOf();
    return bDate - aDate;
  });
}
function sortMDByPinned(posts) {
  return posts.sort((a, b) => {
    const aOrder = a.data.order ?? 100;
    const bOrder = b.data.order ?? 100;
    return aOrder - bOrder;
  });
}
function getPostsByTag(tag, posts) {
  return posts.filter((post) => {
    if (post.data.tags) {
      return post.data.tags.includes(tag);
    }
    return false;
  });
}

const $$Astro$7 = createAstro("https://astro-theme-cody.netlify.app");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, dateTimeOptions, ...attrs } = Astro2.props;
  const postDate = getFormattedDate(date, dateTimeOptions);
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}${spreadAttributes(attrs)}${addAttribute(postDate, "title")}> ${postDate} </time>`;
}, "/home/stef/itsrobel/src/components/FormattedDate.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$6 = createAstro("https://astro-theme-cody.netlify.app");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/stef/itsrobel/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$5 = createAstro("https://astro-theme-cody.netlify.app");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "/home/stef/itsrobel/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$4 = createAstro("https://astro-theme-cody.netlify.app");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/stef/itsrobel/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$3 = createAstro("https://astro-theme-cody.netlify.app");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "/home/stef/itsrobel/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$2 = createAstro("https://astro-theme-cody.netlify.app");
const $$SocialMediaLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialMediaLinks;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-end gap-x-4  justify-items-end"> <ul class="flex-col flex flex-wrap flex-1 gap-x-2 "> ${socialLinks.map(({ link, icon, friendlyName, handle }) => renderTemplate`<li> <a class=" inline-block p-1 sm:hover:text-accent "${addAttribute(link, "href")} target="_blank"${addAttribute(`noopener noreferrer`, "rel")}${addAttribute(friendlyName, "title")}> <span class="flex flex-row flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5", "name": icon, "aria-hidden": "true", "focusable": "false" })} <span> ${handle} </span> </span> <span class="sr-only">${friendlyName}</span> </a> </li>`)} </ul> </div>`;
}, "/home/stef/itsrobel/src/components/SocialMediaLinks.astro", void 0);

const $$Astro$1 = createAstro("https://astro-theme-cody.netlify.app");
const $$PostPreviewB = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostPreviewB;
  const { post, withDesc = false } = Astro2.props;
  const postDate = post.data.updatedDate ?? post.data.pubDate;
  const pinned = !!post.data.order;
  return renderTemplate`${maybeRenderHead()}<li> <div class="flex flex-col gap-x-0 sm:flex-row sm:divide-x sm:divide-accent"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": postDate, "class": "min-w-[125px] text-gray-600 dark:text-gray-400" })} <span class="sm:before:ml-4"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="cody-link" data-astro-prefetch> ${post.data.title} </a> ${pinned && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class": "h-5 w-5 inline text-accent rotate-45 ml-1", "name": "mdi:pin", "aria-hidden": "true", "focusable": "false" })}`} </span> </div> ${withDesc && renderTemplate`<p class="italic">${post.data.description}</p>`} </li>`;
}, "/home/stef/itsrobel/src/components/blog/PostPreviewB.astro", void 0);

const $$Astro = createAstro("https://astro-theme-cody.netlify.app");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const MAX_POSTS = 10;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  const allPostsByPinned = sortMDByPinned(allPostsByDate);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title">Hello World</h1> <p class="mb-4 lg:mx-16 sm:mb-8 sm:mx-4">
Hello 👋, My name is Robel Schwarz, I am undergraduate university student 🏫
      studying Computer Science 💻, Political Science 📜, and Economics 🏦. I like to code web applications
      and write essays about politics theory 💭. I am also a big fan of open source software and linux 🐧
</p> <div> <span>You can find me on: </span> ${renderComponent($$result2, "SocialMediaLinks", $$SocialMediaLinks, {})} <a class="cody-link" id="save-contact">Save Contact</a> </div> </section> <section class="mt-8 sm:mt-16"> <h2 class="title">Posts</h2> <ul class="space-y-4 sm:space-y-2"> ${allPostsByPinned.map((p) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreviewB, { "post": p })}`)} </ul> </section>                     ` })} `;
}, "/home/stef/itsrobel/src/pages/index.astro", void 0);

const $$file = "/home/stef/itsrobel/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, $$BaseHead as a, $$Header as b, $$Footer as c, $$FormattedDate as d, $$Icon as e, $$SocialMediaLinks as f, getAllPosts as g, sortMDByDate as h, sortMDByPinned as i, getUniqueTags as j, getCollection as k, getPostsByTag as l, getUniqueTagsWithCount as m, $$HeaderLink as n, index as o, siteConfig as s };
