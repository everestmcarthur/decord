// Module ID: 13190
// Function ID: 13191
// Name: NoteActionCreators
// Dependencies: [1074, 1270, 2]

// Module 13190 (NoteActionCreators)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1270 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(arg0, note) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(arg0), body: { note }, oldFormErrors: true, rejectWithError: true };
    return HTTP.put(request);
  }
};
