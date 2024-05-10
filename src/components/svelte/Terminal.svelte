<script lang="ts">
export const prerender = false;
type Project = {
  name: string;
  link: string; // this can just be a link that can be "run"
  label: string[];
};
interface Log {
  input: string;
  output: string[];
  directory: string;
}


let projects: Project[] = [];
let log_history:Log[] = []
let input:string; 
let directory:string = "~";



const get_projects = async (): Promise<Project[]> => {
  try {
    const response = await fetch("/api/term", { method: "GET" });
    let data = await response.json();
    data = data.projects;
    return data;
  } catch (error) {
    return [];
};
}

const resolve_projects = async () => {
  get_projects().then((newProjects) => { projects = newProjects;});
}
resolve_projects();

const find_project = (projects: Project[], name: string): Project => {
  return projects.find((project) => project.name === name);
}
const redirect = (link: string) => {
  window.location.href = link;
}

const ls = () => {
  if (directory === "~") {
    return projects.map((item) => item.name);
  } else {
    let project_directory = find_project(projects, directory);
    let exe = project_directory.name + ".sh";
    return [exe];
  }
};


const sh = (name: string) => {
  if (name === undefined) {
    return ["No such project"];
  }
  if (name.includes("/")) {
    return ["robellion"]; //add some logic for this later
  } else {
    let project = find_project(projects, name.split(".")[0]);
    if (directory === project.name && name === `${project.name}.sh`) {
      redirect(project.link);
    }
  }
};

const cd = (name: string) => {
  const check_valid = (name: string) => {
    if (name === "~") {
      return true;
    }
    return find_project(projects, name) === undefined ? false : true;
  };
  const if_valid = (name: string) => {
    if (check_valid(name)) {
      directory = name;
      return true;
    }
    return false;
  };
  if (name === undefined || name === "home") {
    name = "~";
  }
  let valid = if_valid(name);
  return valid ? ["directory changed"] : ["No such directory"];
};

const history = () => {
  let input_history = log_history.map((item) => item.input);
  return input_history;
};


const help = () => {
  const valid_input = [
    "ls - list files and directories",
    "cd - change to director",
    "history - show command history",
    "help - show this help",
    "sh - run a project",
  ];
  return valid_input;
};
const valid_input = {
  cd,  
  history, 
  ls, 
  sh, 
  help
};

const filter_input = ():string[] => {
  let input_array = input.split(" ");
  input_array = input_array.filter((item) => item !== "");
  return input_array;
}
const eval_input = () => {
  let input_array = filter_input()
  if (input_array[0] in valid_input) {
      if (input_array.length - 1 > valid_input[input_array[0]].length) {
        return ["too many arguments"];
      } else {
        if (input_array.length > 1) {
          return valid_input[input_array[0]].apply(
            null,
            input_array.toSpliced(0, 1),
          );
        } else {
          const response = valid_input[input_array[0]]();
          return response;
        }
      }
    }
  else {
    return ["Invalid command"];
  }
};

const handle_enter = (event) => {
  if (event.key === "Enter") {
    let log: Log = {
      input: input,
      directory: directory,
      output: eval_input(),
    };
    log_history = [...log_history,log ]
    input = ""; 
  }
}
</script>
<div class="flex flex-col">
  {#each log_history as log}
    <div class="flex flex-col">
      <span>[robellion][{log.directory}]{log.input}</span>
    </div>
    {#each log.output as output}
      <span>{output}</span>
    {/each}
  {/each}
  <div id="prompt" class="flex">
      <span>[robellion]</span>
      <span>[{directory}]</span>
      <input 
        type="text" 
        class="bg-transparent border-none focus:outline-none w-full"
        bind:value={input} 
        on:keydown={handle_enter}
      />
  </div>
</div>
