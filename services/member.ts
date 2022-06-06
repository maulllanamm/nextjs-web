import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getMemberOverview() {
  const URL = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url: URL,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransactions() {
  const URL = `${ROOT_API}/${API_VERSION}/players/history`;

  return callAPI({
    url: URL,
    method: "GET",
    token: true,
  });
}
