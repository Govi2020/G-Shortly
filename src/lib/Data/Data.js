import { writable } from "svelte/store";

const Data = writable({ url: "", output: ["","",""] });
export default Data;
