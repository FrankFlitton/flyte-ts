// import { AdminServiceApi } from "../gen/flyteadmin/api.ts";

// const basePath = "http://localhost:30080";
// const flyteAdmin = new AdminServiceApi(basePath);

// // .listProjects(0, authToken, filters, "name", "DESCENDING", {})
// const main = async () => {
//   try {
//     const projects = (await flyteAdmin.listProjects()).body.projects;
//     if (!projects) throw new Error("No projects found");
//     const project = projects[0];

//     if (!project.domains) throw new Error("No projects found");

//     const domain = project.domains.find((d) => d.id === "development");
//     if (!domain) throw new Error("No development domian found");

//     const workflows = (
//       await flyteAdmin.listWorkflows(project.id ?? "", domain.id ?? "", "", 10)
//     ).body.workflows;

//     console.log(workflows);
//   } catch (err) {
//     console.log(err);
//   }
// };

// void main();
