import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import Index from "~/pages/index";
import { createUser } from "../api/user";
import { generateRandomUserCode } from "../utils/generate-random-user-code";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const dataJson = await request.json();

  if (dataJson.type === "createUser") {
    const user_code = generateRandomUserCode();

    const response = await createUser({ user_code });
    console.log(response);

    return redirect(`/users/${response?.id}`);
  }
};

export default function IndexPage() {
  return <Index />;
}
