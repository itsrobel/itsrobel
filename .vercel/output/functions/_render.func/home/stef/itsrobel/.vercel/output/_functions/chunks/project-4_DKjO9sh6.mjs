import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_3bPw8lcR.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus a tortor at molestie. Sed pellentesque leo auctor, auctor lorem nec, venenatis risus. Vivamus commodo ipsum vitae orci finibus, vel porta nunc viverra. In hac habitasse platea dictumst. Nunc pretium, ligula ultricies consequat sollicitudin, enim ex ullamcorper nisl.</p>";

				const frontmatter = {"title":"Project 4","description":"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci","pubDate":"Jun 08 2003","heroImage":{"url":"/cardb.png","alt":"GitHub wallpaper"},"platform":"Web","stack":["Astro","JS"],"website":"https://github.com/kirontoo/astro-theme-cody","github":"https://github.com/kirontoo/astro-theme-cody"};
				const file = "/home/stef/itsrobel/src/content/project/project-4.md";
				const url = undefined;
				function rawContent() {
					return "\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus a tortor at molestie. Sed pellentesque leo auctor, auctor lorem nec, venenatis risus. Vivamus commodo ipsum vitae orci finibus, vel porta nunc viverra. In hac habitasse platea dictumst. Nunc pretium, ligula ultricies consequat sollicitudin, enim ex ullamcorper nisl.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
