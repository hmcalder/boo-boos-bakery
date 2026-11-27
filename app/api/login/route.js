import bcrypt from "bcrypt";
import { pool } from "../../../lib/db";

export async function POST(request) {

    try {
        const body = await request.json();

        //check to see if the request contains an object
        if(body=== null || typeof body !== "object" || Array.isArray(body)){
            return Response.json({
                error: "Invalid login information."
            }, {status: 400});
        }

        const { email, password } = body;

        //check to see if email and password are strings
        if(typeof email !== "string" || typeof password !== "string"){
            return Response.json({
                error: "Invalid login information."
            }, {status: 400});
        }

        //check to see that both fields were entered 
        if(!email.trim() || !password.trim()){
            return Response.json({
                error: "Please enter your email and password."
            }, {status: 400});
        }

        //find the costumer using their email
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        //see if the constumer already exists 
        if (result.rows.length === 0) {
            return Response.json({
                error: "Invalid email or password."
            }, { status: 401 });
        }

        //get costumer from the database 
        const user = result.rows[0];

        //compare the entered password with the stored hashed password 
        const passwordMatches = await bcrypt.compare(password, user.password_hash);

        //checks to see if the passwords don't match
        if (!passwordMatches) {
            return Response.json({
                error: "Invalid email or password."
            }, { status: 401 });
        }

        return Response.json({
            message: "Login request received."
        });
    }

    catch (error) {
        return Response.json({
            error: "Something went wrong. Please try again."
        }, { status: 500 });
    }
}