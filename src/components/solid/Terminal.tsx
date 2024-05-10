// export const prerender = false;
// import { createSignal } from "solid-js";
// import { For } from "solid-js";
//
// type Project = {
//   name: string;
//   link: string; // this can just be a link that can be "run"
//   label: string[];
// };
// interface Log {
//   command: string;
//   output: string[];
//   directory: string;
// }
//
// async function getProjects(): Promise<Project[]> {
//   try {
//     const response = await fetch("/api/term", { method: "GET" });
//     let data = await response.json();
//     data = data.projects;
//     return data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
// function findProject(projects: Project[], name: string): Project {
//   return projects.find((project) => project.name === name);
// }
// function redirect(link: string) {
//   window.location.href = link;
// }
//
// export function Terminal() {
//   const [command, setCommand] = createSignal("");
//   const [history, setHistory] = createSignal([]);
//   const [projects, setProjects] = createSignal([]);
//   const [dir, setDir] = createSignal("~");
//
//   const resolveProjects = async () => {
//     getProjects().then((data) => {
//       setProjects(data);
//     });
//   };
//   resolveProjects();
//
//   const ls = () => {
//     if (dir() === "~") {
//       return projects().map((item) => item.name);
//     } else {
//       let project_directory = findProject(projects(), dir());
//       let exe = project_directory.name + ".sh";
//       return [exe];
//     }
//   };
//   const sh = (name: string) => {
//     if (name === undefined) {
//       return ["No such project"];
//     }
//     if (name.includes("/")) {
//       return ["robellion"]; //add some logic for this later
//     } else {
//       let project = findProject(projects(), name.split(".")[0]);
//       if (dir() === project.name && name === `${project.name}.sh`) {
//         console.log("running " + project.name);
//         redirect(project.link);
//       }
//     }
//   };
//
//   const cd = (directory: string) => {
//     const checkValid = (directory: string) => {
//       if (directory === "~") {
//         return true;
//       }
//       return findProject(projects(), directory) === undefined ? false : true;
//     };
//     const ifValid = (directory: string) => {
//       if (checkValid(directory)) {
//         setDir(directory);
//         return true;
//       }
//       return false;
//     };
//     if (directory === undefined || directory === "home") {
//       directory = "~";
//     }
//     let valid = ifValid(directory);
//     return valid ? ["directory changed"] : ["No such directory"];
//   };
//
//   const show_history = () => {
//     let command_history = history().map((item) => item.command);
//     return command_history;
//   };
//
//   const help = () => {
//     const command_list = [
//       "ls - list files and directories",
//       "cd - change to director",
//       "history - show command history",
//       "help - show this help",
//       "sh - run a project",
//     ];
//     return command_list;
//   };
//   const commands = {
//     ls: ls,
//     cd: cd,
//     history: show_history,
//     help: help,
//     sh: sh,
//   };
//
//   const command_output = () => {
//     let command_list = command().split(" ");
//     if (command_list[0] in commands) {
//       if (command_list.length - 1 > commands[command_list[0]].length) {
//         console.log("too many arguments");
//         return "too many arguments";
//       } else {
//         if (command_list.length > 1) {
//           return commands[command_list[0]].apply(
//             null,
//             command_list.toSpliced(0, 1),
//           );
//         } else {
//           const response = commands[command_list[0]]();
//           return response;
//         }
//       }
//     }
//   };
//   const handleEnter = (event: KeyboardEvent) => {
//     if (event.key === "Enter") {
//       let log: Log = {
//         //this determains execution order
//         command: command(),
//         directory: dir(),
//         output: command_output(),
//       };
//       setHistory([...history(), log]);
//       setCommand("");
//     }
//   };
//   return (
//     <div class="flex flex-col">
//       <For
//
//         each={history()}
//         // fallback={<div>Loading...</div>}
//       >
//         {(item) => (
//           <div class="flex flex-col">
//             <span id="dir">
//               [robellion][{item.directory}]{item.command}
//               {/* this should not update to that latest call   */}
//             </span>
//
//             {/* {item.output} */}
//             <For each={item.output}>{(output) => <span>{output}</span>}</For>
//           </div>
//         )}
//       </For>
//
//       <div id="prompt" class="flex">
//         <span>[robellion]</span>
//         <span>[{dir()}]</span>
//         <input
//           type="text"
//           class="bg-transparent border-none focus:outline-none w-full"
//           value={command()}
//           onInput={(e) => {
//             setCommand(e.target.value);
//           }}
//           onKeyDown={handleEnter}
//         />
//       </div>
//     </div>
//   );
// }
