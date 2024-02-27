// "use server";

// import { cookies } from "next/headers";
// import { signIn } from "next-auth/client"; // Import the signIn function from the correct module path

// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method === "POST") {
//         try {
//             const session = await signIn("credentials", req.body);
//             res.status(200).json({ session });
//         } catch (error: Error) {
//             res.status(401).json({ error: error.message });
//         }
//     } else {
//         // Return current user data on GET request
//         if (!req.cookies[cookies.name]) {
//             return res.status(200).json({ user: null });
//         }

//         let user;
//         try {
//             user = JSON.parse(req.cookies[cookies.name] || "");
//         } catch (e) {}

//         res.status(200).json({ user });
//     }
// }

// export async function handleLogin(sessionData: unknown) {
//     const encryptedSessionData = encrypt(sessionData); // Encrypt your session data
//     cookies().set("session", encryptedSessionData, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         maxAge: 60 * 60 * 24 * 7, // One week
//         path: "/",
//     });
//     // Redirect or handle the response after setting the cookie
// }

// export async function authenticate(_currentState: unknown, formData: FormData) {
//     try {
//         await signIn("credentials", formData);
//     } catch (error) {
//         if (error) {
//             switch ((error as { type: string }).type) {
//                 case "CredentialsSignin":
//                     return "Invalid credentials.";
//                 default:
//                     return "Something went wrong.";
//             }
//         }
//         throw error;
//     }
// }

// // export async function serverAction() {
// //   const session = await getSession();
// //   const userRole = session?.user?.role;

// //   // Check if user is authorized to perform the action
// //   if (userRole !== "admin") {
// //     throw new Error(
// //       "Unauthorized access: User does not have admin privileges."
// //     );
// //   }

// // Proceed with the action for authorized users
// // ... implementation of the action
// // }
