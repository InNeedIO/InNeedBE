import {PrismaClient} from "@prisma/client";
import {hash} from "bcrypt";
import * as dotenv from "dotenv";
import {parseSalt, Salt} from "../src/auth/password.service";

if (require.main === module) {
	dotenv.config();

	const {BCRYPT_SALT} = process.env;

	if (!BCRYPT_SALT) {
		throw new Error("BCRYPT_SALT environment variable must be defined");
	}

	const salt = parseSalt(BCRYPT_SALT);

	seed(salt).catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

async function seed(bcryptSalt: Salt) {
	console.info("Seeding database...");

	const client = new PrismaClient();
	const data = {
		username: "admin",
		password: await hash("admin", bcryptSalt),
		roles: ["admin"],
	};
	await client.user.upsert({
		where: {username: data.username},
		update: {},
		create: data,
	});
	void client.$disconnect();

	console.info("Seeded database successfully");
}
