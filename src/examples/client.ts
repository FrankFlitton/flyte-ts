import { AdminServiceApi } from "../flyteadmin/api.ts";

const basePath = "http://localhost:30080";
const flyteAdmin = new AdminServiceApi({ basePath });

export function setupData(element: HTMLButtonElement) {
  const setData = (data: string) => {
    element.innerHTML = `data is ${data}`;
  };
  element!.innerHTML = "Loading...";

  try {
    flyteAdmin
      .listProjects()
      .then((res) => res.projects)
      .then((projects) => {
        setData(projects![0]?.id ?? "No projects found");
      });
  } catch (err) {
    console.log(err);
    throw err;
  }
}
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
<h1>Vite + TypeScript</h1>
<p id="data">
</p>
</div>
`;

setupData(document.querySelector<HTMLButtonElement>("#data")!);
