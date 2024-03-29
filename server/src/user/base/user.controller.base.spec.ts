import {ExecutionContext, HttpStatus, INestApplication} from "@nestjs/common";
import {Test} from "@nestjs/testing";
import {ACGuard} from "nest-access-control";
import {MorganModule} from "nest-morgan";
import request from "supertest";
import {ACLModule} from "../../auth/acl.module";
import {DefaultAuthGuard} from "../../auth/defaultAuth.guard";
import {UserController} from "../user.controller";
import {UserService} from "../user.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  location: "exampleLocation",
  mail: "exampleMail",
  password: "examplePassword",
  roles: ["exampleRoles"],
  telephoneNumber: "exampleTelephoneNumber",
  username: "exampleUsername",
};
const CREATE_RESULT = {
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  location: "exampleLocation",
  mail: "exampleMail",
  password: "examplePassword",
  roles: ["exampleRoles"],
  telephoneNumber: "exampleTelephoneNumber",
  username: "exampleUsername",
};
const FIND_MANY_RESULT = [
  {
    firstName: "exampleFirstName",
    id: "exampleId",
    lastName: "exampleLastName",
    location: "exampleLocation",
    mail: "exampleMail",
    password: "examplePassword",
    roles: ["exampleRoles"],
    telephoneNumber: "exampleTelephoneNumber",
    username: "exampleUsername",
  },
];
const FIND_ONE_RESULT = {
  firstName: "exampleFirstName",
  id: "exampleId",
  lastName: "exampleLastName",
  location: "exampleLocation",
  mail: "exampleMail",
  password: "examplePassword",
  roles: ["exampleRoles"],
  telephoneNumber: "exampleTelephoneNumber",
  username: "exampleUsername",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["admin"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("User", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: service,
        },
      ],
      controllers: [UserController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  afterAll(async () => {
    await app.close();
  });
});
