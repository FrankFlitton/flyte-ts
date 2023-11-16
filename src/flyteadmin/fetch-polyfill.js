// import { XMLHttpRequest } from "xmlhttprequest";
import 'node-self';
import {
  fetch,
  //   // Blob,
  //   // blobFrom,
  //   // blobFromSync,
  //   // File,
  //   // fileFrom,
  //   // fileFromSync,
  //   // FormData,
  Headers,
  Request,
  Response,
} from "cross-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
  // globalThis.XMLHttpRequest = XMLHttpRequest;
}
