import { ID, Query } from 'appwrite';

import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases,} from './config';

export async function createUserAccount(user : INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.username,
        );

        if(!newAccount) throw new Error("Failed to create account");

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId : newAccount.$id,
            name : newAccount.name,
            email : newAccount.email,
            username : user.username,
            imageUrl : avatarUrl,
        });

        if(!newUser) throw new Error("Failed to save user to database");

        return newAccount;
    } 
    catch (error: any) {
        console.error("Error creating user account:", error);
        throw new Error(error?.message || "Failed to create account");
    }
}

export async function saveUserToDB(user: {
    accountId : string;
    email : string;
    name : string;
    imageUrl : URL;
    username? : string;
})  {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user,
        );
        return newUser;
    }  catch (error) {
        console.log(error);
    }
}

export async function signInAccount(user: { 
    email: string; 
    password: string; 
}) {
    try {
        const session = await account.createEmailSession(user.email, user.password);
        if(!session) throw new Error("Failed to create session");
        return session;
    } catch (error: any) {
        console.error("Error signing in:", error);
        
        // Handle specific Appwrite error codes
        if (error?.code === 401) {
            throw new Error("Invalid email or password");
        } else if (error?.code === 429) {
            throw new Error("Too many attempts. Please try again later");
        } else if (error?.code === 503) {
            throw new Error("Service temporarily unavailable. Please try again later");
        }
        
        throw new Error(error?.message || "Failed to sign in. Please try again");
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];

    }   catch (error) {
        console.log(error);
    }
}

export async function signOutAccount() {
    try {
        const session = await account.deleteSession('current');
        return session;
    } catch (error) {
        console.log(error);
    }
}