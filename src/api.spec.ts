import nock from "nock";
import quantconnect, { EndpointToMethod } from ".";
import { BASE_URL } from "./api";

type EndpointTestDescription<Key extends keyof EndpointToMethod> = Parameters<
  EndpointToMethod[Key]
>[0] extends undefined
  ? {
      exampleParams?: Parameters<EndpointToMethod[Key]>[0];
      apiMethod: EndpointToMethod[Key];
    }
  : {
      exampleParams: Parameters<EndpointToMethod[Key]>[0];
      apiMethod: EndpointToMethod[Key];
    };

type EndpointsTestDescription = {
  [Key in keyof EndpointToMethod]: EndpointTestDescription<Key>;
};

describe("Endpoints", () => {
  const mockToken = "214-98islaj";
  const mockUserId = "s231348jksaj";
  const version = "v2";
  const { authenticate, files, live, projects } = quantconnect({
    userId: mockUserId,
    token: mockToken,
    version,
  });

  const endpointTests: EndpointsTestDescription = {
    authenticate: {
      apiMethod: authenticate,
    },
    "files/create": {
      exampleParams: {
        content: "",
        name: "filename.py",
        projectId: 123123,
      },
      apiMethod: files.create,
    },
    "files/read": {
      exampleParams: {
        fileName: "Some filename",
        projectId: 125512,
      },
      apiMethod: files.read,
    },
    "files/update": {
      exampleParams: {
        newFileContents: "Some new content",
        newFileName: "Old name",
        projectId: 21515,
        fileName: "Current name",
        oldFileName: "Old name",
      },
      apiMethod: files.update,
    },
    "files/delete": {
      exampleParams: {
        projectId: 12314,
        name: "Some filename",
      },
      apiMethod: files.delete,
    },
    "live/read": {
      exampleParams: {
        projectId: 2141241,
        status: "Completed",
      },
      apiMethod: live.read,
    },
    "live/read/logs": {
      exampleParams: {
        format: "json",
        projectId: 0,
        algorithmId: "string",
        start: 0,
        end: 0,
      },
      apiMethod: live.logs,
    },
    "live/create": {
      exampleParams: {
        baseLiveAlgorithmSettings: {
          account: "21333",
          environment: "live",
          id: "213123",
          password: "131scsac",
          user: "2145t1fcsa1",
        },
        compileId: "ld2141414",
        serverType: "Some server",
        versionId: "124124",
        projectId: 1251251,
      },
      apiMethod: live.create,
    },
    "live/update/liquidate": {
      exampleParams: { projectId: 11524 },
      apiMethod: live.liquidate,
    },
    "live/update/stop": {
      exampleParams: { projectId: 12433 },
      apiMethod: live.stop,
    },
    "projects/create": {
      exampleParams: {
        language: "Py",
        name: "Some project name",
      },
      apiMethod: projects.create,
    },
    "projects/read": {
      exampleParams: {
        projectId: 1551232,
      },
      apiMethod: projects.read,
    },
    "projects/update": {
      exampleParams: {
        description: "A new description",
        name: "New name",
        projectId: 21512,
      },
      apiMethod: projects.update,
    },
    "projects/delete": {
      exampleParams: {
        projectId: 214124,
      },
      apiMethod: projects.delete,
    },
  };

  describe("API endpoints", () => {
    const mockQC = nock(`${BASE_URL}/${version}`);
    it.each(Object.entries(endpointTests))(
      "Endpoint %s should trigger correct request to QuantConnect, and pass the correct parameters",
      async (path, { apiMethod, exampleParams }) => {
        const returnObject = { success: true };
        let queryObject: typeof exampleParams;
        mockQC
          .get(`/${path}`)
          .query((actualQueryObject: any) => {
            queryObject = actualQueryObject;
            return true;
          })
          .reply(200, returnObject);
        const result = await apiMethod(exampleParams as never);
        if (exampleParams) {
          expect(queryObject).toBeDefined();
          Object.entries(queryObject!).forEach(([key, value]) => {
            const val = exampleParams[key as keyof typeof exampleParams];
            expect(value).toEqual(
              // @ts-ignore
              typeof val === "object" ? JSON.stringify(val) : val.toString()
            );
          });
        }
        expect(result).toEqual(returnObject);
      }
    );

    it.each(Object.entries(endpointTests))(
      "Endpoint %s should handle QuantConnect success: false response",
      async (path, { apiMethod, exampleParams }) => {
        const returnObject = { success: false };
        let queryObject: typeof exampleParams;
        mockQC
          .get(`/${path}`)
          .query((actualQueryObject: any) => {
            queryObject = actualQueryObject;
            return true;
          })
          .reply(200, returnObject);
        const result = await apiMethod(exampleParams as never);
        expect(result).toEqual(returnObject);
      }
    );

    it.each(Object.entries(endpointTests))(
      "Endpoint %s should handle QuantConnect server error",
      async (path, { apiMethod, exampleParams }) => {
        let queryObject: typeof exampleParams;
        mockQC
          .get(`/${path}`)
          .query((actualQueryObject: any) => {
            queryObject = actualQueryObject;
            return true;
          })
          .reply(500);
        expect(
          async () => await apiMethod(exampleParams as never)
        ).rejects.toThrowError(
          "quantconnect-client internal error: Request failed with status code 500"
        );
      }
    );
  });

  describe("Init arguments", () => {
    it("should init without errors given token and userId", () => {
      expect(() =>
        quantconnect({ userId: mockUserId, token: mockToken })
      ).not.toThrowError();
    });
    it("should throw error on missing token/user id", () => {
      expect(() => quantconnect({ userId: "", token: mockToken })).toThrow(
        "userId and token are required parameters!"
      );
      expect(() => quantconnect({ userId: mockUserId, token: "" })).toThrow(
        "userId and token are required parameters!"
      );
    });

    it("should throw error on unsupported versions", () => {
      expect(() =>
        quantconnect({ userId: mockUserId, token: mockToken, version: "v1" })
      ).toThrow(
        "quantconnect-client internal error: Invalid version used, supported versions are: v2. Got: v1!"
      );
    });
  });
});
