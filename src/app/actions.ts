'use server'

import { cookies } from "next/headers"

const cookieUserIdName = 'growthbook-user-id'

export async function getCookieUserId() {
  const cookieStore = cookies()
  const growthbookUserId: {value: string} | undefined = cookieStore.get(cookieUserIdName)

  let userId =
    growthbookUserId?.value ||
    [...Array(30)].map(() => Math.random().toString(36)[2]).join("");

  cookies().set(cookieUserIdName, userId)

  return userId;

}