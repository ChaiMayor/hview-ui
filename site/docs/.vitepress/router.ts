// const getUseRequestRouter = (langPrefix = "/") => {
//   if (langPrefix === "/") return useRequestRouter;
//   else return useRequestRouterEN;
// };

// export function getRouterConfig(langPrefix = "/") {
//   return [
//     {
//       text: langPrefix === "/" ? "介绍" : "Getting started",
//       items: [
//         {
//           text: langPrefix === "/" ? "🪧 入手指南" : "🪧 Guide",
//           link: `${langPrefix}guide/`,
//         },
//         {
//           text: langPrefix === "/" ? "📐 UseRequest规范" : "📐 UseRequest specification",
//           link: `${langPrefix}useRequest/guide/`,
//         },
//         // {
//         //   text: langPrefix === '/' ? '🧑‍🏫 在线教程' : '🧑‍🏫 Online Teaching',
//         //   link: `${langPrefix}onlineTeaching/`,
//         // },
//       ],
//     },
//     ...getUseRequestRouter(langPrefix),
//     ...Router.map((item) => ({
//       text: item.text,
//       items: item.items?.map((i) => ({
//         text: i.text,
//         link: `${langPrefix}${i.link.replace("/", "")}`,
//       })),
//     })),
//   ];
// }
