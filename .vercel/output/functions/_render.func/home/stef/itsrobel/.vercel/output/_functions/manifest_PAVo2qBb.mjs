import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_3bPw8lcR.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"endpoints/feedback","links":[],"scripts":[],"styles":[],"routeData":{"route":"/endpoints/feedback","isIndex":false,"type":"endpoint","pattern":"^\\/endpoints\\/feedback\\/?$","segments":[[{"content":"endpoints","dynamic":false,"spread":false}],[{"content":"feedback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/endpoints/feedback.ts","pathname":"/endpoints/feedback","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"example/methods","links":[],"scripts":[],"styles":[],"routeData":{"route":"/example/methods","isIndex":false,"type":"endpoint","pattern":"^\\/example\\/methods\\/?$","segments":[[{"content":"example","dynamic":false,"spread":false}],[{"content":"methods","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/example/methods.ts","pathname":"/example/methods","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"term/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/term","isIndex":true,"type":"page","pattern":"^\\/term\\/?$","segments":[[{"content":"term","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/term/index.astro","pathname":"/term","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/projects","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/projects\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/projects.ts","pathname":"/api/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/term","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/term\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"term","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/term.ts","pathname":"/api/term","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CYH3qdW-.js"}],"styles":[{"type":"external","src":"/_astro/about.BNqUvNyM.css"},{"type":"external","src":"/_astro/about.BvaRER9F.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]:before{content:\"./ \";margin-right:-.5rem;--tw-text-opacity: 1;color:hsl(var(--theme-accent-2) / var(--tw-text-opacity))}a[data-astro-cid-eimmu3lg]{display:inline;margin-right:.25rem;--tw-text-opacity: 1;color:hsl(var(--theme-accent) / var(--tw-text-opacity))}a[data-astro-cid-eimmu3lg]:hover{text-decoration:underline}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://astro-theme-cody.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/stef/itsrobel/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/stef/itsrobel/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/stef/itsrobel/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/stef/itsrobel/src/pages/projects/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/stef/itsrobel/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/stef/itsrobel/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/stef/itsrobel/src/pages/term/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/components/blog/PostPreviewA.astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/components/blog/PostPreviewB.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["/home/stef/itsrobel/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/api/projects.ts":"chunks/pages/projects_Dmj1nay2.mjs","/src/pages/api/term.ts":"chunks/pages/term_CdZBjXfp.mjs","\u0000@astrojs-manifest":"manifest_PAVo2qBb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_tIz5X97Q.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DRtILuV8.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_Dpn_xM75.mjs","\u0000@astro-page:src/pages/api/projects@_@ts":"chunks/projects_KRu7vqWn.mjs","\u0000@astro-page:src/pages/api/term@_@ts":"chunks/term_B6oLh26W.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__T8wyzslh.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._y94x8hFu.mjs","\u0000@astro-page:src/pages/endpoints/feedback@_@ts":"chunks/feedback_1PRj1ZwV.mjs","\u0000@astro-page:src/pages/example/methods@_@ts":"chunks/methods_Db7OMrwO.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"chunks/_slug__BD6Y4O6K.mjs","\u0000@astro-page:src/pages/projects/[...page]@_@astro":"chunks/_.._D6YaTb8Q.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_DRkyVDy6.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"chunks/_.._DeIvvaWK.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_INsfrr4-.mjs","\u0000@astro-page:src/pages/term/index@_@astro":"chunks/index_C3Tpgxrk.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BOx0gjcZ.mjs","/home/stef/itsrobel/src/content/blog/angels.md?astroContentCollectionEntry=true":"chunks/angels_BSEWyYaU.mjs","/home/stef/itsrobel/src/content/blog/kings.md?astroContentCollectionEntry=true":"chunks/kings_BZbnP_bP.mjs","/home/stef/itsrobel/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_DR82HkSF.mjs","/home/stef/itsrobel/src/content/blog/void.md?astroContentCollectionEntry=true":"chunks/void_CRLr_-_b.mjs","/home/stef/itsrobel/src/content/project/project-1.md?astroContentCollectionEntry=true":"chunks/project-1_Byt3O-z8.mjs","/home/stef/itsrobel/src/content/project/project-2.md?astroContentCollectionEntry=true":"chunks/project-2_Btm96N1u.mjs","/home/stef/itsrobel/src/content/project/project-3.md?astroContentCollectionEntry=true":"chunks/project-3_Ce4eAdkS.mjs","/home/stef/itsrobel/src/content/project/project-4.md?astroContentCollectionEntry=true":"chunks/project-4_uBMegOW9.mjs","/home/stef/itsrobel/src/content/blog/angels.md?astroPropagatedAssets":"chunks/angels_D6JNfBIw.mjs","/home/stef/itsrobel/src/content/blog/kings.md?astroPropagatedAssets":"chunks/kings_CAz4YXl0.mjs","/home/stef/itsrobel/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_BaBSaqsn.mjs","/home/stef/itsrobel/src/content/blog/void.md?astroPropagatedAssets":"chunks/void_D_2l5ePf.mjs","/home/stef/itsrobel/src/content/project/project-1.md?astroPropagatedAssets":"chunks/project-1_CJ8WJiqz.mjs","/home/stef/itsrobel/src/content/project/project-2.md?astroPropagatedAssets":"chunks/project-2_CPXQvDMr.mjs","/home/stef/itsrobel/src/content/project/project-3.md?astroPropagatedAssets":"chunks/project-3_Dk4LYayy.mjs","/home/stef/itsrobel/src/content/project/project-4.md?astroPropagatedAssets":"chunks/project-4_xpYsdjD7.mjs","/home/stef/itsrobel/src/content/blog/angels.md":"chunks/angels_DBobxZM3.mjs","/home/stef/itsrobel/src/content/blog/kings.md":"chunks/kings_RQAKkQ6K.mjs","/home/stef/itsrobel/src/content/blog/using-mdx.mdx":"chunks/using-mdx_DoZC849C.mjs","/home/stef/itsrobel/src/content/blog/void.md":"chunks/void_CVPJzOD0.mjs","/home/stef/itsrobel/src/content/project/project-1.md":"chunks/project-1_BfOmzSDz.mjs","/home/stef/itsrobel/src/content/project/project-2.md":"chunks/project-2_DUWI4flP.mjs","/home/stef/itsrobel/src/content/project/project-3.md":"chunks/project-3_LVhYMNg5.mjs","/home/stef/itsrobel/src/content/project/project-4.md":"chunks/project-4_DKjO9sh6.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.DEvmU2-5.js","/astro/hoisted.js?q=0":"_astro/hoisted.CYH3qdW-.js","/astro/hoisted.js?q=1":"_astro/hoisted.-a8rPBSx.js","@astrojs/solid-js/client.js":"_astro/client.BY0Afr4X.js","src/components/solid/Terminal.tsx":"_astro/Terminal.X-Hb0Td3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BvaRER9F.css","/_astro/about.BNqUvNyM.css","/card.png","/cardb.png","/favicon.svg","/_astro/Terminal.X-Hb0Td3.js","/_astro/client.BY0Afr4X.js","/_astro/hoisted.-a8rPBSx.js","/_astro/hoisted.CYH3qdW-.js","/_astro/hoisted.DEvmU2-5.js","/_astro/web._UAUFwkQ.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/404.html","/about/index.html","/endpoints/feedback","/example/methods","/rss.xml","/tags/index.html","/term/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
