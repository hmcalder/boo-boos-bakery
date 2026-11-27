import bcrypt from "bcrypt";
import { pool } from "../../../lib/db";

export async function POST(request) {

    try {
        const body = await request.json();

        //check to see that the request constains an object 
        if(body === null || typeof body !== "object" || Array.isArray(body)){
            return Response.json({
                error: "Invalid registration information."
            }, {status: 400});
        }

        const { name, email, password } = body;

        //checking to see if the user entered the correct type of info.
        if(typeof name != "string" || typeof email != "string" || typeof password != "string"){
            return Response.json({
                error:"Invalid registration type."
            }, {status: 400});
        }

        //check to see if the infromation was entered.
        if (!name.trim() || !email.trim() || !password.trim()) {
            return Response.json({
                error: "Please enter all required fields."
            }, { status: 400 });
        }

        //giving a max length 
        if(name.length > 50 || email.length > 254){
            return Response.json({
                error: "One or more fields were too long."
            }, {status: 400});
        }

        //giving a minimum length of 8 characters and no more thn 72 bytes.
        if(password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
            return Response.json({
                error: "Password must be longer then 8 characters and less than 72 bytes to be accepted."
            }, {status: 400});
        }

        //check email format
        if(!email.includes("@") || !email.includes(".")){
            return Response.json({
                error: "Please enter a valid email address."
            }, {status: 400});
        }

        //check to see if the email has already been registered. 
        const existingUser = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        //checks for duplicated email before insertion into the database.
        if (existingUser.rows.length > 0) {
            return Response.json({
                error: "An account with this email already exists. Please sign in."
            }, { status: 409 });
        }

        //hash the password after it is validated
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await pool.query(
            "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, role",
            [name, email, hashedPassword]
        );


        return Response.json({
            message: "Account created successfully!",
            user: result.rows[0]
        }, { status: 201 });
    }
    catch (error) {
        //check if the request conatins invalid JSON
        if(error instanceof SyntaxError){
            return Response.json({
                error: "Invalid request format."
            }, {status: 400});
        }

         //checks to see if the databse rejects the insertion. 
        if (error.code === "23505") {
            return Response.json({
                error: "An account with this email already exists. Please sign in."
            }, { status: 409 });
        }
        else {
            return Response.json({
                error: "Something went wrong. Please try again at a later time."
            }, { status: 500 });
        }

    }
}