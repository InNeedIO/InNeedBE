import {ExecutionContext, HttpStatus, INestApplication} from "@nestjs/common";
import {Test} from "@nestjs/testing";
import {ACGuard} from "nest-access-control";
import {MorganModule} from "nest-morgan";
import request from "supertest";
import {ACLModule} from "../../auth/acl.module";
import {DefaultAuthGuard} from "../../auth/defaultAuth.guard";
import {JobOfferingController} from "../jobOffering.controller";
import {JobOfferingService} from "../jobOffering.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  maxSalary: 42,
  minSalary: 42,
  title: "exampleTitle",
  author: "exampleAuthor",
};
const CREATE_RESULT = {
  city: "exampleCity",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  maxSalary: 42,
  minSalary: 42,
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    maxSalary: 42,
    minSalary: 42,
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  maxSalary: 42,
  minSalary: 42,
  title: "exampleTitle",
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

describe("JobOffering", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JobOfferingService,
          useValue: service,
        },
      ],
      controllers: [JobOfferingController],
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

  test("POST /jobOfferings", async () => {
    await request(app.getHttpServer())
      .post("/jobOfferings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /jobOfferings", async () => {
    await request(app.getHttpServer())
      .get("/jobOfferings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /jobOfferings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobOfferings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /jobOfferings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobOfferings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
