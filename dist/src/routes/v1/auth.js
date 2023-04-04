"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loadpages_1 = require("../../controller/loadpages");
const router = (0, express_1.Router)();
router.get("/home", loadpages_1.home);
router.post("/register", loadpages_1.register);
router.patch("/edit/:id", loadpages_1.edit);
router.delete("/remove/:id", loadpages_1.remove);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvdjEvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQywwREFBMEU7QUFDMUUsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsZ0JBQUksQ0FBQyxDQUFDO0FBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLG9CQUFRLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQkFBSSxDQUFDLENBQUM7QUFFaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsa0JBQU0sQ0FBQyxDQUFDO0FBRXJDLGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBob21lLCByZWdpc3RlciwgZWRpdCwgcmVtb3ZlIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXIvbG9hZHBhZ2VzXCI7XG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLmdldChcIi9ob21lXCIsIGhvbWUpO1xuXG5yb3V0ZXIucG9zdChcIi9yZWdpc3RlclwiLCByZWdpc3Rlcik7XG5cbnJvdXRlci5wYXRjaChcIi9lZGl0LzppZFwiLCBlZGl0KTtcblxucm91dGVyLmRlbGV0ZShcIi9yZW1vdmUvOmlkXCIsIHJlbW92ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==