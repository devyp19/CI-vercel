export const SUPABSE_CREDS = {
  // COMMON_URL: process.env.REACT_APP_SUPABSE_COMMON_URL,
  // PROJECT_REFERENCE_ID: process.env.REACT_APP_PROJECT_REFERENCE_ID,
  // PUBLIC_API_KEY: process.env.REACT_APP_PUBLIC_API_KEY,
  // SECRET_API_KEY: process.env.REACT_APP_SECRET_API_KEY,
  COMMON_URL: "https://awmgldofkkbalduukncj.supabase.co/",
  PROJECT_REFERENCE_ID: "awmgldofkkbalduukncj",
  //anon
  PUBLIC_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg",
  // Service role
  SECRET_API_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjMyOTIxMiwiZXhwIjoxOTgxOTA1MjEyfQ.LJLtlKbgUr0m7XfI-NFz-O-Xbpw0GIiXyY_SeRUcKds",
};

export const KEKA_CREDS = {
  // KEKA_API_KEY: process.env.REACT_APP_KEKA_API_KEY,
  // KEKA_CLIENT_ID: process.env.REACT_APP_KEKA_CLIENT_ID,
  // KEKA_CLIENT_SECRET_KEY: process.env.REACT_APP_KEKA_CLIENT_SECRET_KEY,

  KEKA_API_KEY: "BHuUj54l9p8/hkmDAnuAP1TPBL1vNVKJbKc+2SlQcqw=",
  KEKA_CLIENT_ID: "421347ba-17c6-44a5-864a-246002277b82",
  KEKA_CLIENT_SECRET_KEY: "Yj1n7jrd3nCtCl1QRxBF",
};

export const KEKA_ORGANISATION_NAME = "dhiwise";

export const FRESHTEAM_ORGANISATION_NAME = "dhiwise";

// export const FRESHTEAM_TOKEN: process.env.REACT_APP_FRESHTEAM_TOKEN;
export const FRESHTEAM_TOKEN = "EABOS9si797sQ5daiFgpnQ";

export const BACKEND_URL = "http://localhost:8045/";

export const GOOGLE_FORM_TOKEN = "Bearer ya29.a0AX9GBdVzNRbw1A-XVLqUk8dBpud7ymRDbD98w16mtgd-LgGxSlhDi4FgZ4EdQfW3M1L6nFCLSGcoOTSXeLrR7nKx5gR2TS166wSZTRdT2e2te0hmAkRmobot8HdsX1jAwt2Zy-vKcry-Cc4HtdP79JNd-Vx9aCgYKAQMSARESFQHUCsbCaat9loTokkkaaw2Mngq3Yw0163";

export const gender = [
  {
    value: 0,
    label: "NotSpecified",
  },
  {
    value: 1,
    label: "Male",
  },
  {
    value: 2,
    label: "Female",
  },
  {
    value: 3,
    label: "Others",
  },
];

export const USER_TYPE = {
  Admin: 2,
  User: 3,
  Guest: 4,
};

export const userDropdown = [
  {
    value: 2,
    label: "Admin",
  },
  {
    value: 3,
    label: "User",
  },
  {
    value: 4,
    label: "Guest",
  },
];

export const ADMIN_ROUTES = [
  "/admin/employeedirectory",
  "/admin/employeelist",
  "/admin/documents",
  "/admin/documentsone",
  "/admin/files",
  "/admin/filesone",
  "/admin/permission",
  "/admin/spacemanagement",
  "/admin/viewspace",
  "/admin/bookspacedaily",
  "/admin/bookspaceweekly",
  "/admin/bookspacemonthly",
  "/admin/viewbooking",
  "/admin/mybooking",
  "/admin/mybookingfilter",
  "/admin/editspace",
  "/admin/employeepage",
  "/admin/invitation",
  "/admin/toolsettings",
  "/admin/datasettings",
  "/admin/resourcedata",
  "/admin/dashboard",
  "/admin/ats",
  "/admin/atsflutter",
  "/admin/myProfile",
];

export const USER_ROUTES = [
  "/employeedirectory",
  "/spacemanagementdelete",
  "/spacemanagement",
  "/viewspace",
  "/bookspacedaily",
  "/bookspaceweekly",
  "/bookspacemonthly",
  "/viewbooking",
  "/mybooking",
  "/mybookingfilter",
  "/documents",
  "/documentsone",
  "/files",
  "/votes",
  "/myvotes",
  "/allapplication",
  "/dashboard",
  "/votehere",
  "/bookings",
  "/myProfile",
];

export const VOTES_CONST = {
  ACCEPTED: "Accepted",
  ACCEPTED_COLOR: "text-green-500",
  REJECTED: "Rejected",
  REJECTED_COLOR: "text-red-500",
};

export const TECH_TAG = [
  { job_title: "react", tech_tag: "react" },
  { job_title: "react (remote)", tech_tag: "react" },
  { job_title: "flutter", tech_tag: "flutter" },
  { job_title: "flutter (remote)", tech_tag: "flutter" },
  { job_title: "node", tech_tag: "node" },
  { job_title: "node (remote)", tech_tag: "flutter" },
  { job_title: "android", tech_tag: "android" },
  { job_title: "android (remote)", tech_tag: "flutter" },
  { job_title: "ios", tech_tag: "ios" },
  { job_title: "ios (remote)", tech_tag: "ios" },
  { job_title: "chief everything officer ", tech_tag: "ceo" },
  { job_title: "chief everything officer (remote)", tech_tag: "ceo" },
  { job_title: "chief everything officer python", tech_tag: "python" },
  { job_title: "chief everything officer python (remote)", tech_tag: "python" },
  { job_title: "demo job", tech_tag: "react" },
  { job_title: "demo job (remote))", tech_tag: "react" },
];

export const FILE_FOLDER_CONST = {
  DEL_FILE: "Delete file",
  DEL_FOLDER: "Delete folder",
  FOLDER_IMAGE: "/images/img_folder_white_A700.png",
  FILE_IMAGE: "/images/img_paper.png",
};

export const FILE_FOLDER_TOKEN_CONST = {
  ONE_DRIVE_TOKEN: {
    CLIENT_ID: "onedriveClientId",
    REDIRECT_URI: "onedriveRediretUri",
    CLIENT_SECRET: "onedriveClientSecret",
    CODE: "onedriveCode",
    ACCESS_TOKEN: "onedriveAccessToken",
    REFRESH_TOKEN: "onedriveRefreshToken",
  },
  GOOGLE_DRIVE_TOKEN: {
    CLIENT_ID: "googleDriveClientId",
    REDIRECT_URI: "googleDriveRediretUri",
    CLIENT_SECRET: "googleDriveClientSecret",
    CODE: "googleDriveCode",
    ACCESS_TOKEN: "googleDriveAccessToken",
    REFRESH_TOKEN: "googleDriveRefreshToken",
  },
  DROPBOX_TOKEN: {
    CLIENT_ID: "dropboxClientId",
    REDIRECT_URI: "dropboxRediretUri",
    CLIENT_SECRET: "dropboxClientSecret",
    CODE: "dropboxCode",
    ACCESS_TOKEN: "dropboxAccessToken",
    REFRESH_TOKEN: "dropboxRefreshToken",
  },
};
