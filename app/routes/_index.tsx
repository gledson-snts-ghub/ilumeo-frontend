import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import { createUser, loginUser } from "~/api/user";
import IndexPage from "~/pages/index";
import { generateRandomUserCode } from "~/utils/generate-random-user-code";

export const action: ActionFunction = async ({
    request,
}: ActionFunctionArgs) => {
    const dataJson = await request.json();

    if (dataJson.type === "createUser") {
        const user_code = generateRandomUserCode();

        const response = await createUser({ user_code });

        return redirect(`/${response?.id}`);
    }

    if (dataJson.type === "login") {
        const response = await loginUser({ user_code: dataJson.user_code });
        console.log(response);
        return redirect(`${response?.id}`);
    }

    return {
        error: true,
    };
};

export default function Index() {
    return <IndexPage />;
}
