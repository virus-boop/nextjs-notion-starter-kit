import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '42e20e00c14d479081296c9aef782658',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'YICHA',
  domain: 'https://yicha.notion.site/YICHA-42e20e00c14d479081296c9aef782658',
  author: 'YICHA',

  // open graph metadata (optional)
  description: 'Internet Visual Designer Blog',

  // social usernames (optional)
  //jike: 'https://okjk.co/uklX4t',
  //zhubai: 'https://yicha.zhubai.love/',
  //link3: 'https://link3.cc/yicha',
  // newsletter: 'https://yicha.zhubai.love/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'true'
  navigationStyle: 'custom',
  navigationLinks: [
       {
       title: 'Weekly',
       pageId: 'e459edb3ad4643e0b5a121b8c6d69860'
       },
      {
       title: 'Blogs',
       pageId: '75d735c1b66240899df317046d140dc0'
     }
      {
       title: 'Home',
       pageId: '42e20e00c14d479081296c9aef782658'
     }
   ]
})
