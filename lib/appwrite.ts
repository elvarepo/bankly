"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
    // new Client()=>create new operate client
  const client = new Client() // 
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) // set endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!); // set project, so new client new which project and andpoint to modify

    // name will be different for each project => appwrite-elv-session
  const session = cookies().get("appwrite-elv-session");

  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}

